/**
 * estagIA - Índice Central do Banco de Templates
 * Estrutura multi-magistrado preparada para crescimento
 * 
 * @version 0.2.0
 * 
 * Estrutura:
 * - JuizHenriqueBaltazar/
 *   - decisoes/ (migração em andamento)
 *   - despachos/ (futuro)
 *   - sentencas/ (futuro)
 * - JuizJoseVieira/ (futuro)
 */

// Tipos centrais
export * from './types';

// Decisões do Juiz Henrique Baltazar (nova estrutura)
export * from './JuizHenriqueBaltazar/decisoes';

// ===== COMPATIBILIDADE LEGADA =====
// Re-exporta modelos antigos do arquivo modelosSEEU.ts
// TODO: Migrar completamente e deprecar este re-export
import { MODELOS_SEEU as MODELOS_LEGADO, buscarPorId, buscarPorTermo } from './modelosSEEU';
export { MODELOS_LEGADO, buscarPorId as buscarModeloLegado, buscarPorTermo as buscarModelosLegado };

// ===== MODELOS EM ARQUIVOS DOCX =====
// Índice de modelos armazenados em arquivos DOC/DOCX/ODT
export * from './docxIndex';

// Funções de busca unificadas
import { Modelo, Agrupador, Magistrado, TipoDocumento } from './types';
import { TODAS_DECISOES, buscarDecisaoPorId, buscarDecisoes, buscarDecisoesPorAgrupador } from './JuizHenriqueBaltazar/decisoes';

