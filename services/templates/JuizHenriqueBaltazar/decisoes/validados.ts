/**
 * Modelos de Decisão - Validados pelo Usuário
 * Decisões geradas pela IA com nível 4-5 e validadas (thumbs up)
 * 
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Este arquivo é alimentado automaticamente quando o usuário
 * valida uma decisão gerada com alta qualidade.
 * 
 * @version 1.0.0
 */

import { Modelo, Agrupador, TipoDocumento, Magistrado } from '../../types';

export interface DecisaoValidada extends Modelo {
    nivelQualidade: 4 | 5;
    dataValidacao: string;
    validadoPor: string;
    promptOriginal: string;
    modeloIA: string;
}

// Array de decisões validadas pelo usuário
export const DECISOES_VALIDADAS: DecisaoValidada[] = [
    // Decisões serão adicionadas automaticamente aqui quando validadas
    // Exemplo de estrutura:
    // {
    //     id: 'validado_20260120_001',
    //     nome: 'Progressão de Regime - Primário (Validada)',
    //     tipoDocumento: 'decisao',
    //     magistrado: 'henriqueBaltazar',
    //     agrupador: 'progressao',
    //     fonteOriginal: 'VALIDADO',
    //     dataExtracao: '2026-01-20',
    //     conteudo: '...',
    //     nivelQualidade: 5,
    //     dataValidacao: '2026-01-20T20:43:00',
    //     validadoPor: 'usuario',
    //     promptOriginal: 'Gerar decisão de progressão...',
    //     modeloIA: 'claude-sonnet-4-20250514',
    // },
];

/**
 * Adiciona uma decisão validada ao banco
 */
export function adicionarDecisaoValidada(decisao: DecisaoValidada): void {
    DECISOES_VALIDADAS.push(decisao);
}

/**
 * Busca decisão validada por ID
 */
export function buscarValidadaPorId(id: string): DecisaoValidada | undefined {
    return DECISOES_VALIDADAS.find((m) => m.id === id);
}

/**
 * Busca decisões validadas por termo
 */
export function buscarValidadasPorTermo(termo: string): DecisaoValidada[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_VALIDADAS.filter(
        (m) =>
            m.nome.toLowerCase().includes(termoLower) ||
            m.conteudo.toLowerCase().includes(termoLower)
    );
}

/**
 * Busca decisões validadas por agrupador
 */
export function buscarValidadasPorAgrupador(agrupador: Agrupador): DecisaoValidada[] {
    return DECISOES_VALIDADAS.filter((m) => m.agrupador === agrupador);
}

/**
 * Estatísticas das decisões validadas
 */
export function getEstatisticasValidadas(): {
    total: number;
    porAgrupador: Record<string, number>;
    porNivel: Record<number, number>;
    porModelo: Record<string, number>;
} {
    const porAgrupador: Record<string, number> = {};
    const porNivel: Record<number, number> = { 4: 0, 5: 0 };
    const porModelo: Record<string, number> = {};

    for (const d of DECISOES_VALIDADAS) {
        porAgrupador[d.agrupador] = (porAgrupador[d.agrupador] || 0) + 1;
        porNivel[d.nivelQualidade] = (porNivel[d.nivelQualidade] || 0) + 1;
        porModelo[d.modeloIA] = (porModelo[d.modeloIA] || 0) + 1;
    }

    return {
        total: DECISOES_VALIDADAS.length,
        porAgrupador,
        porNivel,
        porModelo,
    };
}

/**
 * Gera ID único para decisão validada
 */
export function gerarIdValidado(): string {
    const data = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const seq = String(DECISOES_VALIDADAS.length + 1).padStart(3, '0');
    return `validado_${data}_${seq}`;
}
