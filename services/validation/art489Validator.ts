/**
 * estagIA - Validador Art. 489 CPC
 * 
 * Sistema de validação detalhado baseado no Art. 489 do CPC
 * e no estilo de redação do Juiz Henrique Baltazar.
 * 
 * Critérios:
 * - Relatório (40 pontos)
 * - Fundamentação (65 pontos)
 * - Dispositivo (40 pontos)
 * - Anti-Alucinação (45 pontos)
 * Total: 190 pontos
 * 
 * @version 1.0.0
 */

// ============================================
// INTERFACES
// ============================================

export interface ScoreRelatorio {
    vistos: 0 | 5;
    causaConclusao: 0 | 5 | 10;
    eventos: 0 | 5;
    ordemPartes: 0 | 5 | 10;
    naoMencionaAusentes: 0 | 5;
    relatados: 0 | 5;
    total: number; // max 40
    problemas: string[];
    sugestoes: string[];
}

export interface ScoreFundamentacao {
    pontoFulcral: 0 | 5 | 10;
    multiplosPedidos: 0 | 5;
    estruturaSituacaoDireito: 0 | 5 | 10;
    doutrinaABNT: 0 | 5 | 10;
    legislacao: 0 | 5 | 10;
    jurisprudencia: 0 | 5 | 10;
    naoRepetePartes: 0 | 5;
    conclusao: 0 | 5;
    total: number; // max 65
    problemas: string[];
    sugestoes: string[];
}

export interface ScoreDispositivo {
    issoPosto: 0 | 5;
    objetividade: 0 | 5 | 10;
    apenasAlteracoes: 0 | 5 | 10;
    estruturaItens: 0 | 5;
    pri: 0 | 5;
    atualizaAtestado: 0 | 5;
    total: number; // max 40
    problemas: string[];
    sugestoes: string[];
}

export interface ScoreAntiAlucinacao {
    semNomesInventados: 0 | 10;
    semProcessosInventados: 0 | 5;
    termosGenericos: 0 | 5;
    semNomeJuiz: 0 | 5;
    jurispVerificavel: 0 | 10;
    doutrinaVerificavel: 0 | 10;
    total: number; // max 45
    problemas: string[];
    alucinacoesDetectadas: string[];
}

export interface ScoreCompleto {
    relatorio: ScoreRelatorio;
    fundamentacao: ScoreFundamentacao;
    dispositivo: ScoreDispositivo;
    antiAlucinacao: ScoreAntiAlucinacao;
    totalGeral: number; // max 190
    percentual: number; // 0-100%
    nivelAtingido: 1 | 2 | 3 | 4 | 5;
    aprovado: boolean;
    resumo: string;
}

export interface ContextoValidacao {
    insumos: string;
    orientacao: string;
    agrupador: string;
    nivelSolicitado: 1 | 2 | 3 | 4 | 5;
    decisaoEsperada?: 'defere' | 'indefere' | 'parcial';
}

// ============================================
// PADRÕES DO JUIZ BALTAZAR
// ============================================

