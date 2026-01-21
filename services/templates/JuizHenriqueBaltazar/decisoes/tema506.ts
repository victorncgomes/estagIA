/**
 * Modelos de Decisão - Tema 506 STF (Despenalização do Porte de Cannabis)
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: tema506
 * Status: Concluído (3/3)
 * Total de modelos: 3
 */

import { Modelo } from '../../types';

export const DECISOES_TEMA506: Modelo[] = [
    {
        id: 'seeu_068',
        nome: 'Tema 506 STF - Cancelamento de Unificação / Atipicidade',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'tema506',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que uma das condenações refere-se ao art. 28 da Lei de Drogas (cannabis sativa até 40g).

Relatados.

Em 26.06.2024, o STF, ao julgar o RE n. 635.659 (Tema 506), declarou a inconstitucionalidade da natureza penal da conduta do art. 28 da Lei n. 11.343/2006 para porte de cannabis para uso pessoal, estabelecendo o critério quantitativo de 40 gramas ou seis plantas-fêmeas para presunção de usuário.

Reconheço, portanto, a atipicidade penal da conduta do apenado.

Posto isso, torno sem efeitos a decisão de unificação de penas (ou regressão anterior baseada neste fato), devendo a condenação ser extraída desta execução e devolvida ao juízo de origem para as providências administrativas/cíveis cabíveis.

P.R.I. Ciência ao Ministério Público.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_069',
        nome: 'Tema 506 STF - Manutenção da Situação (Sem reflexos na Execução)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'tema506',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O apenado foi autuado por conduta análoga ao art. 28 da Lei de Drogas, mas tal fato não gerou regressão de regime ou outros efeitos penais nesta execução.

Relatados.

Em que pese a decisão do STF no Tema 506, que declarou a inconstitucionalidade penal do porte de cannabis para uso pessoal, no caso em tela a execução não foi impactada por tal conduta.

Posto isso, mantenho o apenado na situação em que se encontra, sem prejuízo de futuras retificações se sobrevier condenação que venha a ser unificada.

P.R.I. Ciência ao Ministério Público.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_070',
        nome: 'Tema 506 STF - Cancelamento de Regressão de Regime',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'tema506',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado teve seu regime regredido para o fechado em razão de autuação por crime do art. 28 da Lei de Drogas (posse de cannabis).

Relatados.

O STF aprovou o Tema 506 de Repercussão Geral, afastando quaisquer efeitos penais para a conduta de adquirir ou portar cannabis para uso pessoal (até 40g). Assim, a conduta que motivou a regressão de regime tornou-se atípica sob o ponto de vista penal.

Posto isso, reconheço a atipicidade e torno sem efeitos a decisão de regressão de regime do evento ***, retornando o apenado ao regime anterior.

Providencie-se a baixa de eventual mandado de prisão decorrente exclusivamente deste fato.

P.R.I. Ciência ao Ministério Público.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_TEMA506.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_TEMA506.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
