/**
 * Modelos de Decisão - Mutirão
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: mutirao
 * Status: Concluído (1/1)
 * Total de modelos: 1
 */

import { Modelo } from '../../types';

export const DECISOES_MUTIRAO: Modelo[] = [
    {
        id: 'seeu_072',
        nome: 'Mutirão Processual Penal - Mulheres (Indeferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'mutirao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Estes autos me vieram conclusos em cumprimento à Portaria Conjunta nº 33/2024 (Mutirão Processual Penal), visando reavaliar de ofício a concessão de indulto a mulheres com filhos menores ou com deficiência, condenadas por crimes sem violência ou grave ameaça.

Relatados.

Verifica-se dos autos que a apenada foi condenada por crime praticado com violência ou grave ameaça à pessoa. Tal circunstância é impeditiva para a concessão do benefício pleiteado no âmbito do presente mutirão, conforme os critérios normativos estabelecidos.

Em assim sendo, mantenho a apenada na situação em que se encontra.

P.R.I. Ciência ao Ministério Público.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_MUTIRAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_MUTIRAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
