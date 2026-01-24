const fs = require('fs');
const data = JSON.parse(fs.readFileSync('knowledge/adaptive/risk_patterns_learned.json'));
const padroes = data.padroes;

console.log('='.repeat(70));
console.log('PADRÕES DE RISCO IDENTIFICADOS - Treinamento Qwen 200 casos');
console.log('='.repeat(70));

const sorted = Object.entries(padroes).sort((a, b) => b[1].taxa_alucinacao - a[1].taxa_alucinacao);

console.log('\n🔴 ALTO RISCO (Tier 4 - >50%)');
sorted.filter(([k, v]) => v.taxa_alucinacao > 50).forEach(([k, v]) => {
    console.log(`   ${k.padEnd(40)} | ${v.taxa_alucinacao.toFixed(1)}% | ${v.total} casos`);
});

console.log('\n🟠 RISCO MÉDIO-ALTO (Tier 3 - 20-50%)');
sorted.filter(([k, v]) => v.taxa_alucinacao > 20 && v.taxa_alucinacao <= 50).forEach(([k, v]) => {
    console.log(`   ${k.padEnd(40)} | ${v.taxa_alucinacao.toFixed(1)}% | ${v.total} casos`);
});

console.log('\n🟡 RISCO MÉDIO (Tier 2 - 5-20%)');
sorted.filter(([k, v]) => v.taxa_alucinacao > 5 && v.taxa_alucinacao <= 20).forEach(([k, v]) => {
    console.log(`   ${k.padEnd(40)} | ${v.taxa_alucinacao.toFixed(1)}% | ${v.total} casos`);
});

console.log('\n🟢 BAIXO RISCO (Tier 1 - <5%)');
sorted.filter(([k, v]) => v.taxa_alucinacao <= 5).forEach(([k, v]) => {
    console.log(`   ${k.padEnd(40)} | ${v.taxa_alucinacao.toFixed(1)}% | ${v.total} casos`);
});

// Estatísticas gerais
const totalCasos = sorted.reduce((sum, [k, v]) => sum + v.total, 0);
const totalAlucinacoes = sorted.reduce((sum, [k, v]) => sum + v.alucinacoes, 0);
console.log('\n' + '='.repeat(70));
console.log('RESUMO:');
console.log(`   Total de padrões: ${sorted.length}`);
console.log(`   Total de casos: ${totalCasos}`);
console.log(`   Total de alucinações: ${totalAlucinacoes}`);
console.log(`   Taxa geral: ${(totalAlucinacoes / totalCasos * 100).toFixed(1)}%`);
