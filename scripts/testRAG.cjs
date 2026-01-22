/**
 * estagIA - Teste End-to-End do RAG
 * Executa uma bateria de testes no endpoint /api/rag
 * 
 * Uso: node scripts/testRAG.cjs
 * @version 1.0.0
 */

const http = require('http');

const BACKEND_URL = 'http://localhost:3508';

async function testRAG(materia, nivel, palavrasChave) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            materia,
            nivel,
            palavrasChave,
            texto: palavrasChave
        });

        const options = {
            hostname: 'localhost',
            port: 3508,
            path: '/api/rag',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(new Error('Erro ao parsear resposta: ' + body));
                }
            });
        });

        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

async function runTests() {
    console.log('='.repeat(60));
    console.log('🧪 estagIA - Testes End-to-End do RAG');
    console.log('='.repeat(60));
    console.log('');

    const testes = [
        {
            nome: 'Remição - ENCCEJA Nível 4',
            materia: 'remicao',
            nivel: 4,
            palavrasChave: 'encceja certificação ensino médio ausência acréscimo intelectual'
        },
        {
            nome: 'Retificação - Nível 3',
            materia: 'retificacao',
            nivel: 3,
            palavrasChave: 'retificação gep data-base fração'
        },
        {
            nome: 'Indulto - Nível 4',
            materia: 'indulto',
            nivel: 4,
            palavrasChave: 'indulto decreto comutação pena'
        },
        {
            nome: 'Progressão - Nível 3',
            materia: 'progressao',
            nivel: 3,
            palavrasChave: 'progressão regime semiaberto requisito temporal'
        },
        {
            nome: 'Busca Semântica Geral - Nível 2',
            materia: '',
            nivel: 2,
            palavrasChave: 'execução penal benefício reeducando'
        }
    ];

    let passados = 0;
    let falhas = 0;

    for (const teste of testes) {
        console.log(`📋 Teste: ${teste.nome}`);
        console.log(`   Matéria: ${teste.materia || '(não especificada)'}`);
        console.log(`   Nível: ${teste.nivel}`);

        try {
            const inicio = Date.now();
            const result = await testRAG(teste.materia, teste.nivel, teste.palavrasChave);
            const tempo = Date.now() - inicio;

            console.log(`   ⏱️  Tempo: ${tempo}ms`);
            console.log(`   📦 Modelos: ${result.modelos?.length || 0}`);
            console.log(`   📚 Legislação: ${result.legislacao?.length || 0}`);
            console.log(`   ⚖️  Jurisprudência: ${result.jurisprudencia?.length || 0}`);
            console.log(`   📖 Doutrina: ${result.doutrina?.length || 0}`);
            console.log(`   🔍 Busca Semântica: ${result.buscaSemantica ? '✅ SIM' : '❌ NÃO (fallback keyword)'}`);

            // Verificações
            const modelosOk = result.modelos?.length > 0;
            const legislacaoOk = teste.nivel >= 3 ? (result.legislacao?.length > 0) : true;
            const tempoOk = tempo < 10000;

            if (modelosOk && legislacaoOk && tempoOk) {
                console.log(`   ✅ PASSOU`);
                passados++;
            } else {
                console.log(`   ❌ FALHOU`);
                if (!modelosOk) console.log('      - Nenhum modelo retornado');
                if (!legislacaoOk) console.log('      - Legislação deveria retornar em N3+');
                if (!tempoOk) console.log('      - Tempo excedeu 10s');
                falhas++;
            }

            // Mostrar modelos encontrados
            if (result.modelos?.length > 0) {
                console.log('   📋 Top 3 modelos:');
                result.modelos.slice(0, 3).forEach((m, i) => {
                    console.log(`      ${i + 1}. [${m.relevancia}] ${m.nome || m.arquivo} (${m.metodo || 'keyword'})`);
                });
            }

        } catch (error) {
            console.log(`   ❌ ERRO: ${error.message}`);
            falhas++;
        }

        console.log('');
    }

    console.log('='.repeat(60));
    console.log(`📊 Resultado: ${passados}/${testes.length} passados`);
    if (falhas > 0) {
        console.log(`⚠️  ${falhas} teste(s) falharam`);
    } else {
        console.log('✅ Todos os testes passaram!');
    }
    console.log('='.repeat(60));
}

// Iniciar testes diretamente
console.log('🔌 Conectando ao backend em localhost:3508...\n');
runTests().catch((e) => {
    console.error('❌ Erro nos testes:', e.message);
    console.error('   Verifique se o backend está rodando com: npm run backend');
});
