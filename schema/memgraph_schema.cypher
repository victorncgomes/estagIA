// ============================================
// MEMGRAPH SCHEMA - estagIA Knowledge Graph
// ============================================
// Execute este arquivo no Memgraph Lab ou via mgconsole
// para criar as constraints e índices necessários.

// === CONSTRAINTS (Unicidade) ===

// Legislação
CREATE CONSTRAINT ON (l:Lei) ASSERT l.id IS UNIQUE;
CREATE CONSTRAINT ON (a:Artigo) ASSERT a.id IS UNIQUE;
CREATE CONSTRAINT ON (i:Inciso) ASSERT i.id IS UNIQUE;
CREATE CONSTRAINT ON (p:Paragrafo) ASSERT p.id IS UNIQUE;

// Súmulas e Tribunais
CREATE CONSTRAINT ON (s:Sumula) ASSERT s.id IS UNIQUE;
CREATE CONSTRAINT ON (t:Tribunal) ASSERT t.sigla IS UNIQUE;

// Doutrina
CREATE CONSTRAINT ON (d:Doutrina) ASSERT d.id IS UNIQUE;
CREATE CONSTRAINT ON (c:Chunk) ASSERT c.id IS UNIQUE;
CREATE CONSTRAINT ON (au:Autor) ASSERT au.nome IS UNIQUE;

// Jurisprudência
CREATE CONSTRAINT ON (j:Julgado) ASSERT j.id IS UNIQUE;

// Matérias (categorias jurídicas)
CREATE CONSTRAINT ON (m:Materia) ASSERT m.nome IS UNIQUE;

// Feedback
CREATE CONSTRAINT ON (f:Feedback) ASSERT f.id IS UNIQUE;

// Usuários (para multi-tenant futuro)
CREATE CONSTRAINT ON (u:Usuario) ASSERT u.id IS UNIQUE;


// === ÍNDICES (Performance) ===

// Busca por nome/título
CREATE INDEX ON :Lei(nome);
CREATE INDEX ON :Lei(sigla);
CREATE INDEX ON :Artigo(numero);
CREATE INDEX ON :Sumula(numero);
CREATE INDEX ON :Doutrina(titulo);
CREATE INDEX ON :Autor(sobrenome);
CREATE INDEX ON :Julgado(numero);
CREATE INDEX ON :Materia(nome);

// Busca temporal
CREATE INDEX ON :Lei(dataPublicacao);
CREATE INDEX ON :Lei(dataVigencia);
CREATE INDEX ON :Lei(dataRevogacao);
CREATE INDEX ON :Julgado(dataJulgamento);

// Busca por status
CREATE INDEX ON :Lei(status);  // 'vigente', 'revogada', 'parcialmente_revogada'
CREATE INDEX ON :Chunk(processado);


// === NÓS INICIAIS (Tribunais) ===

MERGE (stf:Tribunal {sigla: 'STF', nome: 'Supremo Tribunal Federal', hierarquia: 1});
MERGE (stj:Tribunal {sigla: 'STJ', nome: 'Superior Tribunal de Justiça', hierarquia: 2});
MERGE (tjrn:Tribunal {sigla: 'TJRN', nome: 'Tribunal de Justiça do Rio Grande do Norte', hierarquia: 3});


// === NÓS INICIAIS (Matérias) ===

MERGE (:Materia {nome: 'progressao', descricao: 'Progressão de Regime'});
MERGE (:Materia {nome: 'regressao', descricao: 'Regressão de Regime'});
MERGE (:Materia {nome: 'livramento', descricao: 'Livramento Condicional'});
MERGE (:Materia {nome: 'indulto', descricao: 'Indulto e Comutação'});
MERGE (:Materia {nome: 'remicao', descricao: 'Remição de Pena'});
MERGE (:Materia {nome: 'faltaGrave', descricao: 'Falta Grave'});
MERGE (:Materia {nome: 'monitoramento', descricao: 'Monitoramento Eletrônico'});
MERGE (:Materia {nome: 'saidaTemporaria', descricao: 'Saída Temporária'});
MERGE (:Materia {nome: 'prisaoDomiciliar', descricao: 'Prisão Domiciliar'});
MERGE (:Materia {nome: 'medidaSeguranca', descricao: 'Medida de Segurança'});
MERGE (:Materia {nome: 'prescricao', descricao: 'Prescrição'});
MERGE (:Materia {nome: 'unificacao', descricao: 'Unificação de Penas'});
MERGE (:Materia {nome: 'transferencia', descricao: 'Transferência de Estabelecimento'});
MERGE (:Materia {nome: 'exameCriminologico', descricao: 'Exame Criminológico'});
MERGE (:Materia {nome: 'agravo', descricao: 'Agravo em Execução'});
MERGE (:Materia {nome: 'multa', descricao: 'Pena de Multa'});


// === COMENTÁRIOS SOBRE RELACIONAMENTOS ===

// HIERARQUIA LEGAL
// (Lei)-[:CONTEM]->(Artigo)
// (Artigo)-[:CONTEM]->(Inciso)
// (Artigo)-[:CONTEM]->(Paragrafo)

// CONFLITOS E REVOGAÇÕES
// (Lei)-[:REVOGA {data: date, tipo: 'total'|'parcial'}]->(Lei)
// (Lei)-[:CONFLITA_COM {resolucao: 'especialidade'|'cronologia'|'hierarquia'}]->(Lei)
// (Lei)-[:REGULAMENTA]->(Lei)
// (Lei)-[:ALTERA {data: date}]->(Lei)

// INTERPRETAÇÃO
// (Sumula)-[:INTERPRETA]->(Artigo)
// (Sumula)-[:EMITIDA_POR]->(Tribunal)
// (Julgado)-[:CITA]->(Artigo)
// (Julgado)-[:APLICA]->(Sumula)
// (Julgado)-[:JULGADO_POR]->(Tribunal)

// DOUTRINA
// (Doutrina)-[:ESCRITA_POR]->(Autor)
// (Doutrina)-[:COMENTA]->(Artigo)
// (Doutrina)-[:ABORDA]->(Materia)
// (Chunk)-[:PERTENCE_A]->(Doutrina)
// (Chunk)-[:PAGINA {numero: int}]->(Doutrina)

// TEMPORAL (propriedades nos nós)
// Lei.dataPublicacao, Lei.dataVigencia, Lei.dataRevogacao
// Usados para queries de aplicação da lei no tempo

// FEEDBACK LOOP
// (Feedback)-[:REFORCA {peso: float}]->(Chunk)
// (Feedback)-[:ENFRAQUECE {peso: float}]->(Chunk)
// (Feedback)-[:VALIDA]->(Julgado)
// (Feedback)-[:DADO_POR]->(Usuario)


// === FIM DO SCHEMA ===
// Próximo passo: executar seedLegislation.ts para popular leis
