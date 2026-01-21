/**
 * estagIA - Tipos para Banco de Decisões/Despachos/Sentenças
 * Estrutura multi-magistrado e multi-tipo de documento
 * @version 0.2.0
 */

/**
 * Magistrados cadastrados no sistema
 */
export type Magistrado = 'henriqueBaltazar' | 'joseVieira';

/**
 * Tipos de documento
 */
export type TipoDocumento = 'decisao' | 'despacho' | 'sentenca';

/**
 * Agrupadores de matéria (43 categorias)
 */
export type Agrupador =
    // Principais
    | 'progressao'
    | 'regressao'
    | 'remicao'
    | 'livramento'
    | 'monitoramento'
    | 'retificacao'
    | 'agravo'
    | 'embargos'
    | 'reconsideracao'
    | 'unificacao'
    // Indulto/Comutação
    | 'indulto'
    | 'comutacao'
    // Faltas
    | 'faltaGrave'
    | 'faltaMedia'
    // Medida de Segurança
    | 'medidaSeguranca'
    | 'insanidadeMental'
    // Multa/Pecuniário
    | 'multa'
    | 'prestacaoPecuniaria'
    // Autorizações
    | 'autorizacao'
    | 'saidaTemporaria'
    | 'prisaoDomiciliar'
    | 'visita'
    // Transferência
    | 'transferencia'
    // Competência
    | 'incompetencia'
    // Regime
    | 'adequacaoRegime'
    // Exames
    | 'exameCriminologico'
    // Detração
    | 'detracao'
    // Representação
    | 'representacao'
    // Extinção (subtemas)
    | 'extincaoPrescricao'
    | 'extincaoMorte'
    | 'extincaoOutros'
    // Outros
    | 'acordao'
    | 'hc'
    | 'tema506'
    | 'mutirao'
    | 'outros';

/**
 * Interface para um modelo/minuta
 */
export interface Modelo {
    /** ID único do modelo */
    id: string;
    /** Nome/descrição do modelo */
    nome: string;
    /** Conteúdo do modelo com placeholders */
    conteudo: string;
    /** Tipo de documento */
    tipoDocumento: TipoDocumento;
    /** Magistrado autor */
    magistrado: Magistrado;
    /** Agrupador/matéria do modelo */
    agrupador: Agrupador;
    /** Fonte original (SEEU, DOCX, etc) */
    fonteOriginal?: string;
    /** Data de extração/criação */
    dataExtracao: string;
    /** Tags para busca (opcional) */
    tags?: string[];
    /** Modelo obsoleto? */
    obsoleto?: boolean;
}

/**
 * Metadados de um agrupador
 */
export interface AgrupadorMeta {
    id: Agrupador;
    nome: string;
    descricao: string;
}

/**
 * Lista de metadados dos agrupadores
 */
export const AGRUPADORES_META: AgrupadorMeta[] = [
    { id: 'progressao', nome: 'Progressão', descricao: 'Progressão de regime prisional' },
    { id: 'regressao', nome: 'Regressão', descricao: 'Regressão de regime prisional' },
    { id: 'remicao', nome: 'Remição', descricao: 'Remição por trabalho, estudo, leitura' },
    { id: 'livramento', nome: 'Livramento Condicional', descricao: 'LC, revogação, suspensão' },
    { id: 'monitoramento', nome: 'Monitoramento', descricao: 'Monitoramento eletrônico' },
    { id: 'retificacao', nome: 'Retificação GEP', descricao: 'Retificação de guia de execução' },
    { id: 'agravo', nome: 'Agravo', descricao: 'Agravos em execução penal' },
    { id: 'embargos', nome: 'Embargos', descricao: 'Embargos de declaração' },
    { id: 'reconsideracao', nome: 'Reconsideração', descricao: 'Pedidos de reconsideração' },
    { id: 'unificacao', nome: 'Unificação', descricao: 'Unificação de penas' },
    { id: 'indulto', nome: 'Indulto', descricao: 'Indulto e indulto de multa' },
    { id: 'comutacao', nome: 'Comutação', descricao: 'Comutação de pena' },
    { id: 'faltaGrave', nome: 'Falta Grave', descricao: 'Falta disciplinar grave' },
    { id: 'faltaMedia', nome: 'Falta Média', descricao: 'Falta disciplinar média' },
    { id: 'medidaSeguranca', nome: 'Medida de Segurança', descricao: 'MS, desinternação, conversão' },
    { id: 'insanidadeMental', nome: 'Insanidade Mental', descricao: 'Incidente de insanidade' },
    { id: 'multa', nome: 'Multa', descricao: 'Pena de multa' },
    { id: 'prestacaoPecuniaria', nome: 'Prestação Pecuniária', descricao: 'Prestação pecuniária' },
    { id: 'autorizacao', nome: 'Autorização', descricao: 'Autorizações diversas' },
    { id: 'saidaTemporaria', nome: 'Saída Temporária', descricao: 'Saída temporária' },
    { id: 'prisaoDomiciliar', nome: 'Prisão Domiciliar', descricao: 'Prisão domiciliar' },
    { id: 'visita', nome: 'Visita', descricao: 'Direito de visita' },
    { id: 'transferencia', nome: 'Transferência', descricao: 'Transferência, APAC' },
    { id: 'incompetencia', nome: 'Incompetência', descricao: 'Declaração de incompetência' },
    { id: 'adequacaoRegime', nome: 'Adequação de Regime', descricao: 'Adequação de regime' },
    { id: 'exameCriminologico', nome: 'Exame Criminológico', descricao: 'Exame criminológico' },
    { id: 'detracao', nome: 'Detração', descricao: 'Detração penal' },
    { id: 'representacao', nome: 'Representação', descricao: 'Honorários, renúncia advogado' },
    { id: 'extincaoPrescricao', nome: 'Extinção - Prescrição', descricao: 'Extinção por prescrição' },
    { id: 'acordao', nome: 'Acórdão', descricao: 'Cumprimento de acórdão' },
    { id: 'hc', nome: 'HC', descricao: 'Habeas Corpus' },
    { id: 'tema506', nome: 'Tema 506', descricao: 'Posse de drogas - Tema 506 STF' },
    { id: 'mutirao', nome: 'Mutirão', descricao: 'Mutirão carcerário' },
    { id: 'outros', nome: 'Outros', descricao: 'Decisões não classificadas' },
];
