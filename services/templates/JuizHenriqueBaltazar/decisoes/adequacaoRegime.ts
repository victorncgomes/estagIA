/**
 * Modelos de Decisão - Adequação de Regime
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: adequacaoRegime
 * Status: Concluído (1/1)
 * Total de modelos: 1
 */

import { Modelo } from '../../types';

export const DECISOES_ADEQUACAO_REGIME: Modelo[] = [
    {
        id: 'seeu_071',
        nome: 'Adequação de Regime - Semiaberto (Periculosidade / Liderança)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'adequacaoRegime',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena no regime semiaberto em que o Ministério Público aduz a incompatibilidade de cumprimento por monitoramento eletrônico, face ao risco à sociedade. O Plano Individualizador da Pena classifica o apenado como de alta periculosidade e integrante de posto de liderança em facção criminosa.

Relatados.

Nos termos do art. 37 da LEP, a prestação de trabalho externo depende de "aptidão, disciplina e responsabilidade". O STJ (AgRg no RHC n. 155.097/RJ) orienta que a progressão para o semiaberto não assegura o direito automático ao trabalho extramuros, devendo ser analisada a compatibilidade com os fins da pena.

No caso, a periculosidade acentuada e a liderança em facção criminosa inviabilizam a concessão de saída desvigiada imediata.

Isto posto, nego ao apenado a autorização para saídas desvigiadas permanentes e trabalho externo desvigiado pelo prazo de seis meses, visando a reanálise de seu comportamento sob vigilância direta.

P.R.I. Voltem-me após o decurso do prazo.

$juizo.getCidade(), $data.getDataPorExtenso().
 
Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_ADEQUACAO_REGIME.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_ADEQUACAO_REGIME.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