const PADROES = {
    // Relatório
    vistos: /^Vistos,?\s*etc\.?/im,

    causaConclusao: [
        /Trata-se de (pedido|requerimento|análise|execução|incidente)/i,
        /Executando-se pena .+ vieram-me conclusos/i,
        /O apenado .+ requer/i,
        /Cuida-se de (pedido|pleito|requerimento)/i,
        /Apenado requer/i,
        /A (defesa|Defesa) requer/i,
        /O Ministério Público requer/i,
    ],

    eventos: /\(evento[s]?\s*\d+(\.\d+)?(,?\s*\d+(\.\d+)?)*\)/gi,

    relatados: /Relatados\.?\s*$/m,

    // Fundamentação
    pontoFulcral: [
        /Cinge-se (a presente demanda|o presente feito|a controvérsia)/i,
        /Versam os autos sobre/i,
        /A discussão diz respeito a/i,
        /A questão posta (nos autos|em análise)/i,
        /O ponto (central|fulcral) (da|desta) demanda/i,
        /Trata-se de análise (acerca|sobre)/i,
    ],

    transicoesTemas: [
        /Quanto (ao|à|aos|às) (pedido|pretensão|pleito)/i,
        /Já no que (concerne|tange|diz respeito)/i,
        /Por (fim|último), (com relação|quanto)/i,
        /No (tocante|concernente) (ao|à)/i,
        /Relativamente (ao|à)/i,
        /Sobre (o|a|os|as) (pedido|pleito|pretensão)/i,
    ],

    doutrina: [
        // Padrão ABNT: AUTOR. Título. Ed. Cidade: Editora, Ano.
        /([A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-záàâãéêíóôõúç]+(?:\s+[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ][a-záàâãéêíóôõúç]+)*)[,.]?\s*(?:in:|In:)?\s*([^,.]+)[,.]\s*(\d+)[ªº]?\s*(?:ed|edição)[.,]?\s*([^:]+):\s*([^,]+)[,.]?\s*(\d{4})/gi,
        // Padrão simplificado: Autor (ano)
        /(?:segundo|conforme|ensina|preleciona|afirma)\s+([A-Z][a-záàâãéêíóôõúç]+(?:\s+[A-Z][a-záàâãéêíóôõúç]+)*)\s*\((\d{4})/gi,
        // Citação direta
        /(".*?")\s*\(([A-Z]+[^)]+\d{4}[^)]*)\)/g,
    ],

    legislacao: [
        /art(?:igo)?\.?\s*\d+/gi,
        /Lei\s+(?:n[ºo°]?\s*)?\d+[\d./]+/gi,
        /LEP|Lei de Execução Penal/gi,
        /Código Penal|CP(?:\s|,|\.)/g,
        /CPP|Código de Processo Penal/gi,
        /CF(?:\/88)?|Constituição Federal/gi,
        /§\s*\d+[ºo°]?/gi,
        /inciso\s+[IVXLC]+/gi,
    ],

    jurisprudencia: [
        /Súmula\s+(?:n[ºo°]?\s*)?\d+/gi,
        /STJ|STF|TJ[A-Z]{2}/g,
        /(?:HC|REsp|AgRg|RHC|ARE|RE)\s*(?:n[ºo°]?\s*)?\d+/gi,
        /Tema\s+(?:n[ºo°]?\s*)?\d+/gi,
        /(?:DJ|DJe|DOU)\s*(?:de\s*)?\d{1,2}[./]\d{1,2}[./]\d{2,4}/gi,
    ],

    conclusaoFundamentacao: [
        /Assim,?\s*(sendo|posto)/i,
        /Dessa (forma|feita|maneira)/i,
        /Portanto,/i,
        /Por (conseguinte|consequência)/i,
        /Logo,/i,
        /Ante o exposto/i,
        /Diante (disso|do exposto)/i,
        /Em (face|razão) (disso|do exposto)/i,
    ],

    // Dispositivo
    issoPosto: /Isso posto,|Ante o exposto,|Posto isso,/i,

    decisoes: [
        /julgo (procedente|improcedente|parcialmente procedente)/i,
        /(defiro|indefiro) (o pedido|a pretensão|o requerimento)/i,
        /mando retificar a GEP/i,
        /(concedo|nego) (o benefício|a progressão|o livramento)/i,
        /homologo/i,
        /determino/i,
    ],

    pri: /P\.?\s*R\.?\s*I\.?|Publique-se[.,]?\s*Registre-se[.,]?\s*Intime-se/i,

    atualizaAtestado: /Atualize-se o atestado de penas/i,

    // Anti-Alucinação
    nomesProibidos: [
        /Dr\.?\s+[A-Z][a-záàâãéêíóôõúç]+\s+[A-Z][a-záàâãéêíóôõúç]+/g,
        /Promotor(?:a)?\s+[A-Z][a-záàâãéêíóôõúç]+/gi,
        /Defensor(?:a)?\s+[A-Z][a-záàâãéêíóôõúç]+/gi,
        /Advogad[oa]\s+[A-Z][a-záàâãéêíóôõúç]+/gi,
    ],

    nomeJuiz: /Juiz\s+(?:Henrique\s+)?Baltazar|Baltazar/gi,

    termosGenericos: [
        /Ministério Público/i,
        /Defesa/i,
        /apenado/i,
        /reeducando/i,
        /executado/i,
        /sentenciado/i,
    ],
};

