/**
 * Script de Auditoria da Base de Conhecimento
 * Analisa inconsistências nos modelos de decisão
 */

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'knowledge/decisoes/modelos_completos_index.json');
const data = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

console.log('=== AUDITORIA BASE DE CONHECIMENTO ===\n');
console.log('Total de modelos:', data.modelos.length);
console.log('\n--- MODELOS DE PROGRESSÃO ---\n');

const progressaoModelos = data.modelos.filter(m => m.agrupador === 'progressao');

progressaoModelos.forEach((m, i) => {
    const issues = [];

    // Detectar inconsistências no resultado
    const nomeLower = m.nome.toLowerCase();

    // Se nome indica indeferimento mas resultado não é 'indefere'
    if ((nomeLower.includes('indefere') || nomeLower.includes('indeferimento')) && m.resultado !== 'indefere') {
        issues.push(`Nome indica INDEFERE mas resultado='${m.resultado}'`);
    }

    // Se nome indica deferimento mas resultado não é 'defere'
    if ((nomeLower.includes('defere') && !nomeLower.includes('indefere')) && m.resultado !== 'defere') {
        issues.push(`Nome indica DEFERE mas resultado='${m.resultado}'`);
    }

    // Se nome indica "reanalise" - comportamento esperado?
    if (nomeLower.includes('reanalise')) {
        issues.push('Contém "reanalise" - verificar se é categoria correta');
    }

    // Se "faltas graves" ou "falta" no nome mas está em progressao
    if (nomeLower.includes('falta') && m.agrupador !== 'falta') {
        issues.push(`Contém "falta" mas está no agrupador '${m.agrupador}'`);
    }

    console.log(`${i + 1}. ${m.nome}`);
    console.log(`   Arquivo: ${m.arquivo}`);
    console.log(`   Pasta: ${m.pasta}`);
    console.log(`   Resultado: ${m.resultado}`);

    if (issues.length > 0) {
        console.log(`   ⚠️  INCONSISTÊNCIAS:`);
        issues.forEach(issue => console.log(`       - ${issue}`));
    }
    console.log('');
});

// Resumo geral
console.log('\n=== RESUMO DA AUDITORIA ===\n');

const agrupadores = {};
data.modelos.forEach(m => {
    if (!agrupadores[m.agrupador]) {
        agrupadores[m.agrupador] = { total: 0, resultados: {} };
    }
    agrupadores[m.agrupador].total++;

    if (!agrupadores[m.agrupador].resultados[m.resultado]) {
        agrupadores[m.agrupador].resultados[m.resultado] = 0;
    }
    agrupadores[m.agrupador].resultados[m.resultado]++;
});

Object.entries(agrupadores).sort((a, b) => b[1].total - a[1].total).forEach(([agrup, info]) => {
    console.log(`${agrup}: ${info.total} modelos`);
    Object.entries(info.resultados).forEach(([res, count]) => {
        console.log(`   - ${res}: ${count}`);
    });
});

// Verificar modelos com resultado 'indefinido'
console.log('\n=== MODELOS COM RESULTADO INDEFINIDO ===\n');
const indefinidos = data.modelos.filter(m => m.resultado === 'indefinido');
console.log(`Total: ${indefinidos.length} modelos`);
