/**
 * Script de Correção - Base de Conhecimento
 * Corrige inconsistências nos modelos identificados pela auditoria
 */

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'knowledge/decisoes/modelos_completos_index.json');
const data = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

console.log('=== CORREÇÃO DE INCONSISTÊNCIAS ===\n');
console.log('Total de modelos antes:', data.modelos.length);

let correcoes = 0;

// Função para corrigir resultado baseado no nome/arquivo
function determinarResultado(nome, arquivo) {
    const nomeLower = nome.toLowerCase();
    const arquivoLower = arquivo.toLowerCase();

    // Verificar indicadores de indeferimento
    if (nomeLower.includes('indefere') || nomeLower.includes('indeferimento') ||
        arquivoLower.includes('indefere') || arquivoLower.includes('indeferimento')) {
        return 'indefere';
    }

    // Verificar indicadores de deferimento
    if ((nomeLower.includes('defere') && !nomeLower.includes('indefere')) ||
        (arquivoLower.includes('defere') && !arquivoLower.includes('indefere'))) {
        if (nomeLower.includes('concede') || arquivoLower.includes('concede') ||
            nomeLower.includes('deferindo') || arquivoLower.includes('deferindo') ||
            nomeLower.includes('deferimento') || arquivoLower.includes('deferimento')) {
            return 'defere';
        }
    }

    return null; // Não conseguimos determinar automaticamente
}

// Corrigir modelos de progressão com resultado inconsistente
data.modelos.forEach((modelo, index) => {
    const resultadoSugerido = determinarResultado(modelo.nome, modelo.arquivo);

    if (resultadoSugerido && modelo.resultado !== resultadoSugerido) {
        console.log(`\n📝 Corrigindo: ${modelo.nome}`);
        console.log(`   Resultado anterior: ${modelo.resultado}`);
        console.log(`   Resultado corrigido: ${resultadoSugerido}`);
        console.log(`   Agrupador: ${modelo.agrupador}`);

        data.modelos[index].resultado = resultadoSugerido;
        correcoes++;
    }
});

// Atualizar estatísticas
const novasStats = {
    defere: 0,
    indefere: 0,
    indefinido: 0,
    parcial: 0
};

data.modelos.forEach(m => {
    if (novasStats[m.resultado] !== undefined) {
        novasStats[m.resultado]++;
    } else {
        novasStats[m.resultado] = 1;
    }
});

console.log('\n=== RESUMO DAS CORREÇÕES ===');
console.log(`Total de correções aplicadas: ${correcoes}`);
console.log('\nDistribuição de resultados após correção:');
Object.entries(novasStats).forEach(([res, count]) => {
    console.log(`   ${res}: ${count}`);
});

// Salvar arquivo corrigido
if (correcoes > 0) {
    // Atualizar meta
    data.meta.ultimaAuditoria = new Date().toISOString();
    data.meta.correcoesAuditoria = correcoes;

    // Backup do original
    const backupPath = indexPath.replace('.json', '_backup.json');
    fs.writeFileSync(backupPath, JSON.stringify(JSON.parse(fs.readFileSync(indexPath, 'utf8')), null, 2));
    console.log(`\n✅ Backup salvo em: ${backupPath}`);

    // Salvar corrigido
    fs.writeFileSync(indexPath, JSON.stringify(data, null, 2));
    console.log(`✅ Correções salvas em: ${indexPath}`);
} else {
    console.log('\nNenhuma correção necessária ou aplicável automaticamente.');
}
