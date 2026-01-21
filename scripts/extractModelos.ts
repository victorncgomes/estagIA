/**
 * Script de Extração e Migração de Modelos
 * Extrai modelos do modelosSEEU.ts e popula os arquivos por agrupador
 * 
 * Uso: npx ts-node scripts/extractModelos.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// IDs dos modelos obsoletos a IGNORAR
const MODELOS_OBSOLETOS = new Set([
    'seeu_017', // DECISÃO EM BRANCO
    'seeu_067', // falta média FORA DE USO
    'seeu_150', // monitoramento sem uso
    'seeu_188', // NAO UTILIZAR
    'seeu_198', // NÃO USAR
    'seeu_221', // NÃO UTILIZAR
    'seeu_232', // SEM USO
    'seeu_253', // SEM USO
]);

// Mapeamento de ID para agrupador
const MODELO_AGRUPADOR: Record<string, string> = {
    // PROGRESSÃO
    'seeu_003': 'progressao', 'seeu_007': 'progressao', 'seeu_022': 'progressao',
    'seeu_029': 'progressao', 'seeu_040': 'progressao', 'seeu_043': 'progressao',
    'seeu_044': 'progressao', 'seeu_045': 'progressao', 'seeu_051': 'progressao',
    'seeu_052': 'progressao', 'seeu_054': 'progressao', 'seeu_056': 'progressao',
    'seeu_060': 'progressao', 'seeu_074': 'progressao', 'seeu_077': 'progressao',
    'seeu_089': 'progressao', 'seeu_095': 'progressao', 'seeu_100': 'progressao',
    'seeu_116': 'progressao', 'seeu_123': 'progressao', 'seeu_130': 'progressao',
    'seeu_136': 'progressao', 'seeu_141': 'progressao', 'seeu_169': 'progressao',
    'seeu_194': 'progressao', 'seeu_242': 'progressao', 'seeu_281': 'progressao',
    'seeu_283': 'progressao',

    // REGRESSÃO
    'seeu_005': 'regressao', 'seeu_032': 'regressao', 'seeu_033': 'regressao',
    'seeu_047': 'regressao', 'seeu_048': 'regressao', 'seeu_049': 'regressao',
    'seeu_055': 'regressao', 'seeu_059': 'regressao', 'seeu_064': 'regressao',
    'seeu_083': 'regressao', 'seeu_087': 'regressao', 'seeu_091': 'regressao',
    'seeu_109': 'regressao', 'seeu_124': 'regressao', 'seeu_139': 'regressao',
    'seeu_140': 'regressao', 'seeu_144': 'regressao', 'seeu_145': 'regressao',
    'seeu_146': 'regressao', 'seeu_151': 'regressao', 'seeu_168': 'regressao',
    'seeu_170': 'regressao', 'seeu_197': 'regressao', 'seeu_208': 'regressao',
    'seeu_258': 'regressao',

    // AGRAVO
    'seeu_004': 'agravo', 'seeu_026': 'agravo', 'seeu_038': 'agravo',
    'seeu_039': 'agravo', 'seeu_090': 'agravo', 'seeu_105': 'agravo',
    'seeu_106': 'agravo', 'seeu_107': 'agravo', 'seeu_108': 'agravo',
    'seeu_114': 'agravo', 'seeu_115': 'agravo', 'seeu_155': 'agravo',
    'seeu_157': 'agravo', 'seeu_159': 'agravo', 'seeu_167': 'agravo',
    'seeu_181': 'agravo', 'seeu_192': 'agravo', 'seeu_206': 'agravo',
    'seeu_219': 'agravo', 'seeu_224': 'agravo', 'seeu_229': 'agravo',
    'seeu_230': 'agravo', 'seeu_233': 'agravo', 'seeu_235': 'agravo',
    'seeu_236': 'agravo', 'seeu_237': 'agravo', 'seeu_239': 'agravo',
    'seeu_240': 'agravo', 'seeu_243': 'agravo', 'seeu_244': 'agravo',
    'seeu_248': 'agravo', 'seeu_249': 'agravo', 'seeu_250': 'agravo',
    'seeu_255': 'agravo', 'seeu_256': 'agravo', 'seeu_259': 'agravo',
    'seeu_261': 'agravo', 'seeu_268': 'agravo', 'seeu_269': 'agravo',
    'seeu_270': 'agravo', 'seeu_272': 'agravo', 'seeu_275': 'agravo',
    'seeu_276': 'agravo', 'seeu_277': 'agravo', 'seeu_278': 'agravo',
    'seeu_279': 'agravo', 'seeu_282': 'agravo', 'seeu_284': 'agravo',

    // REMIÇÃO
    'seeu_036': 'remicao', 'seeu_037': 'remicao', 'seeu_065': 'remicao',
    'seeu_066': 'remicao', 'seeu_153': 'remicao', 'seeu_156': 'remicao',
    'seeu_183': 'remicao', 'seeu_184': 'remicao', 'seeu_185': 'remicao',
    'seeu_189': 'remicao', 'seeu_190': 'remicao', 'seeu_227': 'remicao',
    'seeu_231': 'remicao', 'seeu_247': 'remicao',

    // LIVRAMENTO CONDICIONAL
    'seeu_073': 'livramento', 'seeu_098': 'livramento', 'seeu_117': 'livramento',
    'seeu_129': 'livramento', 'seeu_135': 'livramento', 'seeu_148': 'livramento',
    'seeu_152': 'livramento', 'seeu_154': 'livramento', 'seeu_176': 'livramento',
    'seeu_177': 'livramento', 'seeu_205': 'livramento', 'seeu_212': 'livramento',
    'seeu_213': 'livramento', 'seeu_234': 'livramento', 'seeu_285': 'livramento',
    'seeu_287': 'livramento', 'seeu_288': 'livramento',

    // MONITORAMENTO
    'seeu_006': 'monitoramento', 'seeu_011': 'monitoramento', 'seeu_101': 'monitoramento',
    'seeu_102': 'monitoramento', 'seeu_131': 'monitoramento', 'seeu_137': 'monitoramento',
    'seeu_142': 'monitoramento', 'seeu_149': 'monitoramento', 'seeu_166': 'monitoramento',
    'seeu_172': 'monitoramento', 'seeu_173': 'monitoramento', 'seeu_196': 'monitoramento',
    'seeu_220': 'monitoramento',

    // RETIFICAÇÃO GEP
    'seeu_002': 'retificacao', 'seeu_018': 'retificacao', 'seeu_096': 'retificacao',
    'seeu_125': 'retificacao', 'seeu_133': 'retificacao', 'seeu_138': 'retificacao',
    'seeu_178': 'retificacao', 'seeu_179': 'retificacao', 'seeu_222': 'retificacao',
    'seeu_223': 'retificacao', 'seeu_225': 'retificacao', 'seeu_226': 'retificacao',
    'seeu_228': 'retificacao', 'seeu_241': 'retificacao', 'seeu_251': 'retificacao',
    'seeu_252': 'retificacao', 'seeu_262': 'retificacao', 'seeu_273': 'retificacao',
    'seeu_274': 'retificacao', 'seeu_290': 'retificacao',

    // UNIFICAÇÃO
    'seeu_001': 'unificacao', 'seeu_012': 'unificacao', 'seeu_013': 'unificacao',
    'seeu_027': 'unificacao', 'seeu_028': 'unificacao', 'seeu_050': 'unificacao',
    'seeu_076': 'unificacao', 'seeu_111': 'unificacao', 'seeu_112': 'unificacao',
    'seeu_113': 'unificacao', 'seeu_118': 'unificacao', 'seeu_126': 'unificacao',
    'seeu_158': 'unificacao', 'seeu_163': 'unificacao',

    // INDULTO
    'seeu_014': 'indulto', 'seeu_016': 'indulto', 'seeu_031': 'indulto',
    'seeu_046': 'indulto', 'seeu_058': 'indulto', 'seeu_084': 'indulto',
    'seeu_092': 'indulto', 'seeu_097': 'indulto', 'seeu_121': 'indulto',
    'seeu_143': 'indulto', 'seeu_217': 'indulto',

    // COMUTAÇÃO
    'seeu_053': 'comutacao', 'seeu_079': 'comutacao', 'seeu_088': 'comutacao',
    'seeu_099': 'comutacao', 'seeu_127': 'comutacao',

    // FALTA GRAVE
    'seeu_081': 'faltaGrave', 'seeu_094': 'faltaGrave', 'seeu_119': 'faltaGrave',
    'seeu_132': 'faltaGrave', 'seeu_147': 'faltaGrave', 'seeu_254': 'faltaGrave',

    // FALTA MÉDIA
    'seeu_008': 'faltaMedia', 'seeu_085': 'faltaMedia', 'seeu_165': 'faltaMedia',

    // MEDIDA DE SEGURANÇA
    'seeu_057': 'medidaSeguranca', 'seeu_062': 'medidaSeguranca', 'seeu_162': 'medidaSeguranca',
    'seeu_186': 'medidaSeguranca', 'seeu_199': 'medidaSeguranca', 'seeu_201': 'medidaSeguranca',
    'seeu_204': 'medidaSeguranca', 'seeu_210': 'medidaSeguranca',

    // MULTA
    'seeu_009': 'multa', 'seeu_015': 'multa', 'seeu_080': 'multa',
    'seeu_128': 'multa', 'seeu_187': 'multa', 'seeu_245': 'multa',

    // TRANSFERÊNCIA
    'seeu_023': 'transferencia', 'seeu_024': 'transferencia', 'seeu_025': 'transferencia',
    'seeu_030': 'transferencia', 'seeu_041': 'transferencia', 'seeu_202': 'transferencia',
    'seeu_214': 'transferencia', 'seeu_246': 'transferencia', 'seeu_266': 'transferencia',

    // PRISÃO DOMICILIAR
    'seeu_134': 'prisaoDomiciliar', 'seeu_191': 'prisaoDomiciliar', 'seeu_193': 'prisaoDomiciliar',

    // EXAME CRIMINOLÓGICO
    'seeu_020': 'exameCriminologico', 'seeu_021': 'exameCriminologico',
    'seeu_042': 'exameCriminologico', 'seeu_218': 'exameCriminologico',

    // INSANIDADE MENTAL
    'seeu_174': 'insanidadeMental', 'seeu_175': 'insanidadeMental',
    'seeu_215': 'insanidadeMental', 'seeu_238': 'insanidadeMental', 'seeu_286': 'insanidadeMental',

    // SAÍDA TEMPORÁRIA
    'seeu_035': 'saidaTemporaria', 'seeu_264': 'saidaTemporaria', 'seeu_267': 'saidaTemporaria',

    // EMBARGOS
    'seeu_061': 'embargos',

    // INCOMPETÊNCIA
    'seeu_034': 'incompetencia', 'seeu_082': 'incompetencia', 'seeu_104': 'incompetencia',
    'seeu_171': 'incompetencia', 'seeu_182': 'incompetencia', 'seeu_195': 'incompetencia',
    'seeu_203': 'incompetencia', 'seeu_207': 'incompetencia', 'seeu_209': 'incompetencia',
    'seeu_216': 'incompetencia', 'seeu_257': 'incompetencia',

    // DETRAÇÃO
    'seeu_019': 'detracao', 'seeu_078': 'detracao',

    // REPRESENTAÇÃO
    'seeu_075': 'representacao',

    // ACÓRDÃO
    'seeu_010': 'acordao', 'seeu_260': 'acordao', 'seeu_263': 'acordao',

    // PRESCRIÇÃO
    'seeu_063': 'prescricao', 'seeu_289': 'prescricao',

    // TEMA 506
    'seeu_068': 'tema506', 'seeu_069': 'tema506', 'seeu_070': 'tema506',

    // ADEQUAÇÃO DE REGIME
    'seeu_071': 'adequacaoRegime',

    // MUTIRÃO
    'seeu_072': 'mutirao',

    // PRESTAÇÃO PECUNIÁRIA
    'seeu_086': 'prestacaoPecuniaria', 'seeu_093': 'prestacaoPecuniaria',

    // OUTROS - padrão para modelos não mapeados
};

// Mapeamento de agrupador para nome do export
const AGRUPADOR_EXPORT: Record<string, string> = {
    'progressao': 'DECISOES_PROGRESSAO',
    'regressao': 'DECISOES_REGRESSAO',
    'agravo': 'DECISOES_AGRAVO',
    'remicao': 'DECISOES_REMICAO',
    'livramento': 'DECISOES_LIVRAMENTO',
    'monitoramento': 'DECISOES_MONITORAMENTO',
    'retificacao': 'DECISOES_RETIFICACAO',
    'unificacao': 'DECISOES_UNIFICACAO',
    'indulto': 'DECISOES_INDULTO',
    'comutacao': 'DECISOES_COMUTACAO',
    'faltaGrave': 'DECISOES_FALTA_GRAVE',
    'faltaMedia': 'DECISOES_FALTA_MEDIA',
    'medidaSeguranca': 'DECISOES_MEDIDA_SEGURANCA',
    'multa': 'DECISOES_MULTA',
    'transferencia': 'DECISOES_TRANSFERENCIA',
    'prisaoDomiciliar': 'DECISOES_PRISAO_DOMICILIAR',
    'exameCriminologico': 'DECISOES_EXAME_CRIMINOLOGICO',
    'insanidadeMental': 'DECISOES_INSANIDADE_MENTAL',
    'saidaTemporaria': 'DECISOES_SAIDA_TEMPORARIA',
    'embargos': 'DECISOES_EMBARGOS',
    'incompetencia': 'DECISOES_INCOMPETENCIA',
    'detracao': 'DECISOES_DETRACAO',
    'representacao': 'DECISOES_REPRESENTACAO',
    'acordao': 'DECISOES_ACORDAO',
    'prescricao': 'DECISOES_PRESCRICAO',
    'tema506': 'DECISOES_TEMA506',
    'adequacaoRegime': 'DECISOES_ADEQUACAO_REGIME',
    'mutirao': 'DECISOES_MUTIRAO',
    'prestacaoPecuniaria': 'DECISOES_PRESTACAO_PECUNIARIA',
    'outros': 'DECISOES_OUTROS',
};

const basePath = path.resolve(__dirname, '../services/templates');
const sourcePath = path.join(basePath, 'modelosSEEU.ts');
const destPath = path.join(basePath, 'JuizHenriqueBaltazar/decisoes');

console.log('=== Extração de Modelos SEEU ===');
console.log(`Fonte: ${sourcePath}`);
console.log(`Destino: ${destPath}`);

// Contadores
let totalExtraidos = 0;
let totalIgnorados = 0;
const modelosPorAgrupador: Record<string, string[]> = {};

// Inicializa contadores por agrupador
Object.keys(AGRUPADOR_EXPORT).forEach(ag => {
    modelosPorAgrupador[ag] = [];
});

// Lê arquivo fonte
const content = fs.readFileSync(sourcePath, 'utf-8');

// Regex para extrair modelos
const modeloRegex = /\{\s*id:\s*'(seeu_\d+)',\s*nome:\s*'([^']+)',\s*tipoDocumento:\s*'([^']+)',\s*fonte:\s*'([^']+)',\s*dataExtracao:\s*'([^']+)',\s*conteudo:\s*`([\s\S]*?)`,?\s*\}/g;

let match;
while ((match = modeloRegex.exec(content)) !== null) {
    const [fullMatch, id, nome, tipoDoc, fonte, dataExtracao, conteudo] = match;

    // Ignora modelos obsoletos
    if (MODELOS_OBSOLETOS.has(id)) {
        totalIgnorados++;
        console.log(`[IGNORADO] ${id}: ${nome.substring(0, 40)}...`);
        continue;
    }

    // Determina agrupador
    const agrupador = MODELO_AGRUPADOR[id] || 'outros';

    // Adiciona ao contador
    modelosPorAgrupador[agrupador].push(id);
    totalExtraidos++;
}

console.log(`\nTotal extraídos: ${totalExtraidos}`);
console.log(`Total ignorados: ${totalIgnorados}`);
console.log('\nModelos por agrupador:');
Object.entries(modelosPorAgrupador)
    .filter(([_, ids]) => ids.length > 0)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([ag, ids]) => {
        console.log(`  ${ag}: ${ids.length}`);
    });
