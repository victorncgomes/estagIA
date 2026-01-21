/**
 * Modelos de Decisão - Outros (Diversos)
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: outros
 * Total de modelos: 11
 * 
 * Este arquivo contém modelos que não se encaixam em nenhum dos agrupadores específicos,
 * incluindo decisões genéricas, petições diversas, e modelos administrativos.
 */

import { Modelo } from '../../types';

export const DECISOES_OUTROS: Modelo[] = [
    {
        id: 'seeu_103',
        nome: 'Indeferimento falta grave pendente',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

O apenado foi identificado como possível beneficiário de progressão de regime, mas tem audiência de justificação agendada para apuração de falta grave alegadamente praticada em ***.

Relatados.

A boa conduta carcerária é requisito subjetivo para progressão de regime (LEP, art. 112 § 1º).

Aqui, porém, existe incidente de apuração de falta grave em andamento, com audiência de justificação já agendada.

Em assim sendo, dada a noticiada falta grave em apuração, indefiro provisoriamente, por 60 dias, a progressão de regime, tempo suficiente para a realização da audiência e solução do incidente.

Cientifiquem-se as partes.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_120',
        nome: 'Intimação partes',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Intime-se as partes para se manifestarem sobre ***, no prazo de *** dias.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_122',
        nome: 'Juntada de documentos',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Juntem-se os documentos de evento *** aos autos.

Dê-se vista ao MP.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_160',
        nome: 'Arquivamento provisório',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Considerando que o apenado está em local incerto e não sabido / foragido desde ***, arquivem-se provisoriamente os autos.

Quando recapturado, desarquivem-se para regular prosseguimento.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_161',
        nome: 'Desarquivamento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Considerando que o apenado foi recapturado / apresentou-se voluntariamente, desarquivem-se os autos.

Atualize-se a GEP e providencie-se o regular prosseguimento.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_164',
        nome: 'Expedição de guia',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Determino a expedição da guia de execução penal.

Após, remeta-se ao estabelecimento prisional para cumprimento.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_200',
        nome: 'Ciência partes',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cientifiquem-se as partes do r. acórdão / decisão de evento ***.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_211',
        nome: 'Cumprimento de acórdão',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Cumpra-se o r. acórdão de evento ***.

Atualize-se a GEP conforme determinado.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_265',
        nome: 'Honorários advocatícios',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de pedido de arbitramento de honorários advocatícios.

Conforme Resolução TJRN nº ***, os honorários devem ser fixados em *** URH.

Arbitro os honorários advocatícios em *** URH.

Expeça-se o respectivo termo de conclusão de serviço.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_271',
        nome: 'Vista ao MP',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Dê-se vista ao Ministério Público para manifestação sobre ***.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_280',
        nome: 'Autos conclusos',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'outros',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Autos conclusos para decisão.

Aguarde-se em conclusão a juntada de ***.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_OUTROS.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_OUTROS.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
