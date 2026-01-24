/**
 * Script de Correção Específica - Modelos Mencionados
 * Corrige modelos específicos identificados pelo usuário
 */

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'knowledge/decisoes/modelos_completos_index.json');
const data = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

console.log('=== CORREÇÃO ESPECÍFICA DE MODELOS ===\n');
console.log('Total de modelos:', data.modelos.length);

// Lista de correções específicas baseadas na análise
const correcoesEspecificas = [
    {
        busca: 'reanalise indefere',
        resultadoCorreto: 'indefere',
        novoAgrupador: null // manter o atual
    },
    {
        busca: 'subjetivo faltas graves',
        resultadoCorreto: 'indefere',
        novoAgrupador: null // manter em progressao (falta grave é razão do indeferimento de progressão)
    }
];

let correcoes = 0;

// Aplicar correções
data.modelos.forEach((modelo, index) => {
    const nomeLower = modelo.nome.toLowerCase();
    const arquivoLower = modelo.arquivo.toLowerCase();

    correcoesEspecificas.forEach(correcao => {
        if (nomeLower.includes(correcao.busca) || arquivoLower.includes(correcao.busca)) {
            console.log(`\n📝 Modelo encontrado: ${modelo.nome}`);
            console.log(`   Arquivo: ${modelo.arquivo}`);
            console.log(`   Agrupador: ${modelo.agrupador}`);
            console.log(`   Resultado anterior: ${modelo.resultado}`);

            if (modelo.resultado !== correcao.resultadoCorreto) {
                data.modelos[index].resultado = correcao.resultadoCorreto;
                console.log(`   ✅ Resultado corrigido para: ${correcao.resultadoCorreto}`);
                correcoes++;
            } else {
                console.log(`   ✓ Resultado já está correto`);
            }

            if (correcao.novoAgrupador && modelo.agrupador !== correcao.novoAgrupador) {
                data.modelos[index].agrupador = correcao.novoAgrupador;
                console.log(`   ✅ Agrupador corrigido para: ${correcao.novoAgrupador}`);
                correcoes++;
            }
        }
    });
});

// Também corrigir outros modelos óbvios de progressão
console.log('\n\n=== VERIFICAÇÃO ADICIONAL ===\n');

data.modelos.forEach((modelo, index) => {
    if (modelo.agrupador === 'progressao' && modelo.resultado === 'indefinido') {
        const nomeLower = modelo.nome.toLowerCase();

        // Verificar se o nome indica claramente o resultado
        if (nomeLower.includes('indefere') || nomeLower.includes('indeferimento') ||
            nomeLower.includes('indeferido') || nomeLower.includes('não concede')) {
            console.log(`📝 Corrigindo: ${modelo.nome}`);
            console.log(`   Resultado: indefinido → indefere`);
            data.modelos[index].resultado = 'indefere';
            correcoes++;
        }
        else if (nomeLower.includes('defere') && !nomeLower.includes('indefere')) {
            console.log(`📝 Corrigindo: ${modelo.nome}`);
            console.log(`   Resultado: indefinido → defere`);
            data.modelos[index].resultado = 'defere';
            correcoes++;
        }
    }
});

console.log(`\n=== TOTAL DE CORREÇÕES: ${correcoes} ===`);

// Salvar
if (correcoes > 0) {
    data.meta.ultimaAuditoria = new Date().toISOString();
    data.meta.correcoesAplicadas = correcoes;

    fs.writeFileSync(indexPath, JSON.stringify(data, null, 2));
    console.log(`\n✅ Correções salvas em: modelos_completos_index.json`);
} else {
    console.log('\nNenhuma correção necessária.');
}

// Listar modelos de progressão atualizados
console.log('\n=== MODELOS DE PROGRESSÃO APÓS CORREÇÃO ===\n');
data.modelos.filter(m => m.agrupador === 'progressao').forEach((m, i) => {
    console.log(`${i + 1}. ${m.nome} [${m.resultado}]`);
});