// ============================================
// FUNÇÕES DE VALIDAÇÃO - RELATÓRIO
// ============================================

function validarVistos(texto: string): { ok: boolean; score: 0 | 5 } {
    const temVistos = PADROES.vistos.test(texto);
    return {
        ok: temVistos,
        score: temVistos ? 5 : 0
    };
}

function validarCausaConclusao(texto: string): { ok: boolean; score: 0 | 5 | 10; tipo: string } {
    for (const padrao of PADROES.causaConclusao) {
        const match = texto.match(padrao);
        if (match) {
            return {
                ok: true,
                score: 10,
                tipo: match[0]
            };
        }
    }

    // Verificação parcial
    if (/requer|pedido|pleito|análise/i.test(texto)) {
        return { ok: true, score: 5, tipo: 'parcial' };
    }

    return { ok: false, score: 0, tipo: 'ausente' };
}

function validarEventos(texto: string): { ok: boolean; score: 0 | 5; eventos: string[] } {
    const matches = texto.match(PADROES.eventos) || [];
    return {
        ok: matches.length > 0,
        score: matches.length > 0 ? 5 : 0,
        eventos: matches
    };
}

function validarOrdemPartes(texto: string, insumos: string): { ok: boolean; score: 0 | 5 | 10 } {
    const lower = texto.toLowerCase();
    const insumosLower = insumos.toLowerCase();

    // Identificar quem deu causa
    const mpDeuCausa = insumosLower.includes('ministério público requer') ||
        insumosLower.includes('mp requer') ||
        insumosLower.includes('parecer do mp');

    const posMP = lower.indexOf('ministério público');
    const posDefesa = lower.indexOf('defesa');

    // Se MP deu causa, deve vir primeiro
    if (mpDeuCausa) {
        if (posMP >= 0 && (posDefesa < 0 || posMP < posDefesa)) {
            return { ok: true, score: 10 };
        }
        return { ok: false, score: 5 };
    }

    // Se outro deu causa, MP pode vir depois
    if (posDefesa >= 0 || posMP >= 0) {
        return { ok: true, score: 10 };
    }

    return { ok: true, score: 5 }; // Neutro se não menciona partes
}

function validarNaoMencionaAusentes(texto: string): { ok: boolean; score: 0 | 5 } {
    const frasesDesnecessarias = [
        /a defesa (não se manifestou|silenciou|quedou-se inerte)/i,
        /o (ministério público|mp) não se manifestou/i,
        /sem manifestação d(a|o)/i,
    ];

    for (const padrao of frasesDesnecessarias) {
        if (padrao.test(texto)) {
            return { ok: false, score: 0 };
        }
    }

    return { ok: true, score: 5 };
}

function validarRelatados(texto: string): { ok: boolean; score: 0 | 5 } {
    const temRelatados = PADROES.relatados.test(texto);
    return {
        ok: temRelatados,
        score: temRelatados ? 5 : 0
    };
}

// ============================================
// FUNÇÕES DE VALIDAÇÃO - FUNDAMENTAÇÃO
// ============================================

