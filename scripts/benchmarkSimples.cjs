/**
 * estagIA - Benchmark Simplificado
 * 
 * Testa geração de decisão e compara com modelo golden
 * 
 * Uso: node scripts/benchmarkSimples.cjs
 */

const fs = require('fs');
const path = require('path');

// Paths
const TEXTOS_DIR = path.join(__dirname, '..', 'knowledge', 'decisoes', 'textos_completos');
const MODELOS_INDEX = path.join(__dirname, '..', 'knowledge', 'decisoes', 'modelos_completos_index.json');

// Carregar env
const envPath = path.join(__dirname, '..', 'backend', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const geminiKey = envContent.match(/GEMINI_API_KEY=([^\r\n]+)/)?.[1]?.trim();

console.log('🔑 API Key:', geminiKey ? `${geminiKey.substring(0, 10)}...` : 'NÃO ENCONTRADA');

// Métricas
function calcularMetricas(gerado, golden) {
    // Estrutura
    const lower = gerado.toLowerCase();
    const estrutura = {
        vistos: lower.includes('vistos') ? 1 : 0,
        relatados: lower.includes('relatados') ? 1 : 0,
        issoPosto: lower.includes('isso posto') ? 1 : 0,
        pri: lower.includes('p.r.i') ? 1 : 0
    };
    const estruturaScore = (estrutura.vistos + estrutura.relatados + estrutura.issoPosto + estrutura.pri) * 25;

    // Tamanho
    const ratio = gerado.length / golden.length;
    let tamanhoScore = 0;
    if (ratio >= 0.7 && ratio <= 1.3) tamanhoScore = 100;
    else if (ratio >= 0.5 && ratio <= 1.5) tamanhoScore = 70;
    else if (ratio >= 0.3 && ratio <= 2.0) tamanhoScore = 40;
    else tamanhoScore = 10;

    // Score final (estrutura 60%, tamanho 40%)
    const score = estruturaScore * 0.6 + tamanhoScore * 0.4;

    return { score, estrutura, estruturaScore, tamanhoScore, ratio };
}

// Gerar via Gemini
async function gerarDecisao(prompt) {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { maxOutputTokens: 8000 }
            })
        }
    );

    if (!response.ok) {
        throw new Error(`API: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// Main
async function main() {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📊 estagIA - Benchmark Simplificado');
    console.log('═══════════════════════════════════════════════════════\n');

    // Carregar índice
    const indice = JSON.parse(fs.readFileSync(MODELOS_INDEX, 'utf-8'));

    // Filtrar modelos de remição
    const remicao = indice.modelos.filter(m => m.agrupador === 'remicao');
    console.log(`📁 ${remicao.length} modelos de remição disponíveis\n`);

    // Pegar 2 modelos como exemplo e 1 como teste
    const modeloTeste = remicao[0];
    const modelosExemplo = remicao.slice(1, 3);

    // Carregar conteúdos
    const conteudoTeste = fs.readFileSync(path.join(TEXTOS_DIR, modeloTeste.arquivo_texto), 'utf-8');
    const exemplo1 = fs.readFileSync(path.join(TEXTOS_DIR, modelosExemplo[0].arquivo_texto), 'utf-8');
    const exemplo2 = fs.readFileSync(path.join(TEXTOS_DIR, modelosExemplo[1].arquivo_texto), 'utf-8');

    console.log('📄 Modelo teste:', modeloTeste.nome);
    console.log('   Tamanho golden:', conteudoTeste.length, 'chars');
    console.log('📚 Exemplos:', modelosExemplo.map(m => m.nome).join(', '));

    // Criar prompt
    const prompt = `# SISTEMA DE REDAÇÃO JURÍDICA

## REGRAS CRÍTICAS
- A decisão deve ter NO MÍNIMO ${Math.round(conteudoTeste.length * 0.8)} caracteres
- ESTRUTURA OBRIGATÓRIA: Vistos → Relatório → Relatados. → Fundamentação → Isso posto, → P.R.I.
- Use linguagem formal jurídica

## EXEMPLOS REAIS (SIGA ESTE ESTILO EXATAMENTE)

### EXEMPLO 1
\`\`\`
${exemplo1.substring(0, 4000)}
\`\`\`

### EXEMPLO 2  
\`\`\`
${exemplo2.substring(0, 4000)}
\`\`\`

---

## CASO PARA REDIGIR
Matéria: Remição por estudo
O Ministério Público opinou pelo ${modeloTeste.resultado === 'defere' ? 'deferimento' : 'indeferimento'}.
${modeloTeste.resultado === 'defere' ? 'Deferir o pedido' : 'Indeferir o pedido'}.

GERE A DECISÃO COMPLETA seguindo o estilo e tamanho dos exemplos.`;

    console.log('\n🔄 Gerando decisão...');
    const inicio = Date.now();

    try {
        const gerado = await gerarDecisao(prompt);
        const tempo = ((Date.now() - inicio) / 1000).toFixed(1);

        console.log(`✅ Gerado em ${tempo}s`);
        console.log(`   Tamanho gerado: ${gerado.length} chars`);

        // Calcular métricas
        const metricas = calcularMetricas(gerado, conteudoTeste);

        console.log('\n═══════════════════════════════════════════════════════');
        console.log('📈 RESULTADO');
        console.log('═══════════════════════════════════════════════════════');
        console.log(`\n🎯 SCORE FINAL: ${metricas.score.toFixed(1)}/100`);
        console.log(`\n   Estrutura (60%): ${metricas.estruturaScore}/100`);
        console.log(`     ✓ Vistos: ${metricas.estrutura.vistos ? '✅' : '❌'}`);
        console.log(`     ✓ Relatados: ${metricas.estrutura.relatados ? '✅' : '❌'}`);
        console.log(`     ✓ Isso posto: ${metricas.estrutura.issoPosto ? '✅' : '❌'}`);
        console.log(`     ✓ P.R.I.: ${metricas.estrutura.pri ? '✅' : '❌'}`);
        console.log(`\n   Tamanho (40%): ${metricas.tamanhoScore}/100`);
        console.log(`     Ratio: ${(metricas.ratio * 100).toFixed(0)}% do golden`);
        console.log(`     Golden: ${conteudoTeste.length} | Gerado: ${gerado.length}`);

        // Salvar resultado
        const resultado = {
            dataExecucao: new Date().toISOString(),
            modeloTeste: modeloTeste.nome,
            score: metricas.score,
            tamanhoGolden: conteudoTeste.length,
            tamanhoGerado: gerado.length,
            tempo: parseFloat(tempo),
            metricas,
            textoGerado: gerado
        };

        const outputDir = path.join(__dirname, '..', 'knowledge', 'prompts');
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

        fs.writeFileSync(
            path.join(outputDir, 'ultimo_benchmark.json'),
            JSON.stringify(resultado, null, 2)
        );

        console.log('\n💾 Resultado salvo em knowledge/prompts/ultimo_benchmark.json');

        // Preview do texto gerado
        console.log('\n───────────────────────────────────────────────────────');
        console.log('📝 PREVIEW DO TEXTO GERADO (500 chars):');
        console.log('───────────────────────────────────────────────────────');
        console.log(gerado.substring(0, 500) + '...');

    } catch (error) {
        console.error('❌ Erro:', error.message);
    }
}

main().catch(console.error);
