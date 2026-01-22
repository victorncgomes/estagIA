/**
 * estagIA - Sistema de Testes e Retroalimentação
 * 
 * Estrutura para validação de decisões geradas
 * Permite usuário alimentar casos de teste com resultado esperado
 * 
 * @version 1.0.0
 */

// ============================================
// ESTRUTURA DE CASO DE TESTE
// ============================================
export interface CasoTeste {
    id: string;
    nome: string;
    materia: string;
    nivel: number;

    // INPUTS
    insumos: {
        manifestacaoMP?: string;
        manifestacaoDefesa?: string;
        atestadoPenas?: string;
        outrosDocumentos?: string;
    };
    orientacoes: string;

    // RESULTADO ESPERADO
    esperado: {
        posicionamentoMP: 'deferimento' | 'indeferimento' | 'parcial' | 'indefinido';
        decisaoFinal: 'defere' | 'indefere' | 'parcial';
        estruturaCorreta: boolean; // Vistos → Relatados → Isso posto → P.R.I.
        citacoesComFonte: boolean;
    };

    // MÉTRICAS DE VALIDAÇÃO
    validacao?: {
        estruturaOk: boolean;
        posicionamentoOk: boolean;
        decisaoOk: boolean;
        citacoesOk: boolean;
        score: number; // 0-100
        observacoes: string;
    };

    // METADATA
    criadoEm: Date;
    ultimoTeste?: Date;
}

// ============================================
// FEEDBACK DO USUÁRIO
// ============================================
export interface FeedbackDecisao {
    id: string;
    decisaoId: string;
    rating: 'bom' | 'ruim';

    // O que estava errado (se rating = ruim)
    problemas?: {
        estrutura?: boolean;
        posicionamento?: boolean;
        conteudo?: boolean;
        citacoes?: boolean;
        outro?: string;
    };

    // Input original
    inputOriginal: {
        materia: string;
        nivel: number;
        insumos: string;
        orientacoes: string;
    };

    // Output gerado
    outputGerado: string;

    criadoEm: Date;
}

// ============================================
// FUNÇÕES DE VALIDAÇÃO
// ============================================

/**
 * Valida estrutura da decisão
 */
export function validarEstrutura(decisao: string): {
    vistos: boolean;
    relatados: boolean;
    issoPosto: boolean;
    pri: boolean;
    score: number;
} {
    const lower = decisao.toLowerCase();

    const vistos = lower.includes('vistos');
    const relatados = lower.includes('relatados.');
    const issoPosto = lower.includes('isso posto');
    const pri = lower.includes('p.r.i') || lower.includes('pri');

    const pontos = [vistos, relatados, issoPosto, pri].filter(Boolean).length;

    return {
        vistos,
        relatados,
        issoPosto,
        pri,
        score: (pontos / 4) * 100
    };
}

/**
 * Valida se citações têm fonte
 */
export function validarCitacoes(decisao: string): {
    totalCitacoes: number;
    citacoesComFonte: number;
    score: number;
} {
    // Detecta padrões de citação (aspas com texto)
    const citacoes = decisao.match(/"[^"]{20,}"/g) || [];

    // Citações que têm referência após (autor, ano, página)
    const citacoesComFonte = citacoes.filter(c => {
        const idx = decisao.indexOf(c);
        const after = decisao.slice(idx + c.length, idx + c.length + 100);
        return /\([A-Z][a-záéíóú]+.*\d{4}.*p\.\s*\d+\)/i.test(after);
    });

    return {
        totalCitacoes: citacoes.length,
        citacoesComFonte: citacoesComFonte.length,
        score: citacoes.length === 0 ? 100 : (citacoesComFonte.length / citacoes.length) * 100
    };
}

/**
 * Valida coerência do posicionamento
 */
export function validarPosicionamento(
    decisao: string,
    posicionamentoEsperado: string
): boolean {
    const lower = decisao.toLowerCase();

    if (posicionamentoEsperado === 'indeferimento') {
        // Decisão deve mencionar indeferimento no relatório e indeferir
        const mencionaIndeferimento =
            lower.includes('indeferimento') ||
            lower.includes('pelo indeferimento');
        const decisaoIndefere =
            lower.includes('isso posto, indefiro') ||
            lower.includes('isso posto,\nindefiro');
        return mencionaIndeferimento && decisaoIndefere;
    }

    if (posicionamentoEsperado === 'deferimento') {
        const mencionaDeferimento =
            lower.includes('deferimento') ||
            lower.includes('pelo deferimento');
        const decisaoDefere =
            lower.includes('isso posto, defiro') ||
            lower.includes('isso posto,\ndefiro');
        return mencionaDeferimento && decisaoDefere;
    }

    return true; // Parcial ou indefinido
}

/**
 * Executa validação completa de um caso de teste
 */
export function executarValidacao(
    decisaoGerada: string,
    casoTeste: CasoTeste
): CasoTeste['validacao'] {
    const estrutura = validarEstrutura(decisaoGerada);
    const citacoes = validarCitacoes(decisaoGerada);
    const posicionamentoOk = validarPosicionamento(
        decisaoGerada,
        casoTeste.esperado.posicionamentoMP
    );

    // Verificar se decisão final está correta
    const lower = decisaoGerada.toLowerCase();
    let decisaoOk = false;
    if (casoTeste.esperado.decisaoFinal === 'defere') {
        decisaoOk = lower.includes('defiro') && !lower.includes('indefiro');
    } else if (casoTeste.esperado.decisaoFinal === 'indefere') {
        decisaoOk = lower.includes('indefiro');
    } else {
        decisaoOk = lower.includes('defiro') && lower.includes('indefiro');
    }

    const scores = [
        estrutura.score,
        posicionamentoOk ? 100 : 0,
        decisaoOk ? 100 : 0,
        citacoes.score
    ];

    return {
        estruturaOk: estrutura.score === 100,
        posicionamentoOk,
        decisaoOk,
        citacoesOk: citacoes.score >= 80,
        score: scores.reduce((a, b) => a + b, 0) / scores.length,
        observacoes: gerarObservacoes(estrutura, citacoes, posicionamentoOk, decisaoOk)
    };
}

function gerarObservacoes(
    estrutura: ReturnType<typeof validarEstrutura>,
    citacoes: ReturnType<typeof validarCitacoes>,
    posicionamentoOk: boolean,
    decisaoOk: boolean
): string {
    const obs: string[] = [];

    if (!estrutura.vistos) obs.push('Falta "Vistos, etc."');
    if (!estrutura.relatados) obs.push('Falta "Relatados."');
    if (!estrutura.issoPosto) obs.push('Falta "Isso posto,"');
    if (!estrutura.pri) obs.push('Falta "P.R.I."');
    if (!posicionamentoOk) obs.push('Posicionamento MP incorreto');
    if (!decisaoOk) obs.push('Decisão final incorreta');
    if (citacoes.totalCitacoes > citacoes.citacoesComFonte) {
        obs.push(`${citacoes.totalCitacoes - citacoes.citacoesComFonte} citações sem fonte`);
    }

    return obs.length === 0 ? 'Todas as validações passaram' : obs.join('; ');
}

export default {
    validarEstrutura,
    validarCitacoes,
    validarPosicionamento,
    executarValidacao,
};
