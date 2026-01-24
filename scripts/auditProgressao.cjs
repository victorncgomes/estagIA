/**
 * Script de Auditoria Detalhada - Modelos de Progressão
 * Identifica inconsistências específicas
 */

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'knowledge/decisoes/modelos_completos_index.json');
const data = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

console.log('=== AUDITORIA DETALHADA: MODELOS DE PROGRESSÃO ===\n');

const progressaoModelos = data.modelos.filter(m => m.agrupador === 'progressao');

// Lista todos os modelos de progressão com análise detalhada
progressaoModelos.forEach((m, i) => {
    const issues = [];
    const nomeLower = m.nome.toLowerCase();
    const arquivoLower = m.arquivo.toLowerCase();

    // Detectar palavras-chave que indicam resultado
    const indicaIndefere = nomeLower.includes('indefere') || nomeLower.includes('indeferimento') ||
        arquivoLower.includes('indefere') || arquivoLower.includes('indeferimento');
    const indicaDefere = (nomeLower.includes('defere') && !nomeLower.includes('indefere')) ||
        (arquivoLower.includes('defere') && !arquivoLower.includes('indefere'));
    const indicaReanalise = nomeLower.includes('reanalise') || arquivoLower.includes('reanalise');
    const indicaFalta = nomeLower.includes('falta') || arquivoLower.includes('falta');
    const indicaSubjetivo = nomeLower.includes('subjetivo') || arquivoLower.includes('subjetivo');

    // Verificar inconsistências
    if (indicaIndefere && m.resultado !== 'indefere') {
        issues.push(`🔴 Nome/arquivo indica INDEFERE mas resultado='${m.resultado}'`);
    }
    if (indicaDefere && m.resultado !== 'defere') {
        issues.push(`🔴 Nome/arquivo indica DEFERE mas resultado='${m.resultado}'`);
    }
    if (indicaReanalise) {
        issues.push('⚠️ Contém "reanalise" - modelo pode ser de reanálise/reconsideração');
    }
    if (indicaFalta) {
        issues.push('⚠️ Contém "falta" - verificar se deveria estar em agrupador "falta"');
    }
    if (indicaSubjetivo) {
        issues.push('⚠️ Contém "subjetivo" - refere-se a requisito subjetivo de progressão');
    }
    if (m.resultado === 'indefinido') {
        issues.push('⚠️ Resultado não definido - precisa classificação');
    }

    console.log(`${i + 1}. ${m.nome}`);
    console.log(`   Arquivo: ${m.arquivo}`);
    console.log(`   Resultado atual: ${m.resultado}`);
    console.log(`   Pasta: ${m.pasta}`);

    if (issues.length > 0) {
        issues.forEach(issue => console.log(`   ${issue}`));
    } else {
        console.log('   ✅ OK');
    }
    console.log('');
});

// Buscar modelos que deveriam estar em progressão mas estão em outros agrupadores
console.log('\n=== POSSÍVEIS MODELOS DE PROGRESSÃO EM OUTROS AGRUPADORES ===\n');

const outrosProgressao = data.modelos.filter(m => {
    const nomeLower = m.nome.toLowerCase();
    const arquivoLower = m.arquivo.toLowerCase();
    return (nomeLower.includes('progressão') || nomeLower.includes('progressao') ||
        arquivoLower.includes('progressão') || arquivoLower.includes('progressao')) &&
        m.agrupador !== 'progressao';
});

outrosProgressao.forEach(m => {
    console.log(`- ${m.nome}`);
    console.log(`  Arquivo: ${m.arquivo}`);
    console.log(`  Agrupador atual: ${m.agrupador}`);
    console.log(`  Resultado: ${m.resultado}`);
    console.log('');
});

console.log(`\nTotal encontrados: ${outrosProgressao.length}`);