// ===== MAPEAMENTO DE IDS PARA AGRUPADORES =====
// Permite classificar modelos legados em runtime
const MODELO_AGRUPADOR: Record<string, Agrupador> = {
    // PROGRESSÃO (28)
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
    // REGRESSÃO (25)
    'seeu_005': 'regressao', 'seeu_032': 'regressao', 'seeu_033': 'regressao',
    'seeu_047': 'regressao', 'seeu_048': 'regressao', 'seeu_049': 'regressao',
    'seeu_055': 'regressao', 'seeu_059': 'regressao', 'seeu_064': 'regressao',
    'seeu_083': 'regressao', 'seeu_087': 'regressao', 'seeu_091': 'regressao',
    'seeu_109': 'regressao', 'seeu_124': 'regressao', 'seeu_139': 'regressao',
    'seeu_140': 'regressao', 'seeu_144': 'regressao', 'seeu_145': 'regressao',
    'seeu_146': 'regressao', 'seeu_151': 'regressao', 'seeu_168': 'regressao',
    'seeu_170': 'regressao', 'seeu_197': 'regressao', 'seeu_208': 'regressao',
    'seeu_258': 'regressao',
    // AGRAVO (48)
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
    // REMIÇÃO (14)
    'seeu_036': 'remicao', 'seeu_037': 'remicao', 'seeu_065': 'remicao',
    'seeu_066': 'remicao', 'seeu_153': 'remicao', 'seeu_156': 'remicao',
    'seeu_183': 'remicao', 'seeu_184': 'remicao', 'seeu_185': 'remicao',
    'seeu_189': 'remicao', 'seeu_190': 'remicao', 'seeu_227': 'remicao',
    'seeu_231': 'remicao', 'seeu_247': 'remicao',
    // LIVRAMENTO (17)
    'seeu_073': 'livramento', 'seeu_098': 'livramento', 'seeu_117': 'livramento',
    'seeu_129': 'livramento', 'seeu_135': 'livramento', 'seeu_148': 'livramento',
    'seeu_152': 'livramento', 'seeu_154': 'livramento', 'seeu_176': 'livramento',
    'seeu_177': 'livramento', 'seeu_205': 'livramento', 'seeu_212': 'livramento',
    'seeu_213': 'livramento', 'seeu_234': 'livramento', 'seeu_285': 'livramento',
    'seeu_287': 'livramento', 'seeu_288': 'livramento',
    // MONITORAMENTO (13)
    'seeu_006': 'monitoramento', 'seeu_011': 'monitoramento', 'seeu_101': 'monitoramento',
    'seeu_102': 'monitoramento', 'seeu_131': 'monitoramento', 'seeu_137': 'monitoramento',
    'seeu_142': 'monitoramento', 'seeu_149': 'monitoramento', 'seeu_166': 'monitoramento',
    'seeu_172': 'monitoramento', 'seeu_173': 'monitoramento', 'seeu_196': 'monitoramento',
    'seeu_220': 'monitoramento',
    // RETIFICAÇÃO (20)
    'seeu_002': 'retificacao', 'seeu_018': 'retificacao', 'seeu_096': 'retificacao',
    'seeu_125': 'retificacao', 'seeu_133': 'retificacao', 'seeu_138': 'retificacao',
    'seeu_178': 'retificacao', 'seeu_179': 'retificacao', 'seeu_222': 'retificacao',
    'seeu_223': 'retificacao', 'seeu_225': 'retificacao', 'seeu_226': 'retificacao',
    'seeu_228': 'retificacao', 'seeu_241': 'retificacao', 'seeu_251': 'retificacao',
    'seeu_252': 'retificacao', 'seeu_262': 'retificacao', 'seeu_273': 'retificacao',
    'seeu_274': 'retificacao', 'seeu_290': 'retificacao',
    // UNIFICAÇÃO (14)
    'seeu_001': 'unificacao', 'seeu_012': 'unificacao', 'seeu_013': 'unificacao',
    'seeu_027': 'unificacao', 'seeu_028': 'unificacao', 'seeu_050': 'unificacao',
    'seeu_076': 'unificacao', 'seeu_111': 'unificacao', 'seeu_112': 'unificacao',
    'seeu_113': 'unificacao', 'seeu_118': 'unificacao', 'seeu_126': 'unificacao',
    'seeu_158': 'unificacao', 'seeu_163': 'unificacao',
    // INDULTO (11)
    'seeu_014': 'indulto', 'seeu_016': 'indulto', 'seeu_031': 'indulto',
    'seeu_046': 'indulto', 'seeu_058': 'indulto', 'seeu_084': 'indulto',
    'seeu_092': 'indulto', 'seeu_097': 'indulto', 'seeu_121': 'indulto',
    'seeu_143': 'indulto', 'seeu_217': 'indulto',
    // COMUTAÇÃO (5)
    'seeu_053': 'comutacao', 'seeu_079': 'comutacao', 'seeu_088': 'comutacao',
    'seeu_099': 'comutacao', 'seeu_127': 'comutacao',
    // FALTA GRAVE (6)
    'seeu_081': 'faltaGrave', 'seeu_094': 'faltaGrave', 'seeu_119': 'faltaGrave',
    'seeu_132': 'faltaGrave', 'seeu_147': 'faltaGrave', 'seeu_254': 'faltaGrave',
    // FALTA MÉDIA (3)
    'seeu_008': 'faltaMedia', 'seeu_085': 'faltaMedia', 'seeu_165': 'faltaMedia',
    // MEDIDA DE SEGURANÇA (8)
    'seeu_057': 'medidaSeguranca', 'seeu_062': 'medidaSeguranca', 'seeu_162': 'medidaSeguranca',
    'seeu_186': 'medidaSeguranca', 'seeu_199': 'medidaSeguranca', 'seeu_201': 'medidaSeguranca',
    'seeu_204': 'medidaSeguranca', 'seeu_210': 'medidaSeguranca',
    // MULTA (6)
    'seeu_009': 'multa', 'seeu_015': 'multa', 'seeu_080': 'multa',
    'seeu_128': 'multa', 'seeu_187': 'multa', 'seeu_245': 'multa',
    // TRANSFERÊNCIA (9)
    'seeu_023': 'transferencia', 'seeu_024': 'transferencia', 'seeu_025': 'transferencia',
    'seeu_030': 'transferencia', 'seeu_041': 'transferencia', 'seeu_202': 'transferencia',
    'seeu_214': 'transferencia', 'seeu_246': 'transferencia', 'seeu_266': 'transferencia',
    // PRISÃO DOMICILIAR (3)
    'seeu_134': 'prisaoDomiciliar', 'seeu_191': 'prisaoDomiciliar', 'seeu_193': 'prisaoDomiciliar',
    // EXAME CRIMINOLÓGICO (4)
    'seeu_020': 'exameCriminologico', 'seeu_021': 'exameCriminologico',
    'seeu_042': 'exameCriminologico', 'seeu_218': 'exameCriminologico',
    // INSANIDADE MENTAL (5)
    'seeu_174': 'insanidadeMental', 'seeu_175': 'insanidadeMental',
    'seeu_215': 'insanidadeMental', 'seeu_238': 'insanidadeMental', 'seeu_286': 'insanidadeMental',
    // SAÍDA TEMPORÁRIA (3)
    'seeu_035': 'saidaTemporaria', 'seeu_264': 'saidaTemporaria', 'seeu_267': 'saidaTemporaria',
    // EMBARGOS (1)
    'seeu_061': 'embargos',
    // INCOMPETÊNCIA (11)
    'seeu_034': 'incompetencia', 'seeu_082': 'incompetencia', 'seeu_104': 'incompetencia',
    'seeu_171': 'incompetencia', 'seeu_182': 'incompetencia', 'seeu_195': 'incompetencia',
    'seeu_203': 'incompetencia', 'seeu_207': 'incompetencia', 'seeu_209': 'incompetencia',
    'seeu_216': 'incompetencia', 'seeu_257': 'incompetencia',
    // DETRAÇÃO (2)
    'seeu_019': 'detracao', 'seeu_078': 'detracao',
    // REPRESENTAÇÃO (1)
    'seeu_075': 'representacao',
    // ACÓRDÃO (3)
    'seeu_010': 'acordao', 'seeu_260': 'acordao', 'seeu_263': 'acordao',
    // PRESCRIÇÃO (2)
    'seeu_063': 'extincaoPrescricao', 'seeu_289': 'extincaoPrescricao',
    // TEMA 506 (3)
    'seeu_068': 'tema506', 'seeu_069': 'tema506', 'seeu_070': 'tema506',
    // ADEQUAÇÃO DE REGIME (1)
    'seeu_071': 'adequacaoRegime',
    // MUTIRÃO (1)
    'seeu_072': 'mutirao',
    // PRESTAÇÃO PECUNIÁRIA (2)
    'seeu_086': 'prestacaoPecuniaria', 'seeu_093': 'prestacaoPecuniaria',
    // OUTROS (11)
    'seeu_103': 'outros', 'seeu_120': 'outros', 'seeu_122': 'outros',
    'seeu_160': 'outros', 'seeu_161': 'outros', 'seeu_164': 'outros',
    'seeu_200': 'outros', 'seeu_211': 'outros', 'seeu_265': 'outros',
    'seeu_271': 'outros', 'seeu_280': 'outros',
};

