/**
 * Modelos de Decisão - Falta Média
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: faltaMedia
 * Total de modelos: 3
 */

import { Modelo } from '../../types';

export const DECISOES_FALTA_MEDIA: Modelo[] = [
    {
        id: 'seeu_008',
        nome: 'Falta média retorno cela',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'faltaMedia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado foi punido disciplinarmente por falta média consistente em retorno tardio à cela.

Ouvido, o apenado alegou que ***.

O MP opinou pela homologação da falta média.

Relatados.

Conforme art. 39 da LEP, é dever do condenado a obediência às normas regimentais do estabelecimento.

O Regulamento Disciplinar Penitenciário do RN prevê como falta média o retorno tardio à cela.

Isto posto, homologo a falta média, com suspensão de autorizações de saída externa desvigiada por 10 dias.

Atualize-se a GEP para fins de comportamento.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_085',
        nome: 'Falta média violação monitoramento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'faltaMedia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em regime semiaberto harmonizado em que a SEAP/CEME informou violações às regras de monitoramento eletrônico.

Ouvido em audiência, o apenado alegou que ***.

O MP opinou pela homologação da falta média.

Relatados.

As violações verificadas não são de natureza grave, pois:
- O apenado retornou voluntariamente ao cumprimento regular;
- As violações foram de curta duração;
- Não houve rompimento ou dano ao equipamento.

Conforme art. 57 da LEP, o juiz pode aplicar punição disciplinar suficiente à falta praticada.

Isto posto, homologo como falta média o conjunto de transgressões, suspendendo as autorizações de saídas externas desvigiadas por *** dias.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_165',
        nome: 'Falta média descumprimento horário',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'faltaMedia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado foi punido disciplinarmente por falta média consistente em descumprimento de horário.

O MP opinou pela homologação.

Relatados.

O Regulamento Disciplinar Penitenciário do RN, art. 74, prevê como falta média o descumprimento de horários estabelecidos.

A referida falta não importa em regressão de regime, porém tem consequências no tocante ao registro de comportamento.

Isto posto, homologo a falta média, com devida anotação no prontuário para fins de comportamento.

Atualize-se a GEP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_FALTA_MEDIA.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_FALTA_MEDIA.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
