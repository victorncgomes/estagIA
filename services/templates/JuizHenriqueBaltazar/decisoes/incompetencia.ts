/**
 * Modelos de Decisão - Incompetência
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: incompetencia
 * Status: Concluído (11/11)
 * Total de modelos: 11
 */

import { Modelo } from '../../types';

export const DECISOES_INCOMPETENCIA: Modelo[] = [
    {
        id: 'seeu_034',
        nome: 'Incompetência - Cobrança de valores (Fazenda Pública)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena privativa de liberdade em que a Defesa cobra o pagamento de pecúnia ao apenado por trabalho realizado enquanto cumpria pena.

Relatados.

De início registro que não se trata de pedido de liberação de pecúnia mas de cobrança de valores. Tal pedido tem caráter de ação autônoma, cujo processamento não pode se dar nos mesmos autos da execução da pena. 

As varas regionais de execução penal não detêm a competência para tal análise, a qual deve ser buscada junto a uma das varas da Fazenda Pública.

Diante do exposto, nego seguimento ao pedido.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_082',
        nome: 'Incompetência - Recolhimento em outra jurisdição',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho
$dadosProcesso
 
Vistos etc.

*Trata-se de execução da pena em que se verificou que a apenada está recolhida no Pavilhão Feminino do Complexo Penal Dr. João Chaves.
*Trata-se de execução da pena em que se verificou que o apenado está recolhido na Cadeia Pública de Ceará Mirim / Penitenciária Estadual de Parnamirim.

Relatados.

Competente para a execução penal é o juízo do local onde recolhido o apenado. No caso, a unidade prisional informada pertence à competência da 2ª Vara Regional de Execução Penal.

Isto posto, tendo por incompetente este juízo para continuar a presidir processo de execução penal de pessoa que está recolhida em outro município fora desta competência, determino a remessa dos autos para a 2ª Vara Regional de Execução Penal.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_104',
        nome: 'Incompetência - Transferência para 2ª Vara Regional',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho
 
$dadosProcesso
 
Vistos etc.

O apenado(a) encontra-se recolhido em unidade prisional cuja execução penal é da competência da 2ª Vara Regional de Execução Penal (Natal / Ceará-Mirim / Parnamirim).

Relatados.

Competente para a execução penal é o juízo do local onde recolhido o apenado. No caso, a unidade informada não pertence à competência territorial desta vara.

Isto posto, tendo por incompetente este juízo, determino a remessa dos autos para a 2ª Vara Regional de Execução Penal.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_171',
        nome: 'Incompetência - Apenado/Inimputável solto',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

Autos nº. $autos.getNumeroUnicoFormatado()

$dadosProcesso

Vistos etc.    

Trata-se de execução de pena / medida de segurança em que se informou que o apenado encontra-se em liberdade.

Relatados.

Conforme Resolução nº 113 do CNJ, a guia de recolhimento será expedida após o cumprimento do mandado de prisão. A competência deste juízo para execução de penas em regime fechado ou semiaberto (ou internação) fixa-se quando o apenado se encontra em unidade prisional da Comarca de Natal.

No caso, o apenado está em liberdade, cabendo ao juízo de conhecimento expedir o mandado e, após cumprimento, remeter a guia para instauração do processo de execução.

Isto posto, tendo por incompetente este juízo, determino a devolução dos autos ao juízo de origem.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_182',
        nome: 'Incompetência - Monitorado residente em outra Comarca',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução da pena em regime semiaberto, com apenado monitorado eletronicamente e que reside na Comarca de **, cujo juízo concordou com a remessa dos autos.

Relatados.

Competente para a execução de pena em regime semiaberto, com apenado monitorado, é o juízo do local onde ele reside, se houve a devida concordância com a remessa dos autos. É o caso.

Isto posto, tenho por incompetente este juízo e determino a remessa dos autos para a Comarca de **.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_195',
        nome: 'Incompetência - Medida de segurança restritiva',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança restritiva, em que o inimputável reside no Município de **, Comarca de ***. 

Relatados.

Competente para a execução de medida de segurança restritiva é o juízo do local onde reside o inimputável. No caso, a Comarca de ***.

Isto posto, tendo por incompetente este juízo, determino a remessa dos autos para a Comarca de ***.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_203',
        nome: 'Incompetência - Remessa por unificação (17ª Vara)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Verificou-se que o apenado responde a outro PEC na 17ª Vara Criminal, tendo sido solicitada a remessa destes autos para unificação.

Relatados.

Existindo outro PEC em andamento em juízo diverso e com regime mais gravoso, impõe-se a remessa dos autos para unificação de penas.

Isto posto, tendo por incompetente este juízo, determino sua remessa à 17ª Vara Criminal de Natal.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_207',
        nome: 'Incompetência - Monitorado (1ª Vara Regional)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Trata-se de execução de pena em regime semiaberto em que o apenado está monitorado eletronicamente e residindo em comarca integrante da 1ª Vara Regional.

Relatados.

Competente para o acompanhamento do regime semiaberto harmonizado é o juízo do local onde reside o apenado. No caso, município integrante da área territorial da 1ª Vara Regional de Execução Penal.

Isto posto, tendo por incompetente este juízo, determino a remessa dos autos para a 1ª Vara Regional de Execução Penal.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_209',
        nome: 'Incompetência - Visita de menores',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Requerimento para autorização de visita de adolescente ao apenado recolhido em unidade prisional.

Relatados.

Conforme jurisprudência do TJRN, a autorização para adolescente entrar em presídio é do juízo competente para os atos do art. 149 do ECA (Infância e Juventude), que possui equipe multidisciplinar para análise do pedido sob a ótica da proteção integral à criança/adolescente.

Isto posto, tendo por incompetente este juízo, nego seguimento ao pleito, que deverá ser requerido perante o juízo da infância e juventude.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_216',
        nome: 'Incompetência - Regime Aberto (Residência em outra Comarca)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução da pena em regime aberto, onde verificou-se que o apenado reside na Comarca de **.

Relatados.

Competente para a execução penal no regime aberto é o juízo do local onde reside o apenado. No caso, está o apenado reside na Comarca de **.

Isto posto, tendo por incompetente este juízo, determino a remessa dos autos para a Comarca de **.

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_257',
        nome: 'Incompetência - Medida de segurança ambulatorial',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'incompetencia',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

O inimputável reside em município cuja competência para execução é de outro juízo (2ª Vara Regional ou meio aberto da Comarca).

Relatados.

Competente para a execução de medida de segurança ambulatorial é o juízo do local onde reside o apenado.

Isto posto, tendo por incompetente este juízo, determino a remessa dos autos para o juízo competente (2ª Vara Regional ou Comarca de **).

P.R.I. Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_INCOMPETENCIA.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_INCOMPETENCIA.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
