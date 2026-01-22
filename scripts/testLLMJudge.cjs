/**
 * estagIA - Teste do LLM Judge
 * 
 * Testa o sistema de validação com uma decisão gerada
 * 
 * Uso: node scripts/testLLMJudge.cjs
 */

const fs = require('fs');
const path = require('path');

// Carregar env
const envPath = path.join(__dirname, '..', 'backend', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const geminiKey = envContent.match(/GEMINI_API_KEY=([^\r\n]+)/)?.[1]?.trim();

// Prompt do Judge
const JUDGE_PROMPT = `# VOCÊ É UM JUIZ VALIDADOR DE DECISÕES JUDICIAIS

Você vai analisar uma decisão judicial gerada por IA e verificar sua qualidade.

## CRITÉRIOS DE VALIDAÇÃO

### 1. ESTRUTURA (25 pontos)
- [ ] Inicia com "Vistos, etc." ou "Vistos etc." (+5)
- [ ] Contém parágrafo "Relatados." sozinho (+5)
- [ ] Contém "Isso posto," antes do dispositivo (+5)
- [ ] Finaliza com "P.R.I." ou similar (+5)
- [ ] Não usa bullet points ou listas numeradas (+5)

### 2. CITAÇÕES (25 pontos)
- [ ] Citações de doutrina incluem autor, obra, editora, ano (+10)
- [ ] Citações de jurisprudência incluem tribunal e número (+10)
- [ ] Não há citações inventadas ou incompletas (+5)

### 3. COERÊNCIA (25 pontos)
- [ ] Relatório corresponde aos fatos descritos (+10)
- [ ] Fundamentação é lógica e consistente (+10)
- [ ] Dispositivo é coerente com a fundamentação (+5)

### 4. ANTI-ALUCINAÇÃO (25 pontos)
- [ ] Não inventa nomes de partes ou advogados (+10)
- [ ] Não inventa números de processos (+10)
- [ ] Não mistura matérias diferentes (+5)

## RESPONDA NO FORMATO JSON:
{
  "score": <número de 0 a 100>,
  "aprovado": <true se score >= 70>,
  "estrutura": { "ok": <boolean>, "pontos": <número>, "problemas": [] },
  "citacoes": { "ok": <boolean>, "pontos": <número>, "citacoesDetectadas": <número>, "problemas": [] },
  "coerencia": { "ok": <boolean>, "pontos": <número>, "problemas": [] },
  "alucinacoes": { "detectadas": <boolean>, "pontos": <número>, "lista": [] },
  "sugestoes": []
}

RESPONDA APENAS COM O JSON.

## DECISÃO A VALIDAR:
`;

// Decisão de teste (do último benchmark)
const ultimoBenchmark = path.join(__dirname, '..', 'knowledge', 'prompts', 'ultimo_benchmark.json');

async function testarJudge() {
    console.log('═══════════════════════════════════════════════════════');
    console.log('🧑‍⚖️ estagIA - Teste do LLM Judge');
    console.log('═══════════════════════════════════════════════════════\n');

    // Carregar decisão do benchmark
    let decisao;
    if (fs.existsSync(ultimoBenchmark)) {
        const benchmark = JSON.parse(fs.readFileSync(ultimoBenchmark, 'utf-8'));
        decisao = benchmark.textoGerado;
        console.log('📄 Decisão carregada do último benchmark');
        console.log(`   Tamanho: ${decisao.length} chars`);
    } else {
        // Decisão de exemplo para teste
        decisao = `Vistos etc.

Trata-se de pedido de remição da pena formulado pelo apenado, alegando ter realizado curso de informática com carga horária de 200 horas (evento 45.1).

O Ministério Público opinou pelo indeferimento, argumentando falta de comprovação adequada (evento 50.1).

Relatados.

A remição da pena por estudo encontra previsão no artigo 126 da Lei de Execução Penal, constituindo importante instrumento de ressocialização.

Contudo, para a concessão do benefício, faz-se necessária a comprovação efetiva da participação e aproveitamento nas atividades educacionais.

No caso em análise, a documentação apresentada não atende aos requisitos legais exigidos, não havendo comprovação da frequência e avaliação do apenado.

Isso posto, INDEFIRO o pedido de remição formulado.

P.R.I.`;
        console.log('📄 Usando decisão de exemplo');
    }

    console.log('\n' + '─'.repeat(55));
    console.log('📝 PRÉVIA DA DECISÃO:');
    console.log('─'.repeat(55));
    console.log(decisao.substring(0, 300) + '...\n');

    // Chamar o Judge
    console.log('🔄 Enviando para LLM Judge...');
    const inicio = Date.now();

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: JUDGE_PROMPT + '\n```\n' + decisao + '\n```' }] }],
                    generationConfig: { maxOutputTokens: 2000, temperature: 0.1 }
                })
            }
        );

        const tempo = ((Date.now() - inicio) / 1000).toFixed(1);

        if (!response.ok) {
            console.log(`❌ Erro API: ${response.status}`);
            return;
        }

        const data = await response.json();
        const textoResposta = data.candidates[0].content.parts[0].text;

        // Extrair JSON
        const jsonMatch = textoResposta.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            console.log('❌ Resposta não contém JSON');
            console.log('Resposta:', textoResposta);
            return;
        }

        const resultado = JSON.parse(jsonMatch[0]);

        console.log(`✅ Validação concluída em ${tempo}s\n`);
        console.log('═══════════════════════════════════════════════════════');
        console.log('📊 RESULTADO DA VALIDAÇÃO');
        console.log('═══════════════════════════════════════════════════════\n');

        const status = resultado.aprovado ? '✅ APROVADO' : '❌ REPROVADO';
        console.log(`🎯 ${status} - Score: ${resultado.score}/100\n`);

        console.log('📋 DETALHES:');
        console.log(`   Estrutura: ${resultado.estrutura?.pontos || 0}/25 ${resultado.estrutura?.ok ? '✅' : '⚠️'}`);
        if (resultado.estrutura?.problemas?.length > 0) {
            resultado.estrutura.problemas.forEach(p => console.log(`     - ${p}`));
        }

        console.log(`   Citações: ${resultado.citacoes?.pontos || 0}/25 ${resultado.citacoes?.ok ? '✅' : '⚠️'}`);
        if (resultado.citacoes?.problemas?.length > 0) {
            resultado.citacoes.problemas.forEach(p => console.log(`     - ${p}`));
        }

        console.log(`   Coerência: ${resultado.coerencia?.pontos || 0}/25 ${resultado.coerencia?.ok ? '✅' : '⚠️'}`);
        if (resultado.coerencia?.problemas?.length > 0) {
            resultado.coerencia.problemas.forEach(p => console.log(`     - ${p}`));
        }

        console.log(`   Anti-alucinação: ${resultado.alucinacoes?.pontos || 0}/25 ${resultado.alucinacoes?.detectadas ? '⚠️' : '✅'}`);
        if (resultado.alucinacoes?.lista?.length > 0) {
            resultado.alucinacoes.lista.forEach(a => console.log(`     - ${a}`));
        }

        if (resultado.sugestoes?.length > 0) {
            console.log('\n💡 SUGESTÕES:');
            resultado.sugestoes.forEach((s, i) => console.log(`   ${i + 1}. ${s}`));
        }

        // Salvar resultado
        const outputPath = path.join(__dirname, '..', 'knowledge', 'prompts', 'ultimo_judge.json');
        fs.writeFileSync(outputPath, JSON.stringify(resultado, null, 2));
        console.log(`\n💾 Resultado salvo em: ${outputPath}`);

    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
}

testarJudge().catch(console.error);
