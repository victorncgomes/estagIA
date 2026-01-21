/**
 * Modelos de Decisão - Acórdão (Cumprimento)
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: acordao
 * Status: Concluído (3/3)
 * Total de modelos: 3
 */

import { Modelo } from '../../types';

export const DECISOES_ACORDAO: Modelo[] = [
    {
        id: 'seeu_010',
        nome: 'Cumprimento de Acórdão Redutor',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'acordao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos, etc.

Vieram-me conclusos os autos em virtude da sobrevinda de acórdão redutor transitado em julgado referente ao processo nº xxxxxxx, reduzindo a reprimenda imposta para o patamar de xxxxxxxx (evento xx).

Relatados.

Com a notícia da sobrevinda de acórdão redutor transitado em julgado, deve ser retificada a guia de recolhimento, conforme dispõe o §2º do art. 106 da Lei nº 7.210/84. No caso dos autos, a condenação foi reduzida conforme informado.

Isso posto, determino a retificação da GEP para fazer constar a pena de xxxxxxxx, referente à condenação vinculada ao processo nº xxxxxxx.

P.R.I. Atualize-se o atestado de penas.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_260',
        nome: 'Acórdão - Indeferimento (Ausência de Trânsito em Julgado)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'acordao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de requerimento da Defensoria Pública para retificação do atestado de pena conforme Acórdão em Agravo, sob o argumento de que recursos aos tribunais superiores não possuem efeito suspensivo. Contudo, certificou-se que o referido acórdão ainda não transitou em julgado (Recurso Especial interposto).

Relatados.

De logo, tenho que, pendente de julgamento recurso aos tribunais superiores, não há que se falar em trânsito em julgado para justificar a atualização do Atestado de penas no SEEU, sob pena de instabilidade na execução caso a decisão seja reformada.

Nesse sentido: "Acórdão não transitado em julgado... Recurso Especial protocolado... Constrangimento ilegal não evidenciado" (HC nº 0814179-05.2022.8.20.0000, TJRN).

Isto posto, indefiro o pedido. Verificada a ocorrência do trânsito em julgado do referido Acórdão, voltem-me conclusos.

P.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_263',
        nome: 'Cumprimento de Acórdão - Frações Individualizadas',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'acordao',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de acórdão de agravo em execução que determinou a fixação de patamares individualizados por delito às condenações impostas ao apenado.

Relatados.

Tratando-se de condenações anteriores a janeiro de 2020 e não sendo o apenado reincidente específico em crimes hediondos, devem ser aplicados os patamares previstos na redação anterior da LEP / Lei de Crimes Hediondos.

Isto posto, mando fixar em 2/5 da pena imposta pelo crime hediondo e 1/6 para a fixada para o crime comum como requisito objetivo para progressão de regime.

P.R.I. Atualize-se o sistema.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_ACORDAO.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_ACORDAO.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
