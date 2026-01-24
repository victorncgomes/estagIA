/**
 * ACE Linguagem - Skill Manager
 * 
 * Gerencia o Skillbook evolutivo.
 * Papel do SkillManager no framework ACE:
 * - Atualiza Skillbook com padrões extraídos
 * - Remove/depreca skills que não funcionam
 * - Mantém histórico de evolução
 * - Faz merge incremental
 * 
 * Uso:
 *   node .agent/skills/ace-linguagem/scripts/skillManager.cjs --update
 *   node .agent/skills/ace-linguagem/scripts/skillManager.cjs --show
 *   node .agent/skills/ace-linguagem/scripts/skillManager.cjs --reset
 */

const fs = require('fs');
const path = require('path');
const { gerarRelatorio } = require('./reflector.cjs');

// ============================================
// PATHS
// ============================================
const ROOT = path.join(__dirname, '..', '..', '..', '..');
const SKILLBOOK_PATH = path.join(ROOT, 'knowledge', 'ace', 'skillbook.json');
const RESULTADOS_DIR = path.join(ROOT, 'knowledge', 'ace', 'resultados');

// ============================================
// CARREGAR/SALVAR SKILLBOOK
// ============================================
function loadSkillbook() {
    if (fs.existsSync(SKILLBOOK_PATH)) {
        return JSON.parse(fs.readFileSync(SKILLBOOK_PATH, 'utf-8'));
    }
    return createEmptySkillbook();
}

function saveSkillbook(skillbook) {
    skillbook.lastUpdate = new Date().toISOString();
    fs.writeFileSync(SKILLBOOK_PATH, JSON.stringify(skillbook, null, 2));
}

function createEmptySkillbook() {
    return {
        version: '1.0.0',
        createdAt: new Date().toISOString(),
        lastUpdate: new Date().toISOString(),
        stats: {
            testsRun: 0,
            averageScore: 0,
            bestScore: 0,
            improvementRate: 0,
            lastImprovement: null
        },
        skills: [],
        antipatterns: [],
        history: []
    };
}

// ============================================
// ATUALIZAR SKILLBOOK COM REFLEXÕES
// ============================================
function atualizarSkillbook(skillbook, relatorio) {
    const updates = {
        skillsAdded: 0,
        skillsUpdated: 0,
        antipatternsAdded: 0
    };

    // Adicionar padrões extraídos como skills
    relatorio.padroesExtraidos.forEach(padrao => {
        const existingIdx = skillbook.skills.findIndex(
            s => s.pattern.toLowerCase() === padrao.pattern.toLowerCase()
        );

        if (existingIdx >= 0) {
            // Atualizar confiança
            const existing = skillbook.skills[existingIdx];
            existing.confidence = Math.min(0.99, existing.confidence + 0.05);
            existing.lastSeen = new Date().toISOString();
            updates.skillsUpdated++;
        } else {
            // Adicionar nova skill
            const newSkill = {
                id: `SK${String(skillbook.skills.length).padStart(3, '0')}`,
                type: 'helpful',
                category: padrao.tipo,
                pattern: padrao.pattern,
                confidence: padrao.confidence || 0.7,
                examples: padrao.exemplo ? [padrao.exemplo] : [],
                extractedFrom: relatorio.agrupador,
                addedAt: new Date().toISOString()
            };
            skillbook.skills.push(newSkill);
            updates.skillsAdded++;
        }
    });

    // Adicionar antipadrões detectados
    relatorio.antipadroesAgrupados.forEach(ap => {
        const existingIdx = skillbook.antipatterns.findIndex(
            a => a.pattern.toLowerCase() === ap.pattern.toLowerCase()
        );

        if (existingIdx >= 0) {
            // Atualizar ocorrências
            skillbook.antipatterns[existingIdx].occurrences += ap.occurrences;
            skillbook.antipatterns[existingIdx].lastSeen = new Date().toISOString();
        } else {
            // Adicionar novo antipadrão
            const newAP = {
                id: `AP${String(skillbook.antipatterns.length).padStart(3, '0')}`,
                type: 'harmful',
                category: ap.tipo,
                pattern: ap.pattern,
                severity: ap.severity || 'medium',
                occurrences: ap.occurrences,
                lastSeen: new Date().toISOString()
            };
            skillbook.antipatterns.push(newAP);
            updates.antipatternsAdded++;
        }
    });

    // Atualizar estatísticas
    skillbook.stats.testsRun += relatorio.analises.length;

    const prevAvg = skillbook.stats.averageScore;
    const newScore = relatorio.statsOriginal.scoreMedia;

    // Média móvel
    if (prevAvg > 0) {
        skillbook.stats.averageScore = (prevAvg * 0.7) + (newScore * 0.3);
    } else {
        skillbook.stats.averageScore = newScore;
    }

    if (newScore > skillbook.stats.bestScore) {
        skillbook.stats.bestScore = newScore;
    }

    // Taxa de melhoria
    if (prevAvg > 0) {
        const improvement = ((newScore - prevAvg) / prevAvg) * 100;
        skillbook.stats.improvementRate = improvement;
        if (improvement > 0) {
            skillbook.stats.lastImprovement = new Date().toISOString();
        }
    }

    // Adicionar ao histórico
    skillbook.history.push({
        date: new Date().toISOString(),
        agrupador: relatorio.agrupador,
        score: newScore,
        testsRun: relatorio.analises.length,
        skillsCount: skillbook.skills.length,
        updates
    });

    // Limitar histórico a 50 entradas
    if (skillbook.history.length > 50) {
        skillbook.history = skillbook.history.slice(-50);
    }

    return updates;
}

