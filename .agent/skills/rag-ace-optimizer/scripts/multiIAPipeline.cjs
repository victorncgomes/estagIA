/**
 * RAG-ACE Optimizer v2.0 - Multi-IA Pipeline
 * 
 * Pipeline de validação cruzada com múltiplas IAs:
 * 1. Gemini Flash → Gera base rápida
 * 2. GPT-4o-mini → Melhora argumentação
 * 3. Claude Sonnet → Redação final jurídica
 * 4. Perplexity → Fact-check citações
 * 5. Grok → Validação final
 * 
 * Este pipeline é MAIS LENTO (~30-60s) mas reduz alucinações drasticamente.
 * 
 * Uso:
 *   node .agent/skills/rag-ace-optimizer/scripts/multiIAPipeline.cjs --tema=remicao
 */

const fs = require('fs');
const path = require('path');

// ============================================
// PATHS E CONFIG
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const BACKEND_ENV = path.join(ROOT, 'backend', '.env');

// Carregar variáveis de ambiente
function loadEnv() {
    if (fs.existsSync(BACKEND_ENV)) {
        const content = fs.readFileSync(BACKEND_ENV, 'utf-8');
        content.split('\n').forEach(line => {
            const [key, ...vals] = line.split('=');
            if (key && vals.length) {
                process.env[key.trim()] = vals.join('=').trim();
            }
        });
    }
}

loadEnv();

// ============================================
// CLIENTS DE API
// ============================================