/**
 * Busca unificada em todos os bancos de decisões
 */
export function buscarDecisaoGlobal(id: string): Modelo | undefined {
    // Primeiro busca na nova estrutura
    const resultado = buscarDecisaoPorId(id);
    if (resultado) return resultado;

    // Fallback para estrutura legada (converter formato se encontrar)
    const legado = buscarPorId(id);
    if (legado) {
        return {
            id: legado.id,
            nome: legado.nome,
            conteudo: legado.conteudo,
            tipoDocumento: 'decisao',
            magistrado: 'henriqueBaltazar',
            agrupador: MODELO_AGRUPADOR[legado.id] || 'outros',
            fonteOriginal: 'SEEU',
            dataExtracao: legado.dataExtracao,
        };
    }

    return undefined;
}

/**
 * Busca modelos legados por agrupador
 */
export function buscarModelosLegadosPorAgrupador(agrupador: Agrupador): Modelo[] {
    return MODELOS_LEGADO
        .filter(m => MODELO_AGRUPADOR[m.id] === agrupador)
        .map(m => ({
            id: m.id,
            nome: m.nome,
            conteudo: m.conteudo,
            tipoDocumento: 'decisao' as TipoDocumento,
            magistrado: 'henriqueBaltazar' as Magistrado,
            agrupador: agrupador,
            fonteOriginal: 'SEEU',
            dataExtracao: m.dataExtracao,
        }));
}

/**
 * Busca global por termo
 */
export function buscarGlobal(termo: string, magistrado?: Magistrado, tipo?: TipoDocumento, agrupador?: Agrupador): Modelo[] {
    // Por enquanto, busca apenas em decisões do Henrique Baltazar
    const resultadosNovos = buscarDecisoes(termo, agrupador);

    // Se não encontrou na nova estrutura, busca na legada
    if (resultadosNovos.length === 0) {
        const resultadosLegado = buscarPorTermo(termo);
        return resultadosLegado
            .filter(m => !agrupador || MODELO_AGRUPADOR[m.id] === agrupador)
            .map(legado => ({
                id: legado.id,
                nome: legado.nome,
                conteudo: legado.conteudo,
                tipoDocumento: 'decisao' as TipoDocumento,
                magistrado: 'henriqueBaltazar' as Magistrado,
                agrupador: MODELO_AGRUPADOR[legado.id] || 'outros',
                fonteOriginal: 'SEEU',
                dataExtracao: legado.dataExtracao,
            }));
    }

    return resultadosNovos;
}

/**
 * Estatísticas globais do banco
 */
export function getEstatisticasGlobais(): {
    totalDecisoes: number;
    totalDespachos: number;
    totalSentencas: number;
    porAgrupador: Record<string, number>;
    magistrados: { id: Magistrado; decisoes: number; despachos: number; sentencas: number }[];
} {
    // Conta modelos por agrupador
    const porAgrupador: Record<string, number> = {};
    for (const modelo of MODELOS_LEGADO) {
        const ag = MODELO_AGRUPADOR[modelo.id] || 'outros';
        porAgrupador[ag] = (porAgrupador[ag] || 0) + 1;
    }

    return {
        totalDecisoes: TODAS_DECISOES.length + MODELOS_LEGADO.length,
        totalDespachos: 0, // Futuro
        totalSentencas: 0, // Futuro
        porAgrupador,
        magistrados: [
            {
                id: 'henriqueBaltazar',
                decisoes: TODAS_DECISOES.length + MODELOS_LEGADO.length,
                despachos: 0,
                sentencas: 0,
            },
        ],
    };
}