// ============================================
// MOSTRAR SKILLBOOK
// ============================================
function mostrarSkillbook(skillbook) {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📚 SKILLBOOK ACE');
    console.log('═══════════════════════════════════════════════════════\n');

    console.log('📊 ESTATÍSTICAS');
    console.log('─────────────────────────────────────────────────────');
    console.log(`   Versão: ${skillbook.version}`);
    console.log(`   Testes Executados: ${skillbook.stats.testsRun}`);
    console.log(`   Score Médio: ${skillbook.stats.averageScore.toFixed(1)}`);
    console.log(`   Melhor Score: ${skillbook.stats.bestScore.toFixed(1)}`);
    console.log(`   Taxa de Melhoria: ${skillbook.stats.improvementRate?.toFixed(1) || 0}%`);
    console.log(`   Última Atualização: ${skillbook.lastUpdate}`);

    console.log('\n✅ SKILLS APRENDIDAS');
    console.log('─────────────────────────────────────────────────────');
    skillbook.skills
        .sort((a, b) => b.confidence - a.confidence)
        .forEach(s => {
            const conf = (s.confidence * 100).toFixed(0);
            console.log(`   [${s.id}] ${s.pattern}`);
            console.log(`        Categoria: ${s.category} | Confiança: ${conf}%`);
        });

    if (skillbook.antipatterns.length > 0) {
        console.log('\n❌ ANTIPADRÕES DETECTADOS');
        console.log('─────────────────────────────────────────────────────');
        skillbook.antipatterns
            .sort((a, b) => b.occurrences - a.occurrences)
            .forEach(a => {
                console.log(`   [${a.id}] ${a.pattern}`);
                console.log(`        Ocorrências: ${a.occurrences} | Severidade: ${a.severity}`);
            });
    }

    if (skillbook.history.length > 0) {
        console.log('\n📈 HISTÓRICO RECENTE');
        console.log('─────────────────────────────────────────────────────');
        skillbook.history.slice(-5).forEach(h => {
            const date = new Date(h.date).toLocaleDateString('pt-BR');
            console.log(`   ${date} | ${h.agrupador} | Score: ${h.score.toFixed(1)} | +${h.updates.skillsAdded} skills`);
        });
    }
}

// ============================================
// PROCESSAR REFLEXÕES PENDENTES
// ============================================
function processarReflexoesPendentes(skillbook) {
    if (!fs.existsSync(RESULTADOS_DIR)) {
        console.log('❌ Diretório de resultados não encontrado');
        return 0;
    }

    const files = fs.readdirSync(RESULTADOS_DIR)
        .filter(f => f.startsWith('reflexao_'))
        .sort();

    if (files.length === 0) {
        // Tentar gerar reflexões a partir dos benchmarks
        const benchmarks = fs.readdirSync(RESULTADOS_DIR)
            .filter(f => f.startsWith('benchmark_'))
            .sort()
            .reverse();

        if (benchmarks.length === 0) {
            console.log('ℹ️  Nenhum benchmark encontrado. Execute runBenchmark.cjs primeiro.');
            return 0;
        }

        // Processar último benchmark
        const lastBenchmark = path.join(RESULTADOS_DIR, benchmarks[0]);
        console.log(`📂 Processando: ${benchmarks[0]}`);

        const benchmark = JSON.parse(fs.readFileSync(lastBenchmark, 'utf-8'));
        const relatorio = gerarRelatorio(benchmark);

        const updates = atualizarSkillbook(skillbook, relatorio);
        console.log(`   ✅ +${updates.skillsAdded} skills | +${updates.antipatternsAdded} antipadrões`);

        return 1;
    }

    let processed = 0;
    files.forEach(file => {
        const filePath = path.join(RESULTADOS_DIR, file);
        console.log(`📂 Processando: ${file}`);

        try {
            const relatorio = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            const updates = atualizarSkillbook(skillbook, relatorio);
            console.log(`   ✅ +${updates.skillsAdded} skills | +${updates.antipatternsAdded} antipadrões`);
            processed++;
        } catch (e) {
            console.log(`   ❌ Erro: ${e.message}`);
        }
    });

    return processed;
}

// ============================================
// MAIN
// ============================================
async function main() {
    const args = process.argv.slice(2);
    let action = 'show';

    for (const arg of args) {
        if (arg === '--update') action = 'update';
        if (arg === '--show') action = 'show';
        if (arg === '--reset') action = 'reset';
        if (arg === '--stats') action = 'stats';
    }

    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📚 ACE Skill Manager');
    console.log('═══════════════════════════════════════════════════════\n');

    let skillbook = loadSkillbook();

    switch (action) {
        case 'update':
            console.log('🔄 Atualizando Skillbook...\n');
            const processed = processarReflexoesPendentes(skillbook);
            saveSkillbook(skillbook);
            console.log(`\n✅ Skillbook atualizado (${processed} reflexões processadas)`);
            console.log(`   Skills: ${skillbook.skills.length}`);
            console.log(`   Antipadrões: ${skillbook.antipatterns.length}`);
            break;

        case 'reset':
            console.log('⚠️  Resetando Skillbook...');
            skillbook = createEmptySkillbook();
            saveSkillbook(skillbook);
            console.log('✅ Skillbook resetado');
            break;

        case 'stats':
            console.log('📊 Estatísticas do Skillbook:');
            console.log(JSON.stringify(skillbook.stats, null, 2));
            break;

        case 'show':
        default:
            mostrarSkillbook(skillbook);
            break;
    }
}

module.exports = { loadSkillbook, saveSkillbook, atualizarSkillbook };

if (require.main === module) {
    main().catch(console.error);
}