// Gemini Flash - Geração rápida
async function callGemini(prompt, options = {}) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error('GEMINI_API_KEY não configurada');

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    maxOutputTokens: options.maxTokens || 4000,
                    temperature: options.temperature || 0.3
                }
            })
        }
    );

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Gemini Error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// OpenAI GPT - Melhoria de argumentação
async function callGPT(prompt, options = {}) {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
        console.log('   ⚠️  OPENAI_API_KEY não configurada, pulando GPT');
        return null;
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
            model: options.model || 'gpt-4o-mini',
            messages: [
                { role: 'system', content: 'Você é um especialista em redação jurídica de execução penal.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: options.maxTokens || 4000,
            temperature: options.temperature || 0.3
        })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`GPT Error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// Claude - Redação final
async function callClaude(prompt, options = {}) {
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) {
        console.log('   ⚠️  ANTHROPIC_API_KEY não configurada, pulando Claude');
        return null;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': key,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: options.model || 'claude-3-5-sonnet-20241022',
            max_tokens: options.maxTokens || 4000,
            messages: [
                { role: 'user', content: prompt }
            ]
        })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Claude Error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.content[0].text;
}

// Perplexity - Fact-checking
async function callPerplexity(prompt, options = {}) {
    const key = process.env.PERPLEXITY_API_KEY;
    if (!key) {
        console.log('   ⚠️  PERPLEXITY_API_KEY não configurada, pulando Perplexity');
        return null;
    }

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
            model: options.model || 'sonar',
            messages: [
                { role: 'user', content: prompt }
            ],
            max_tokens: options.maxTokens || 2000
        })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Perplexity Error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// Grok - Validação final
async function callGrok(prompt, options = {}) {
    const key = process.env.XAI_API_KEY;
    if (!key) {
        console.log('   ⚠️  XAI_API_KEY não configurada, pulando Grok');
        return null;
    }

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify({
            model: options.model || 'grok-2-latest',
            messages: [
                { role: 'user', content: prompt }
            ],
            max_tokens: options.maxTokens || 2000
        })
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Grok Error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// ============================================
// PIPELINE PRINCIPAL
// ============================================
async function executarPipeline(caso, contextoRAG) {
    const resultado = {
        timestamp: new Date().toISOString(),
        caso,
        etapas: [],
        decisao_final: null,
        fact_check: null,
        tempo_total: 0
    };

    const inicioTotal = Date.now();

    console.log('\n🔄 PIPELINE MULTI-IA');
    console.log('═══════════════════════════════════════════════════════\n');

    // ETAPA 1: Gemini Flash - Gera base
    console.log('1️⃣  Gemini Flash → Gerando base...');
    let inicio = Date.now();

    const promptBase = `
# DECISÃO JUDICIAL - EXECUÇÃO PENAL

## CONTEXTO RAG
${contextoRAG}

## CASO
${JSON.stringify(caso, null, 2)}

## TAREFA
Gere uma decisão judicial completa seguindo:
1. Estrutura Art. 489 CPC (Vistos, Relatório, Fundamentação, Dispositivo)
2. Citações doutrinárias APENAS do contexto fornecido
3. Linguagem técnico-jurídica formal

IMPORTANTE: NÃO INVENTE citações. Use APENAS o que está no contexto.
`;

    try {
        const baseGemini = await callGemini(promptBase);
        resultado.etapas.push({
            ia: 'gemini',
            tempo: Date.now() - inicio,
            sucesso: true,
            output_length: baseGemini.length
        });
        console.log(`   ✅ Gerado em ${(Date.now() - inicio) / 1000}s (${baseGemini.length} chars)`);

        // ETAPA 2: GPT - Melhora argumentação
        console.log('\n2️⃣  GPT-4o-mini → Melhorando argumentação...');
        inicio = Date.now();

        const promptMelhoria = `
Você é um revisor jurídico especializado em execução penal.

DECISÃO ORIGINAL:
${baseGemini}

TAREFA:
1. Melhore a argumentação jurídica
2. Adicione conectivos e transições
3. Mantenha TODAS as citações originais (não invente novas)
4. Preserve a estrutura Art. 489 CPC

Retorne a decisão melhorada.
`;

        const melhoradoGPT = await callGPT(promptMelhoria);
        if (melhoradoGPT) {
            resultado.etapas.push({
                ia: 'gpt',
                tempo: Date.now() - inicio,
                sucesso: true,
                output_length: melhoradoGPT.length
            });
            console.log(`   ✅ Melhorado em ${(Date.now() - inicio) / 1000}s`);
        }

        // ETAPA 3: Claude - Redação final
        console.log('\n3️⃣  Claude Sonnet → Redação final...');
        inicio = Date.now();

        const textoAtual = melhoradoGPT || baseGemini;

        const promptRedacao = `
Você é um juiz de execução penal com expertise em redação de decisões.

DECISÃO ATUAL:
${textoAtual}

TAREFA:
1. Refine a linguagem para máxima formalidade jurídica
2. Garanta que a estrutura Art. 489 CPC está perfeita
3. NÃO MODIFIQUE as citações ou referências legais
4. Mantenha o mesmo comprimento aproximado

Retorne a decisão com redação final.
`;

        const redacaoClaude = await callClaude(promptRedacao);
        if (redacaoClaude) {
            resultado.etapas.push({
                ia: 'claude',
                tempo: Date.now() - inicio,
                sucesso: true,
                output_length: redacaoClaude.length
            });
            console.log(`   ✅ Redação final em ${(Date.now() - inicio) / 1000}s`);
        }

        resultado.decisao_final = redacaoClaude || melhoradoGPT || baseGemini;

        // ETAPA 4: Perplexity - Fact-check
        console.log('\n4️⃣  Perplexity → Fact-checking citações...');
        inicio = Date.now();

        const promptFactCheck = `
DECISÃO JUDICIAL PARA VERIFICAÇÃO:
${resultado.decisao_final}

TAREFA:
Verifique se as seguintes informações são corretas:
1. Citações doutrinárias (autor, obra, conteúdo)
2. Referências a súmulas do STJ/STF
3. Artigos de lei citados (LEP, CP)

Para cada citação, responda:
- CONFIRMADO: Se a citação existe e está correta
- NÃO ENCONTRADO: Se não conseguiu verificar
- INCORRETO: Se há erro na citação

Formato JSON:
{
  "citacoes_verificadas": [...],
  "alertas": [...],
  "score_confianca": 0-100
}
`;

        const factCheckPerplexity = await callPerplexity(promptFactCheck);
        if (factCheckPerplexity) {
            resultado.etapas.push({
                ia: 'perplexity',
                tempo: Date.now() - inicio,
                sucesso: true,
                tipo: 'fact_check'
            });
            resultado.fact_check = { perplexity: factCheckPerplexity };
            console.log(`   ✅ Fact-check em ${(Date.now() - inicio) / 1000}s`);
        }

        // ETAPA 5: Grok - Validação final
        console.log('\n5️⃣  Grok → Validação final...');
        inicio = Date.now();

        const promptValidacao = `
DECISÃO JUDICIAL:
${resultado.decisao_final}

FACT-CHECK ANTERIOR:
${factCheckPerplexity || 'Não disponível'}

TAREFA:
Faça uma validação final:
1. A decisão faz sentido jurídico?
2. Há inconsistências lógicas?
3. As frações/cálculos estão corretos?
4. Recomenda aprovação ou revisão?

Responda em formato JSON:
{
  "aprovado": true/false,
  "score": 0-100,
  "observacoes": [...],
  "recomendacao": "aprovar" | "revisar" | "rejeitar"
}
`;

        const validacaoGrok = await callGrok(promptValidacao);
        if (validacaoGrok) {
            resultado.etapas.push({
                ia: 'grok',
                tempo: Date.now() - inicio,
                sucesso: true,
                tipo: 'validacao'
            });
            resultado.fact_check = {
                ...resultado.fact_check,
                grok: validacaoGrok
            };
            console.log(`   ✅ Validação em ${(Date.now() - inicio) / 1000}s`);
        }

    } catch (error) {
        resultado.etapas.push({
            ia: 'error',
            erro: error.message,
            sucesso: false
        });
        console.log(`   ❌ Erro: ${error.message}`);
    }

    resultado.tempo_total = Date.now() - inicioTotal;

    // Resumo
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📊 RESUMO DO PIPELINE');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`   Tempo total: ${(resultado.tempo_total / 1000).toFixed(1)}s`);
    console.log(`   Etapas executadas: ${resultado.etapas.filter(e => e.sucesso).length}/${resultado.etapas.length}`);
    console.log(`   Decisão final: ${resultado.decisao_final?.length || 0} chars`);

    return resultado;
}

// ============================================
// MODO RÁPIDO (apenas verificação)
// ============================================
async function verificarApenasFactCheck(decisao) {
    console.log('🔍 Modo rápido: apenas fact-check...\n');

    const resultado = {
        timestamp: new Date().toISOString(),
        verificacoes: []
    };

    // Perplexity
    try {
        const perplexity = await callPerplexity(`
Verifique se as citações e referências legais nesta decisão são corretas:

${decisao}

Responda com lista de citações verificadas ou problemas encontrados.
`);
        resultado.verificacoes.push({ ia: 'perplexity', resultado: perplexity });
    } catch (e) {
        resultado.verificacoes.push({ ia: 'perplexity', erro: e.message });
    }

    // Grok
    try {
        const grok = await callGrok(`
Valide esta decisão judicial:

${decisao}

Há erros factuais, cálculos incorretos ou inconsistências?
`);
        resultado.verificacoes.push({ ia: 'grok', resultado: grok });
    } catch (e) {
        resultado.verificacoes.push({ ia: 'grok', erro: e.message });
    }

    return resultado;
}

// ============================================
// MAIN
// ============================================
async function main() {
    const args = process.argv.slice(2);

    console.log('\n═══════════════════════════════════════════════════════');
    console.log('🔄 RAG-ACE Multi-IA Pipeline v2.0');
    console.log('═══════════════════════════════════════════════════════');

    // Verificar APIs disponíveis
    console.log('\n📡 APIs Configuradas:');
    console.log(`   Gemini:     ${process.env.GEMINI_API_KEY ? '✅' : '❌'}`);
    console.log(`   OpenAI:     ${process.env.OPENAI_API_KEY ? '✅' : '❌'}`);
    console.log(`   Anthropic:  ${process.env.ANTHROPIC_API_KEY ? '✅' : '❌'}`);
    console.log(`   Perplexity: ${process.env.PERPLEXITY_API_KEY ? '✅' : '❌'}`);
    console.log(`   Grok/xAI:   ${process.env.XAI_API_KEY ? '✅' : '❌'}`);

    if (args.includes('--test')) {
        // Teste rápido com caso mock
        const casoTeste = {
            tema: 'remicao',
            reu: 'João da Silva',
            pedido: 'Remição por estudo',
            orientacao: 'Deferir 48 dias de remição'
        };

        const contextoRAG = `
## LEGISLAÇÃO
Art. 126 da LEP: O condenado que cumpre a pena em regime fechado ou semiaberto 
poderá remir, por trabalho ou por estudo, parte do tempo de execução da pena.

## MODELO DE REFERÊNCIA
Vistos etc. Trata-se de pedido de remição por estudo formulado pelo apenado.
O Ministério Público opinou pelo deferimento. Relatados.
O pedido deve ser deferido, pois preenchidos os requisitos legais.
Isso posto, defiro a remição de X dias. P.R.I.

## DOUTRINA
BALTAZAR JR., José Paulo. Comentários à Lei de Execução Penal. 
5ª ed. Saraiva, 2024, p. 127.
`;

        await executarPipeline(casoTeste, contextoRAG);
    } else {
        console.log('\nUso:');
        console.log('  node multiIAPipeline.cjs --test');
    }
}

module.exports = {
    executarPipeline,
    verificarApenasFactCheck,
    callGemini,
    callGPT,
    callClaude,
    callPerplexity,
    callGrok
};

if (require.main === module) {
    main().catch(console.error);
}
