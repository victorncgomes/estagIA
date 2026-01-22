/**
 * estagIA - Extrator de Posicionamento das Partes
 * 
 * Extrai automaticamente se o MP/Defesa opinou por DEFERIMENTO ou INDEFERIMENTO
 * para evitar alucinação da IA sobre a posição das partes.
 * 
 * @version 1.0.0
 */

export interface Posicionamento {
    fonte: 'mp' | 'defesa';
    posicao: 'deferimento' | 'indeferimento' | 'parcial' | 'indefinido';
    confianca: 'alta' | 'media' | 'baixa';
    trecho: string; // Trecho que fundamenta a extração
}

// Padrões de INDEFERIMENTO (alta prioridade)
const PADROES_INDEFERIMENTO = [
    /opina\s+pelo?\s+indeferimento/i,
    /manifesta[- ]se\s+pelo?\s+indeferimento/i,
    /parecer\s+(é\s+)?pelo?\s+indeferimento/i,
    /pugna\s+pelo?\s+indeferimento/i,
    /requer[a-z]?\s+o?\s*indeferimento/i,
    /seja\s+indeferid[oa]/i,
    /improcedente\s+o\s+pedido/i,
    /não\s+faz\s+jus/i,
    /não\s+merece\s+acolhimento/i,
    /indefira[- ]se/i,
    /julgar\s+improcedente/i,
];

// Padrões de DEFERIMENTO
const PADROES_DEFERIMENTO = [
    /opina\s+pelo?\s+deferimento/i,
    /manifesta[- ]se\s+pelo?\s+deferimento/i,
    /parecer\s+(é\s+)?pelo?\s+deferimento/i,
    /pugna\s+pelo?\s+deferimento/i,
    /requer[a-z]?\s+o?\s*deferimento/i,
    /seja\s+deferid[oa]/i,
    /procedente\s+o\s+pedido/i,
    /faz\s+jus/i,
    /merece\s+acolhimento/i,
    /defira[- ]se/i,
    /julgar\s+procedente/i,
    /favorável\s+ao\s+pedido/i,
    /concord[ao]\s+com\s+o\s+pedido/i,
];

// Padrões de DEFERIMENTO PARCIAL
const PADROES_PARCIAL = [
    /parcialmente\s+procedente/i,
    /deferimento\s+parcial/i,
    /acolhimento\s+parcial/i,
    /em\s+parte,?\s+procedente/i,
];

/**
 * Extrai o posicionamento de uma manifestação
 */
export function extrairPosicionamento(texto: string, fonte: 'mp' | 'defesa'): Posicionamento {
    if (!texto || texto.trim().length < 20) {
        return {
            fonte,
            posicao: 'indefinido',
            confianca: 'baixa',
            trecho: '',
        };
    }

    const textoNormalizado = texto.toLowerCase();

    // PRIMEIRO: Verificar parcial (mais específico)
    for (const padrao of PADROES_PARCIAL) {
        const match = textoNormalizado.match(padrao);
        if (match) {
            const inicio = Math.max(0, match.index! - 50);
            const fim = Math.min(texto.length, match.index! + match[0].length + 50);
            return {
                fonte,
                posicao: 'parcial',
                confianca: 'alta',
                trecho: texto.slice(inicio, fim).trim(),
            };
        }
    }

    // SEGUNDO: Verificar INDEFERIMENTO (prioridade sobre deferimento)
    for (const padrao of PADROES_INDEFERIMENTO) {
        const match = textoNormalizado.match(padrao);
        if (match) {
            const inicio = Math.max(0, match.index! - 50);
            const fim = Math.min(texto.length, match.index! + match[0].length + 50);
            return {
                fonte,
                posicao: 'indeferimento',
                confianca: 'alta',
                trecho: texto.slice(inicio, fim).trim(),
            };
        }
    }

    // TERCEIRO: Verificar deferimento
    for (const padrao of PADROES_DEFERIMENTO) {
        const match = textoNormalizado.match(padrao);
        if (match) {
            const inicio = Math.max(0, match.index! - 50);
            const fim = Math.min(texto.length, match.index! + match[0].length + 50);
            return {
                fonte,
                posicao: 'deferimento',
                confianca: 'alta',
                trecho: texto.slice(inicio, fim).trim(),
            };
        }
    }

    // Não encontrou padrão claro
    return {
        fonte,
        posicao: 'indefinido',
        confianca: 'baixa',
        trecho: '',
    };
}

/**
 * Extrai posicionamentos de todos os inputs
 */
export function extrairTodosPosicionamentos(inputs: {
    mp?: string;
    defesa?: string;
}): Posicionamento[] {
    const posicionamentos: Posicionamento[] = [];

    if (inputs.mp) {
        posicionamentos.push(extrairPosicionamento(inputs.mp, 'mp'));
    }

    if (inputs.defesa) {
        posicionamentos.push(extrairPosicionamento(inputs.defesa, 'defesa'));
    }

    return posicionamentos;
}

/**
 * Formata os posicionamentos para inclusão no prompt com ÊNFASE MÁXIMA
 */
export function formatarPosicionamentosParaPrompt(posicionamentos: Posicionamento[]): string {
    if (posicionamentos.length === 0) return '';

    const linhas: string[] = [];

    linhas.push(`## ⚠️ POSICIONAMENTO DAS PARTES - LEIA COM ATENÇÃO MÁXIMA ⚠️`);
    linhas.push('');

    for (const pos of posicionamentos) {
        const fonteLabel = pos.fonte === 'mp' ? 'MINISTÉRIO PÚBLICO' : 'DEFESA';
        const posicaoLabel = {
            'deferimento': '✅ OPINOU PELO **DEFERIMENTO**',
            'indeferimento': '❌ OPINOU PELO **INDEFERIMENTO**',
            'parcial': '⚠️ OPINOU PELO **DEFERIMENTO PARCIAL**',
            'indefinido': '❓ Posição não identificada claramente',
        }[pos.posicao];

        linhas.push(`### ${fonteLabel}: ${posicaoLabel}`);
        if (pos.trecho) {
            linhas.push(`> Trecho: "${pos.trecho}"`);
        }
        linhas.push('');
    }

    // INSTRUÇÕES CRÍTICAS COM REPETIÇÃO
    linhas.push('---');
    linhas.push('### 🚨 REGRA ABSOLUTA - ANTI-ALUCINAÇÃO 🚨');
    linhas.push('');
    linhas.push('**VOCÊ DEVE OBRIGATORIAMENTE:**');
    linhas.push('1. Relatar o posicionamento EXATAMENTE como indicado acima');
    linhas.push('2. Se MP opinou por INDEFERIMENTO → escrever "O Ministério Público opinou pelo INDEFERIMENTO"');
    linhas.push('3. Se MP opinou por DEFERIMENTO → escrever "O Ministério Público opinou pelo DEFERIMENTO"');
    linhas.push('');
    linhas.push('**❌ PROIBIDO INVENTAR OU INVERTER O POSICIONAMENTO ❌**');
    linhas.push('');

    return linhas.join('\n');
}

export default {
    extrairPosicionamento,
    extrairTodosPosicionamentos,
    formatarPosicionamentosParaPrompt,
};
