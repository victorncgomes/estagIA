/**
 * Modelos de Decisão - Prescrição e Extinção
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: prescricao/extincaoPrescricao
 * Total de modelos: 2
 */

import { Modelo } from '../../types';

export const DECISOES_PRESCRICAO: Modelo[] = [
    {
        id: 'seeu_063',
        nome: 'Prescrição indefere (reincidência)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'extincaoPrescricao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Tratam os autos de processo de execução de *** anos de reclusão pela prática de delito capitulado no art. ***** do CP, na data de ***.

A sentença condenatória data de ***, tendo transitado em julgado para a acusação em ***, nunca tendo sido cumprida a pena por não ter sido preso o apenado.

*Requereu o apenado o reconhecimento da prescrição da pretensão executória.

*Acrescento ao relatório que o apenado é reincidente.

Relatados.

Prescrição penal é a perda do poder-dever de punir do Estado pelo não exercício da pretensão punitiva ou da pretensão executória durante certo lapso de tempo.

No caso, o parâmetro de prescrição é o previsto no art. 109, inciso **, do CP, ou seja, *** anos. Entretanto, aqui o referido prazo deve ser aumentado em 1/3 em virtude da reincidência do apenado (art. 110, caput, do CP), totalizando um prazo de ** anos, ainda não ultrapassado.

Conforme STJ: "o reconhecimento da prescrição da pretensão executória impossibilita o Estado de executar a pena aplicada, sem, contudo, rescindir a sentença penal condenatória, razão pela qual seus efeitos secundários - entre eles, a reincidência - permanecem inalterados" (EDcl no AgRg no AREsp 726.325/DF).

Registro que "a reincidência, como causa de interrupção da prescrição da pretensão executória, é contada a partir da prática do novo delito, e não do trânsito em julgado de eventual sentença condenatória" (RHC 68.812/RJ, STJ).

Isto posto, posto não ultrapassado o prazo prescricional, indefiro o pedido de reconhecimento da prescrição.

P.R.I. Aguarde-se o cumprimento do mandado de prisão.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_289',
        nome: 'Prescrição deferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'extincaoPrescricao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Tratam os autos de processo de execução de *** de reclusão pela prática de delito capitulado no art. ***** do CP.

A sentença condenatória data de ***, tendo transitado em julgado para a acusação em ***.

Requereu o apenado/MP o reconhecimento da prescrição da pretensão executória.

Relatados.

Prescrição penal é a perda do poder-dever de punir do Estado pelo não exercício da pretensão punitiva ou da pretensão executória durante certo lapso de tempo.

No caso, o parâmetro de prescrição é o previsto no art. 109 do CP, ou seja, *** anos.

Verifico que desde o trânsito em julgado para a acusação transcorreram mais de *** anos sem que houvesse inicio do cumprimento da pena ou qualquer causa interruptiva.

Isto posto, ultrapassado o prazo prescricional, declaro extinta a punibilidade pela prescrição da pretensão executória.

Arquivem-se os autos.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_PRESCRICAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_PRESCRICAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
