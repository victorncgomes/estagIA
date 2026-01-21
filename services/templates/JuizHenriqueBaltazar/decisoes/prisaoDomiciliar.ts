/**
 * Modelos de Decisão - Prisão Domiciliar
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: prisaoDomiciliar
 * Status: Concluído (3/3)
 * Total de modelos: 3
 */

import { Modelo } from '../../types';

export const DECISOES_PRISAO_DOMICILIAR: Modelo[] = [
    {
        id: 'seeu_134',
        nome: 'Prisão domiciliar indeferimento',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'prisaoDomiciliar',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena de *** de reclusão por delito capitulado no art. *** do CP, atualmente em regime semiaberto.

A Defesa/apenado peticionou requerendo prisão domiciliar.

O MP opinou pelo indeferimento.

Relatados.

O art. 117 da LEP somente autoriza a concessão de prisão domiciliar para condenado em regime aberto, nas hipóteses expressamente previstas: (a) condenado maior de 70 anos; (b) condenado acometido de doença grave; (c) condenada com filho menor ou deficiente físico ou mental; (d) condenada gestante.

É cediço que a jurisprudência tem admitido a concessão de prisão domiciliar para condenados em regime fechado, mas somente em situações excepcionalíssimas.

Não é o caso, pois o apenado não demonstrou situação excepcional.

Indefiro o pedido de prisão domiciliar.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_191',
        nome: 'Prisão domiciliar deferimento (doença grave)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'prisaoDomiciliar',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que o apenado peticionou requerendo prisão domiciliar por motivo de doença grave.

Juntou-se laudo médico indicando ***.

O MP opinou pelo deferimento.

Relatados.

Conforme art. 117, II, da LEP: "Somente se admitirá o recolhimento do beneficiário de regime aberto em residência particular quando se tratar de: (...) II - condenado acometido de doença grave."

O laudo médico indica que o apenado é portador de ***, necessitando de tratamento contínuo não disponível na unidade prisional.

Conforme jurisprudência do STJ e STF, a prisão domiciliar pode ser concedida em caso de doença grave quando comprovada a impossibilidade de tratamento no estabelecimento prisional.

Defiro a prisão domiciliar.

O apenado deverá comprovar tratamento médico regular.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_193',
        nome: 'Prisão domiciliar deferimento (gestante/mãe)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'prisaoDomiciliar',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de pena em que a apenada peticionou requerendo prisão domiciliar por ser gestante/mãe de criança menor de 12 anos.

Juntou-se certidão de nascimento do(s) filho(s).

O MP opinou pelo deferimento.

Relatados.

Conforme art. 117, III e IV, da LEP: "Somente se admitirá o recolhimento do beneficiário de regime aberto em residência particular quando se tratar de: (...) III - condenada com filho menor ou deficiente físico ou mental; IV - condenada gestante."

Conforme STF (HC 143.641): "É cabível a substituição da prisão preventiva pela domiciliar quando o agente for: I – mulher gestante; II – mulher com filho de até 12 anos de idade incompletos."

A apenada é mãe de ***, criança de *** anos, demonstrando ser a responsável pelos cuidados do menor.

Defiro a prisão domiciliar.

A apenada deverá permanecer em sua residência, podendo sair apenas para consultas médicas e matrícula escolar dos filhos.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_PRISAO_DOMICILIAR.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_PRISAO_DOMICILIAR.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