function validarPontoFulcral(texto: string): { ok: boolean; score: 0 | 5 | 10; padrao: string } {
    // Pegar texto após "Relatados."
    const partes = texto.split(/Relatados\.?\s*/i);
    const fundamentacao = partes.length > 1 ? partes[1] : texto;

    // Verificar primeiro parágrafo
    const primeiroParagrafo = fundamentacao.split(/\n\n|\r\n\r\n/)[0] || fundamentacao.substring(0, 500);

    for (const padrao of PADROES.pontoFulcral) {
        if (padrao.test(primeiroParagrafo)) {
            return { ok: true, score: 10, padrao: 'completo' };
        }
    }

    // Verificação parcial
    if (/análise|pedido|pretensão|requerimento/i.test(primeiroParagrafo)) {
        return { ok: true, score: 5, padrao: 'parcial' };
    }

    return { ok: false, score: 0, padrao: 'ausente' };
}

function validarMultiplosPedidos(texto: string, insumos: string): { ok: boolean; score: 0 | 5 } {
    // Verificar se há múltiplos pedidos nos insumos
    const indicadoresMultiplos = (insumos.match(/pedido|requer|solicita|pleiteia/gi) || []).length;

    if (indicadoresMultiplos <= 1) {
        return { ok: true, score: 5 }; // Não precisa estruturar se só tem 1
    }

    // Se há múltiplos, verificar se o texto os organiza
    let transicoes = 0;
    for (const padrao of PADROES.transicoesTemas) {
        if (padrao.test(texto)) transicoes++;
    }

    return {
        ok: transicoes >= indicadoresMultiplos - 1,
        score: transicoes > 0 ? 5 : 0
    };
}

function validarEstruturaSituacaoDireito(texto: string): { ok: boolean; score: 0 | 5 | 10 } {
    // Verificar se apresenta situação e depois aplica direito
    const temSituacao = /consta nos autos|verifico que|observa-se que|o (SEEU|sistema) registra/i.test(texto);
    const temDireito = /o (ordenamento|direito|art\.|lei)/i.test(texto);

    if (temSituacao && temDireito) {
        return { ok: true, score: 10 };
    } else if (temSituacao || temDireito) {
        return { ok: true, score: 5 };
    }

    return { ok: false, score: 0 };
}

function validarDoutrinaABNT(texto: string): { ok: boolean; score: 0 | 5 | 10; citacoes: string[] } {
    const citacoes: string[] = [];

    for (const padrao of PADROES.doutrina) {
        const matches = texto.match(padrao) || [];
        citacoes.push(...matches);
    }

    if (citacoes.length === 0) {
        return { ok: false, score: 0, citacoes: [] };
    }

    // Verificar se tem formato ABNT completo (autor, obra, editora, ano)
    const abntCompleto = citacoes.some(c =>
        /\d{4}/.test(c) && /(editora|ed\.|edição)/i.test(c)
    );

    return {
        ok: true,
        score: abntCompleto ? 10 : 5,
        citacoes
    };
}

function validarLegislacao(texto: string): { ok: boolean; score: 0 | 5 | 10; artigos: string[] } {
    const artigos: string[] = [];

    for (const padrao of PADROES.legislacao) {
        const matches = texto.match(padrao) || [];
        artigos.push(...matches);
    }

    if (artigos.length === 0) {
        return { ok: false, score: 0, artigos: [] };
    }

    // Mais artigos = mais completo
    return {
        ok: true,
        score: artigos.length >= 3 ? 10 : 5,
        artigos: [...new Set(artigos)] // Remove duplicatas
    };
}

function validarJurisprudencia(texto: string): { ok: boolean; score: 0 | 5 | 10; citacoes: string[] } {
    const citacoes: string[] = [];

    for (const padrao of PADROES.jurisprudencia) {
        const matches = texto.match(padrao) || [];
        citacoes.push(...matches);
    }

    if (citacoes.length === 0) {
        return { ok: false, score: 0, citacoes: [] };
    }

    // Verificar se são súmulas ou temas repetitivos (mais peso)
    const temSumulaOuTema = citacoes.some(c => /súmula|tema/i.test(c));

    return {
        ok: true,
        score: temSumulaOuTema ? 10 : (citacoes.length >= 2 ? 10 : 5),
        citacoes: [...new Set(citacoes)]
    };
}

