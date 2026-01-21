/**
 * Modelos de Decisão - Embargos de Declaração
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: embargos
 * Status: Concluído (1/1)
 * Total de modelos: 1
 */

import { Modelo } from '../../types';

export const DECISOES_EMBARGOS: Modelo[] = [
    {
        id: 'seeu_061',
        nome: 'Embargos de Declaração (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'embargos',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado interpôs embargos declaratórios da decisão do evento **, alegando **. Em consequência pediu **.

Relatados.

Preenchidos os requisitos de admissibilidade, conheço dos presentes embargos de declaração, que, porém, não merecem acolhimento.

Com efeito, inexistiu obscuridade, ambiguidade, contradição ou omissão na decisão combatida, pois foram devidamente apresentadas as razões do convencimento, nos termos da orientação dos Tribunais Superiores.

Constata-se que o julgado foi fundamentado nos moldes do princípio do livre convencimento motivado. Destaco o nítido propósito de rediscussão da matéria. Os embargos de declaração não se prestam à rediscussão, cingindo-se à elucidação de obscuridade, omissão e contradição.

Portanto, constando que a decisão embargada encontra-se devidamente fundamentada, rejeito os embargos de declaração.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_EMBARGOS.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_EMBARGOS.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
