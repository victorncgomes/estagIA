/**
 * Modelos de Decisão - Prestação Pecuniária
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: prestacaoPecuniaria
 * Status: Concluído (2/2)
 * Total de modelos: 2
 */

import { Modelo } from '../../types';

export const DECISOES_PRESTACAO_PECUNIARIA: Modelo[] = [
    {
        id: 'seeu_086',
        nome: 'Prestação Pecuniária - Parcelamento (Deferimento)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'prestacaoPecuniaria',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de requerimento da Defesa para o parcelamento da prestação pecuniária imposta na sentença condenatória. O Ministério Público concordou com o pleito.

Relatados.

O pedido deve ser deferido, uma vez que o parcelamento possibilita o cumprimento da pena pecuniária de forma menos onerosa ao apenado, sem frustrar os fins da execução. Na forma do art. 45, § 1º, do Código Penal, a prestação pecuniária consiste no pagamento em dinheiro à vítima ou a entidade pública.

Isto posto, defiro o parcelamento da prestação pecuniária em XXXXX parcelas iguais e sucessivas de R$ XXXXX, devendo o pagamento ocorrer todo dia XXXXX de cada mês.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_093',
        nome: 'Prestação Pecuniária - Conversão em Privativa de Liberdade',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'prestacaoPecuniaria',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que houve a substituição por restritiva de direitos consistente em prestação pecuniária. O apenado, devidamente intimado para o pagamento, deixou transcorrer o prazo sem cumprimento ou pedido de parcelamento.

Relatados.

O art. 44, § 4º, do Código Penal estabelece que "a pena restritiva de direitos converte-se em privativa de liberdade quando ocorrer o descumprimento injustificado da restrição imposta". No caso, o descumprimento é evidente e injustificado.

Isto posto, converto a pena restritiva de direitos em privativa de liberdade e procedo à unificação das penas, fixando o regime adequado conforme o montante total.

P.R.I. Comunique-se à unidade prisional e atualize-se o atestado de pena.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_PRESTACAO_PECUNIARIA.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_PRESTACAO_PECUNIARIA.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