function validarNaoRepetePartes(texto: string, insumos: string): { ok: boolean; score: 0 | 5 } {
    // Detectar citações literais dos insumos
    const frasesInsumos = insumos
        .split(/[.!?]/)
        .filter(f => f.length > 50)
        .map(f => f.trim().toLowerCase());

    const textoLower = texto.toLowerCase();

    for (const frase of frasesInsumos) {
        if (textoLower.includes(frase)) {
            return { ok: false, score: 0 };
        }
    }

    return { ok: true, score: 5 };
}

function validarConclusao(texto: string): { ok: boolean; score: 0 | 5 } {
    // Texto antes do dispositivo deve ter conclusão
    const partes = texto.split(/Isso posto,|Ante o exposto,/i);
    const fundamentacao = partes[0] || texto;

    for (const padrao of PADROES.conclusaoFundamentacao) {
        if (padrao.test(fundamentacao)) {
            return { ok: true, score: 5 };
        }
    }

    return { ok: false, score: 0 };
}

// ============================================
// FUNÇÕES DE VALIDAÇÃO - DISPOSITIVO
// ============================================

function validarIssoPosto(texto: string): { ok: boolean; score: 0 | 5 } {
    const tem = PADROES.issoPosto.test(texto);
    return { ok: tem, score: tem ? 5 : 0 };
}

function validarObjetividade(texto: string): { ok: boolean; score: 0 | 5 | 10 } {
    // Extrair dispositivo
    const match = texto.match(/(?:Isso posto,|Ante o exposto,)([\s\S]*?)(?:P\.?\s*R\.?\s*I\.?|$)/i);
    const dispositivo = match ? match[1] : '';

    if (dispositivo.length === 0) {
        return { ok: false, score: 0 };
    }

    // Dispositivo muito longo = pouco objetivo
    const palavras = dispositivo.split(/\s+/).length;

    if (palavras <= 100) {
        return { ok: true, score: 10 }; // Conciso
    } else if (palavras <= 200) {
        return { ok: true, score: 5 }; // Aceitável
    }

    return { ok: false, score: 0 }; // Muito longo
}

function validarApenasAlteracoes(texto: string, orientacao: string): { ok: boolean; score: 0 | 5 | 10 } {
    const dispositivo = texto.split(/Isso posto,|Ante o exposto,/i)[1] || '';
    const lower = dispositivo.toLowerCase();

    // Se indefere, não deveria mencionar alterações
    if (/indefiro|indeferimento|improcedente/i.test(orientacao)) {
        if (!/retific|alter|modific/i.test(lower)) {
            return { ok: true, score: 10 };
        }
    }

    // Se defere, deve mencionar o que muda
    if (/defiro|deferimento|procedente/i.test(orientacao)) {
        if (/retific|alter|modific|mando|determino|concedo/i.test(lower)) {
            return { ok: true, score: 10 };
        }
        return { ok: false, score: 5 };
    }

    return { ok: true, score: 5 };
}

function validarEstruturaItens(texto: string): { ok: boolean; score: 0 | 5 } {
    const dispositivo = texto.split(/Isso posto,|Ante o exposto,/i)[1] || '';

    // Se tem múltiplas decisões, deve usar itens
    const decisoes = (dispositivo.match(/defiro|indefiro|julgo|mando|determino/gi) || []).length;

    if (decisoes <= 1) {
        return { ok: true, score: 5 }; // Não precisa de itens
    }

    // Verificar se usa itens (a), b), c) ou I, II, III
    const temItens = /[a-z]\)|[ivx]+\)|^\s*\d+[\.\)]/mi.test(dispositivo);

    return {
        ok: temItens,
        score: temItens ? 5 : 0
    };
}

function validarPRI(texto: string): { ok: boolean; score: 0 | 5 } {
    const tem = PADROES.pri.test(texto);
    return { ok: tem, score: tem ? 5 : 0 };
}

