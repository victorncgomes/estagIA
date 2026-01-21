/**
 * Modelos de Decisão - Medida de Segurança
 * Magistrado: Dr. Henrique Baltazar Vilar dos Santos
 * 
 * Agrupador: medidaSeguranca
 * Total de modelos: 8
 */

import { Modelo } from '../../types';

export const DECISOES_MEDIDA_SEGURANCA: Modelo[] = [
    {
        id: 'seeu_057',
        nome: 'MS conversão ambulatorial (antimanicomial)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'medidaSeguranca',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança na forma detentiva em que o inimputável encontra-se custodiado na Penitenciária Estadual desde *** e regulado para transferência para leito psiquiátrico da rede SUS desde ***.

Relatados.

O art. 13, § 1º, da Resolução nº 487/2023 do CNJ, que instituiu a política antimanicomial, determina que nenhuma pessoa em cumprimento de medida de segurança na forma detentiva será mantida em unidade prisional ou hospital de custódia.

A situação configura-se como irregular, posto que foi regulado para leito psiquiátrico e até o momento não foi transferido.

Portanto, mesmo entendendo que pode ele representar considerável perigo para a sociedade, não há meios para mantê-lo na unidade prisional, já que o Estado Administração não cria as condições necessárias para tratamento destas pessoas.

Diante do exposto, em atenção ao que estabeleceu a Resolução do CNJ de nº 487/2023, art. 13, § 1º, converto a medida de segurança detentiva em medida de segurança ambulatorial, devendo o inimputável ser imediatamente posto em liberdade.

P.I. Remetam-se os autos ao presídio para imediata liberação do inimputável.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_062',
        nome: 'MS conflito de competência',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'medidaSeguranca',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de cumprimento de medida de segurança restritiva (ambulatorial) em que o Juízo de Direito da *** declinou a competência para esta 1ª Vara Regional de Execução penal.

Relatados.

A melhor interpretação para a definição da competência para acompanhamento das medidas de segurança na forma restritiva (ambulatorial) não é aquela dada pelo juízo de origem, até porque não possibilita o cumprimento da política antimanicomial estabelecida pelo CNJ (Resolução nº 487/2023).

As varas regionais de execução penal foram criadas para acompanhar as execuções penais em regime fechado e semiaberto. A medida de segurança detentiva equivale ao regime fechado, enquanto a modalidade restritiva ao regime aberto.

O acompanhamento das medidas de segurança restritivas pelo juízo local permite proximidade com os CAPS dos municípios e um acompanhamento mais regular.

Em assim sendo, decido representar ao Exmº Desembargador Presidente do TJRN sobre o conflito de competência.

Cumpra-se.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_162',
        nome: 'MS desinternação (prazo máximo)',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'medidaSeguranca',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança em que o internado cumpre *** anos de internação.

O MP opinou pela desinternação considerando o prazo máximo de internação.

Relatados.

Conforme STF (HC 84.219): "a medida de segurança, embora tenha prazo mínimo de 1 a 3 anos, não tem prazo máximo fixado em lei, porém não pode ultrapassar o limite de 30 anos previsto no art. 75 do CP."

No caso, o internado já cumpriu *** anos de internação, atingindo o prazo máximo legal.

Defiro a desinternação do internado.

Comunique-se ao CAPS para acompanhamento ambulatorial.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_186',
        nome: 'MS transferência para CAPS',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'medidaSeguranca',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança em que se pugna pela transferência do internado para acompanhamento junto ao CAPS.

Relatados.

Conforme Resolução CNJ nº 487/2023, a política antimanicomial deve ser observada no tratamento das pessoas em medida de segurança.

O art. 4º da Resolução estabelece a preferência pelo tratamento em liberdade, com acompanhamento pela rede de saúde mental.

No caso, o laudo psiquiátrico indica que o internado pode ser acompanhado ambulatorialmente.

Defiro a transferência do internado para acompanhamento junto ao CAPS de ***.

Expeça-se o alvará de soltura clausulado.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_199',
        nome: 'MS prorrogação internação',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'medidaSeguranca',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança em que se verifica escoado o prazo mínimo de internação.

O laudo psiquiátrico indica que o internado ainda não está apto para retornar ao convívio social.

O MP opinou pela prorrogação.

Relatados.

Conforme art. 97, § 1º, do CP, a internação deve perdurar enquanto não for averiguada a cessação de periculosidade.

O laudo psiquiátrico indica que o internado ainda apresenta risco para si e para terceiros.

Prorrogo a internação por mais 1 ano, determinando nova avaliação psiquiátrica ao final do período.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_201',
        nome: 'MS extinção por prazo máximo',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'medidaSeguranca',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança em que o internado cumpre *** anos de internação.

O MP opinou pela extinção da medida de segurança.

Relatados.

Conforme STF e STJ, a medida de segurança não pode ultrapassar o prazo máximo de 30 anos previsto no art. 75 do CP (redação anterior) ou o máximo da pena cominada ao delito, o que for menor.

No caso, o internado já atingiu o prazo máximo.

Declaro extinta a medida de segurança.

Comunique-se ao CAPS para acompanhamento ambulatorial.

Expeça-se alvará de soltura.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_204',
        nome: 'MS conversão detentiva para restritiva',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'medidaSeguranca',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança detentiva em que a equipe técnica recomenda a conversão para medida restritiva (ambulatorial).

O MP opinou favoravelmente.

Relatados.

O laudo psiquiátrico indica melhora significativa no quadro clínico do internado, sendo possível o tratamento ambulatorial.

A Resolução CNJ nº 487/2023 preconiza a preferência pelo tratamento em liberdade.

Converto a medida de segurança detentiva em restritiva (ambulatorial).

O internado deverá comparecer mensalmente ao CAPS para acompanhamento.

Expeça-se alvará de soltura clausulado.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
    {
        id: 'seeu_210',
        nome: 'MS manutenção internação',
        tipoDocumento: 'decisao',
        magistrado: 'henriqueBaltazar',
        agrupador: 'medidaSeguranca',
        fonteOriginal: 'SEEU',
        dataExtracao: '2026-01-20',
        conteudo: `$cabecalho

$dadosProcesso

Vistos etc.

Trata-se de execução de medida de segurança em que a Defesa pugnou pela desinternação.

Juntou-se laudo psiquiátrico indicando que o internado ainda apresenta risco.

O MP opinou pela manutenção da internação.

Relatados.

Conforme art. 97, § 1º, do CP, a internação deve perdurar enquanto não for averiguada a cessação de periculosidade.

O laudo psiquiátrico indica que o internado ainda apresenta sintomas psicóticos e comportamento agressivo, não sendo recomendada a desinternação.

Indefiro o pedido de desinternação e mantenho a medida de segurança detentiva.

Reavalie-se em 1 ano.

P.R.I.

$juizo.getCidade(), $data.getDataPorExtenso().

Henrique Baltazar Vilar dos Santos
Juiz de Direito`,
    },
];

export function buscarPorId(id: string): Modelo | undefined {
    return DECISOES_MEDIDA_SEGURANCA.find((modelo) => modelo.id === id);
}

export function buscarPorTermo(termo: string): Modelo[] {
    const termoLower = termo.toLowerCase();
    return DECISOES_MEDIDA_SEGURANCA.filter(
        (modelo) =>
            modelo.nome.toLowerCase().includes(termoLower) ||
            modelo.conteudo.toLowerCase().includes(termoLower)
    );
}