function validarAtualizaAtestado(texto: string, orientacao: string): { ok: boolean; score: 0 | 5 } {
    const alterouSituacao = /defiro|procedente|retific|alter/i.test(orientacao);
    const temAtualizacao = PADROES.atualizaAtestado.test(texto);

    if (alterouSituacao && temAtualizacao) {
        return { ok: true, score: 5 };
    }

    if (!alterouSituacao && !temAtualizacao) {
        return { ok: true, score: 5 };
    }

    return { ok: false, score: 0 };
}

// ============================================
// FUNÇÕES DE VALIDAÇÃO - ANTI-ALUCINAÇÃO
// ============================================

function validarSemNomesInventados(texto: string): { ok: boolean; score: 0 | 10; detectados: string[] } {
    const detectados: string[] = [];

    for (const padrao of PADROES.nomesProibidos) {
        const matches = texto.match(padrao) || [];
        detectados.push(...matches);
    }

    return {
        ok: detectados.length === 0,
        score: detectados.length === 0 ? 10 : 0,
        detectados
    };
}

function validarSemProcessosInventados(texto: string, insumos: string): { ok: boolean; score: 0 | 5; detectados: string[] } {
    // Extrair números de processo do texto
    const processosTexto = texto.match(/\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}|\d+\/\d{4}/g) || [];

    // Extrair números dos insumos
    const processosInsumos = insumos.match(/\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}|\d+\/\d{4}/g) || [];

    const inventados = processosTexto.filter(p => !processosInsumos.includes(p));

    return {
        ok: inventados.length === 0,
        score: inventados.length === 0 ? 5 : 0,
        detectados: inventados
    };
}

function validarTermosGenericos(texto: string): { ok: boolean; score: 0 | 5 } {
    let usaGenericos = 0;

    for (const padrao of PADROES.termosGenericos) {
        if (padrao.test(texto)) usaGenericos++;
    }

    return {
        ok: usaGenericos >= 2,
        score: usaGenericos >= 2 ? 5 : 0
    };
}

function validarSemNomeJuiz(texto: string): { ok: boolean; score: 0 | 5 } {
    const temNome = PADROES.nomeJuiz.test(texto);
    return {
        ok: !temNome,
        score: temNome ? 0 : 5
    };
}

function validarJurispVerificavel(texto: string): { ok: boolean; score: 0 | 5 | 10 } {
    const citacoes = texto.match(PADROES.jurisprudencia[0]) || []; // Súmulas

    // Verificar se súmulas citadas são reais (lista conhecida)
    const sumulasConhecidas = [
        '534', '535', '536', '537', '538', '439', '440', '441', '442', '443',
        '269', '341', '471', '491', '499', '500', '501', '521', '522', '523'
    ];

    if (citacoes.length === 0) {
        return { ok: true, score: 5 }; // Não cita, não erra
    }

    for (const citacao of citacoes) {
        const numero = citacao.match(/\d+/)?.[0];
        if (numero && sumulasConhecidas.includes(numero)) {
            return { ok: true, score: 10 };
        }
    }

    return { ok: false, score: 5 };
}

function validarDoutrinaVerificavel(texto: string): { ok: boolean; score: 0 | 5 | 10 } {
    // Autores conhecidos de execução penal
    const autoresConhecidos = [
        'guilherme nucci', 'rogerio greco', 'julio fabbrini mirabete',
        'damásio de jesus', 'fernando capez', 'cezar bitencourt',
        'renato marcão', 'alexis couto de brito', 'rodrigo duque estrada'
    ];

    const lower = texto.toLowerCase();

    for (const autor of autoresConhecidos) {
        if (lower.includes(autor)) {
            return { ok: true, score: 10 };
        }
    }

    // Verifica se tem alguma citação de doutrina
    for (const padrao of PADROES.doutrina) {
        if (padrao.test(texto)) {
            return { ok: true, score: 5 }; // Tem citação, mas autor desconhecido
        }
    }

    return { ok: true, score: 5 }; // Não cita doutrina = OK para níveis baixos
}

// ============================================
// FUNÇÃO PRINCIPAL DE VALIDAÇÃO
// ============================================

export function validarDecisaoArt489(
    texto: string,
    contexto: ContextoValidacao
): ScoreCompleto {
    // ========== RELATÓRIO ==========
    const vistos = validarVistos(texto);
    const causaConclusao = validarCausaConclusao(texto);
    const eventos = validarEventos(texto);
    const ordemPartes = validarOrdemPartes(texto, contexto.insumos);
    const naoMencionaAusentes = validarNaoMencionaAusentes(texto);
    const relatados = validarRelatados(texto);

    const scoreRelatorio: ScoreRelatorio = {
        vistos: vistos.score,
        causaConclusao: causaConclusao.score,
        eventos: eventos.score,
        ordemPartes: ordemPartes.score,
        naoMencionaAusentes: naoMencionaAusentes.score,
        relatados: relatados.score,
        total: vistos.score + causaConclusao.score + eventos.score +
            ordemPartes.score + naoMencionaAusentes.score + relatados.score,
        problemas: [],
        sugestoes: []
    };

    if (!vistos.ok) scoreRelatorio.problemas.push('Falta "Vistos, etc." no início');
    if (!causaConclusao.ok) scoreRelatorio.problemas.push('Falta identificar a causa da conclusão');
    if (!eventos.ok) scoreRelatorio.sugestoes.push('Incluir referência a eventos (evento X.X)');
    if (!relatados.ok) scoreRelatorio.problemas.push('Falta "Relatados." ao final do relatório');

    // ========== FUNDAMENTAÇÃO ==========
    const pontoFulcral = validarPontoFulcral(texto);
    const multiplosPedidos = validarMultiplosPedidos(texto, contexto.insumos);
    const estrutura = validarEstruturaSituacaoDireito(texto);
    const doutrina = validarDoutrinaABNT(texto);
    const legislacao = validarLegislacao(texto);
    const jurisprudencia = validarJurisprudencia(texto);
    const naoRepete = validarNaoRepetePartes(texto, contexto.insumos);
    const conclusao = validarConclusao(texto);

    const scoreFundamentacao: ScoreFundamentacao = {
        pontoFulcral: pontoFulcral.score,
        multiplosPedidos: multiplosPedidos.score,
        estruturaSituacaoDireito: estrutura.score,
        doutrinaABNT: doutrina.score,
        legislacao: legislacao.score,
        jurisprudencia: jurisprudencia.score,
        naoRepetePartes: naoRepete.score,
        conclusao: conclusao.score,
        total: pontoFulcral.score + multiplosPedidos.score + estrutura.score +
            doutrina.score + legislacao.score + jurisprudencia.score +
            naoRepete.score + conclusao.score,
        problemas: [],
        sugestoes: []
    };

    if (!pontoFulcral.ok) scoreFundamentacao.problemas.push('Primeiro parágrafo não situa a demanda (usar "Cinge-se...", "Versam os autos...")');
    if (!estrutura.ok) scoreFundamentacao.problemas.push('Falta estrutura situação → aplicação do direito');
    if (doutrina.score === 0 && contexto.nivelSolicitado >= 4) {
        scoreFundamentacao.problemas.push('Nível 4+ exige citação de doutrina em ABNT');
    }
    if (legislacao.score < 10) scoreFundamentacao.sugestoes.push('Citar mais legislação aplicável');
    if (jurisprudencia.score < 10) scoreFundamentacao.sugestoes.push('Citar súmulas ou jurisprudência');
    if (!naoRepete.ok) scoreFundamentacao.problemas.push('Repete literalmente argumentos das partes');
    if (!conclusao.ok) scoreFundamentacao.sugestoes.push('Incluir parágrafo de conclusão antes do dispositivo');

    // ========== DISPOSITIVO ==========
    const issoPosto = validarIssoPosto(texto);
    const objetividade = validarObjetividade(texto);
    const apenasAlteracoes = validarApenasAlteracoes(texto, contexto.orientacao);
    const estruturaItens = validarEstruturaItens(texto);
    const pri = validarPRI(texto);
    const atualizaAtestado = validarAtualizaAtestado(texto, contexto.orientacao);

    const scoreDispositivo: ScoreDispositivo = {
        issoPosto: issoPosto.score,
        objetividade: objetividade.score,
        apenasAlteracoes: apenasAlteracoes.score,
        estruturaItens: estruturaItens.score,
        pri: pri.score,
        atualizaAtestado: atualizaAtestado.score,
        total: issoPosto.score + objetividade.score + apenasAlteracoes.score +
            estruturaItens.score + pri.score + atualizaAtestado.score,
        problemas: [],
        sugestoes: []
    };

    if (!issoPosto.ok) scoreDispositivo.problemas.push('Falta "Isso posto," no dispositivo');
    if (!objetividade.ok) scoreDispositivo.problemas.push('Dispositivo muito longo, deve ser mais objetivo');
    if (!pri.ok) scoreDispositivo.problemas.push('Falta "P.R.I." no final');
    if (!atualizaAtestado.ok) {
        scoreDispositivo.sugestoes.push('Se alterou situação, incluir "Atualize-se o atestado de penas"');
    }

    // ========== ANTI-ALUCINAÇÃO ==========
    const semNomes = validarSemNomesInventados(texto);
    const semProcessos = validarSemProcessosInventados(texto, contexto.insumos);
    const genericos = validarTermosGenericos(texto);
    const semJuiz = validarSemNomeJuiz(texto);
    const jurispVerif = validarJurispVerificavel(texto);
    const doutrinaVerif = validarDoutrinaVerificavel(texto);

    const scoreAntiAlucinacao: ScoreAntiAlucinacao = {
        semNomesInventados: semNomes.score,
        semProcessosInventados: semProcessos.score,
        termosGenericos: genericos.score,
        semNomeJuiz: semJuiz.score,
        jurispVerificavel: jurispVerif.score,
        doutrinaVerificavel: doutrinaVerif.score,
        total: semNomes.score + semProcessos.score + genericos.score +
            semJuiz.score + jurispVerif.score + doutrinaVerif.score,
        problemas: [],
        alucinacoesDetectadas: [...semNomes.detectados, ...semProcessos.detectados]
    };

    if (!semNomes.ok) scoreAntiAlucinacao.problemas.push(`Nomes inventados: ${semNomes.detectados.join(', ')}`);
    if (!semProcessos.ok) scoreAntiAlucinacao.problemas.push(`Processos não verificáveis: ${semProcessos.detectados.join(', ')}`);
    if (!semJuiz.ok) scoreAntiAlucinacao.problemas.push('Menciona nome do juiz (proibido)');

    // ========== CÁLCULO FINAL ==========
    const totalGeral = scoreRelatorio.total + scoreFundamentacao.total +
        scoreDispositivo.total + scoreAntiAlucinacao.total;
    const percentual = Math.round((totalGeral / 190) * 100);

    // Determinar nível atingido
    let nivelAtingido: 1 | 2 | 3 | 4 | 5 = 1;
    if (percentual >= 90 && doutrina.score >= 10) nivelAtingido = 5;
    else if (percentual >= 80 && doutrina.score >= 5) nivelAtingido = 4;
    else if (percentual >= 70 && legislacao.score >= 5 && jurisprudencia.score >= 5) nivelAtingido = 3;
    else if (percentual >= 60) nivelAtingido = 2;

    return {
        relatorio: scoreRelatorio,
        fundamentacao: scoreFundamentacao,
        dispositivo: scoreDispositivo,
        antiAlucinacao: scoreAntiAlucinacao,
        totalGeral,
        percentual,
        nivelAtingido,
        aprovado: percentual >= 70,
        resumo: `Score: ${totalGeral}/190 (${percentual}%) - Nível ${nivelAtingido}`
    };
}

// Export para uso em scripts Node.js
export default { validarDecisaoArt489 };
