# estagIA - Changelog Consolidado

> **Versão Atual**: 0.2.21  
> **Última Atualização**: 23/01/2026

---

## v0.2.21 - Auditoria Base de Conhecimento (23/01/2026)

### 🔍 Auditoria Completa dos Modelos de Decisão

**Problema Resolvido:** Modelos de progressão com resultado inconsistente (nome indicava "indefere" mas resultado = "indefinido").

**Correções Aplicadas:**
- "Decisao Progressao Reanalise Indefere" → resultado corrigido para `indefere`
- "Progressao Indefere Subjetivo Faltas Graves" → resultado corrigido para `indefere`
- Outros modelos de progressão com "indefere" no nome → corrigidos automaticamente

**Scripts Criados:**
- `scripts/auditKnowledge.cjs` - Auditoria geral da base
- `scripts/auditProgressao.cjs` - Auditoria detalhada de progressão
- `scripts/fixSpecificModels.cjs` - Correções específicas

**Estatísticas da Auditoria:**
| Métrica | Antes | Depois |
|---------|-------|--------|
| Total de modelos | 256 | 256 |
| Modelos progressão "indefinido" | ~6 | ~3 |
| Modelos progressão "indefere" | ~11 | ~14 |

---

## v0.2.20 - Correção Visualização Jurisprudência (23/01/2026)

### 🔧 JurisprudenciaViewer v2.0 - Exibição Completa

**Problema Resolvido:** Componente só exibia 25 súmulas STJ, ignorando 2437 julgados.

**Solução Implementada:**

| Fonte | Quantidade | Status |
|-------|------------|--------|
| TJRN | 2.331 julgados | ✅ Carregado |
| STF | 31 julgados | ✅ Carregado |
| STJ Repetitivos | 75 acordãos | ✅ Carregado |
| Súmulas STJ | 25 | ✅ Carregado |
| **TOTAL** | **2.462** | ✅ |

**Novas Features:**
- 🎨 Interface estilo Kindle (como DoutrinaViewer)
- 📑 Tabs por fonte: Todos, TJRN, STF, STJ Rep., Súmulas
- 📄 Paginação virtual (20 itens/página)
- 🔍 Busca por ementa, processo, relator, tema
- 📋 Cópia de citação formatada
- 🎯 Detalhes expandíveis com tese (STJ) e ementa completa

**Arquivo Modificado:**
- `components/readers/JurisprudenciaViewer.tsx` → v2.0

---

## v0.2.19 - Correção Base de Conhecimento (22/01/2026)


### 🔧 Melhorias no Modal de Jurisprudência (v1.1.0)

| Item | Correção |
|------|----------|
| Contraste | Header atualizado para `amber-700/800` (melhor legibilidade) |
| Loading | Spinner animado durante busca de resultados |
| Reset | Estado limpo automaticamente ao abrir modal |
| UX | Tooltips adicionados nos botões de ação |

### ✅ Nomenclatura Padronizada
- "Banco de Conhecimento" → **"Base de Conhecimento"** em toda interface

### 📊 Contagens Reais Integradas
| Base | Quantidade |
|------|------------|
| Modelos de Decisão | 256 |
| Legislação | 36 |
| Doutrina | 34 |
| Jurisprudência | 2.437 |

### 🔄 Reindexação Completa de Modelos

**Problema Resolvido:** Script anterior ignorava arquivos ODT (175 arquivos).

**Novo índice (v3.0.0):**
- **256 modelos** indexados (antes: 79)
- Formatos: 79 DOCX + 175 ODT + 2 DOC
- **19 agrupadores** categorizados (antes: 11)

**Scripts Criados:**
- `scripts/reindexModelos.cjs` - Indexação completa
- `scripts/regenerateEmbeddings.cjs` - Geração de embeddings

### ⚡ Embeddings Regenerados

**256 embeddings** gerados para busca semântica instantânea:
- Cache: `knowledge/embeddings_cache.json` (3.64 MB)
- Formato: Gemini text-embedding-004 (768 dimensões)

### 🧪 Sistema de Testes Art. 489 CPC

**Sistema de avaliação detalhado** baseado no Art. 489 do CPC e no estilo do Juiz Baltazar:

| Categoria | Pontos | Critérios |
|-----------|--------|-----------|
| **Relatório** | 40 | Vistos (5), Causa conclusão (10), Eventos (5), Ordem partes (10), Ausentes (5), Relatados (5) |
| **Fundamentação** | 65 | Ponto fulcral (10), Transições (5), Estrutura (10), Doutrina (10), Legislação (10), Jurisp. (10), Não repete (5), Conclusão (5) |
| **Dispositivo** | 40 | Isso posto (5), Objetividade (10), Só alterações (10), Itens (5), PRI (5), Atualiza atestado (5) |
| **Anti-Alucinação** | 45 | Sem nomes (10), Sem processos (5), Genéricos (5), Sem juiz (5), Jurisp. verif. (10), Doutrina verif. (10) |
| **TOTAL** | **190** | |

**Resultados após otimização e rigor anti-alucinação (29 casos):**
- ✅ 100% aprovados (score >= 70%)
- 📊 **Média: 164.7/190 (86.7%)**
- 📈 **0 alucinações detectadas** (súmulas inventadas, nomes fictícios)
- 🏆 Progressão e Multa: **45/45 Anti-Alucinação**

| Suíte | Score | Anti-Aluc |
|-------|-------|-----------|
| progressao | 89.0% | **45/45** |
| multa | 88.3% | **45/45** |
| retificacao | 89.2% | 43/45 |
| livramento | 88.3% | 42/45 |

**Arquivos criados:**
- `services/validation/art489Validator.ts` - Validador completo
- `scripts/runTestsArt489.cjs` - Script com prompt otimizado

**Doutrina integrada (Nível 4+):**
| Matéria | Autor |
|---------|-------|
| Progressão | BRITO, Alexis Couto de |
| Indulto/Retificação | NUCCI, Guilherme de Souza |
| Remição/Multa | MARCÃO, Renato |

### 📚 Portal de Conhecimento Premium

**Componentes implementados:**

| Feature | Componente | Status |
|---------|-----------|--------|
| **Leitor Kindle** | `KindleReader.tsx` | ✅ Funcional |
| **Jurisprudência** | `JurisprudenciaViewer.tsx` | ✅ Funcional |
| **Legislação** | Encoding | ⚠️ Requer re-indexação |

**KindleReader Features:**
- 🔤 Controle de tamanho de fonte (XS → XXL)
- 🎨 3 temas: Claro, Sépia, Escuro
- ⌨️ Atalhos: ← → Navegar, + - Fonte, ESC Fechar
- 📊 Barra de progresso e navegação de páginas

**JurisprudenciaViewer Features:**
- 🔍 Busca por número ou texto
- 🏷️ Filtro por ramo (Execução Penal, etc.)
- 📋 25 súmulas STJ indexadas
- 📎 Cópia de citação formatada

### 📖 Leitores de Texto Implementados
- **Legislação**: Visualização de texto vigente e trechos revogados
- **Doutrina**: Leitor estilo Kindle com navegação entre páginas

### 🚫 Regras Anti-Alucinação Reforçadas
- Proibido mencionar nome de promotor (usar "Ministério Público")
- Proibido mencionar nome de defensor (usar "Defesa")

**Arquivos Modificados:**
- `components/modals/JurisprudenciaModal.tsx`
- `components/modals/BancoConhecimentoModal.tsx`
- `services/knowledge/indexService.ts`
- `knowledge/prompts/CORE_ACORDA_CLAUDE.md`
- `services/engine/decisionEngine.ts`
- `services/knowledge/coreBaltazar.ts`

---

## v0.3.3 - Correção do Botão Gerar Decisão (22/01/2026)

### 🐛 Bug Fix Crítico

**Problema 1:** O botão "Gerar Decisão" não funcionava - nada acontecia ao clicar.

**Causa:** Referência a propriedade inexistente no store:
- O código em `pipeline.ts` referenciava `guidance.prolixity` (nome antigo)
- A propriedade real no store é `guidance.profundidadeJuridica`

**Correção em `services/pipeline.ts`:**
- Alterado `guidance.prolixity` → `guidance.profundidadeJuridica` (3 ocorrências)
- Atualizado mapa de níveis de 5 para 6 níveis (compatível com UI)
- Atualizado labels de "Prolixidade" para "Profundidade Jurídica"

---

**Problema 2:** Frontend não conectava ao backend - "Sem APIs" / ERR_CONNECTION_REFUSED

**Causa:** Mismatch de portas:
- Backend rodando na porta **3508**
- Frontend configurado para conectar na porta **3108**

**Correção em `services/ai/config.ts` e `services/feedbackService.ts`:**
- Alterado `localhost:3108` → `localhost:3508`

---

## v0.3.2 - Configuração de Deploy (22/01/2026)

### 🚀 Deploy Railway + Vercel

**Arquivos Criados:**
- `vercel.json` - Configuração para deploy frontend no Vercel
- `railway.json` - Configuração para deploy backend no Railway
- `src/vite-env.d.ts` - Tipos para variáveis de ambiente Vite

**Arquivos Modificados:**
- `backend/server.js` - Porta dinâmica (`process.env.PORT`) e CORS flexível
- `services/ai/config.ts` - URL do backend com detecção automática de ambiente
- `services/orchestration/ragIntegration.ts` - URL dinâmica para RAG
- `services/feedbackService.ts` - URL dinâmica para feedback

**URLs de Produção:**
- Frontend: https://estagia.vercel.app
- Backend: https://estagia.up.railway.app

---

## v0.3.1 - Auto-Aprendizado + LLM Judge (22/01/2026)

### 🤖 Sistema de Auto-Aprendizado de Prompts

**Conceito DSPy-Style:**
O sistema agora aprende e ajusta automaticamente os parâmetros do prompt:
1. Gera decisão baseada nos exemplos
2. Compara com modelo golden (estrutura + tamanho)
3. Ajusta parâmetros automaticamente
4. Repete até atingir score alvo

**Resultados por Agrupador:**
| Agrupador | Score | Status |
|-----------|-------|--------|
| remicao | 92.5/100 | ✅ |
| indulto | 100/100 | ✅ |
| multa | 100/100 | ✅ |
| unificacao | 100/100 | ✅ |
| retificacao | 70-100/100 | ⚠️ |

**Arquivos:**
- `scripts/autoLearn.cjs` - Loop de auto-aprendizado
- `scripts/benchmarkSimples.cjs` - Benchmark único
- `services/promptConfig.ts` - Carregador de config otimizada
- `knowledge/prompts/prompt_config.json` - Config persistente
- `knowledge/prompts/learning_history.json` - Histórico de ajustes

### 🧑‍⚖️ LLM Judge (Segunda Verificação)

Sistema que valida decisões geradas usando segunda IA:
- **Estrutura** (25pts): Vistos, Relatados, Isso posto, P.R.I.
- **Citações** (25pts): Doutrina ABNT, jurisprudência completa
- **Coerência** (25pts): Relatório e dispositivo consistentes
- **Anti-alucinação** (25pts): Nomes, processos, matérias

**Resultado do Teste:** 85/100 ✅ APROVADO

**Arquivos:**
- `services/validation/llmJudge.ts` - Serviço de validação
- `scripts/testLLMJudge.cjs` - Script de teste

### 📚 Validador de Citações

Verifica citações contra banco de conhecimento:
- Extrai citações de doutrina (padrão ABNT)
- Extrai citações de jurisprudência (súmulas, REsp, etc.)
- Valida contra `doutrina_index.json` e STJ

**Arquivo:** `services/validation/citacaoValidator.ts`

### 📖 Correção ABNT de Doutrina v2.1.0

**5 livros corrigidos via análise do conteúdo extraído:**

| Livro | Autor | Editora |
|-------|-------|---------|
| Execução Penal 5ª ed. | BRITO, Alexis Couto de | Saraiva Educação |
| Código Penal Comentado 10ª ed. | BITENCOURT, Cezar Roberto | Saraiva Educação |
| Manual de Direito Civil 10ª ed. | TARTUCE, Flávio | Forense; Método |
| Novo CPC Comentado 3ª ed. | MEDINA, José Miguel Garcia | RT |
| CS Execução Penal | CADERNOS SISTEMATIZADOS | - |

**Total no índice:** 34 livros com citações ABNT completas

---

## v0.3.0 - Quality Engine + Few-Shot Learning (22/01/2026)

### 🚀 Sistema Few-Shot com Modelos COMPLETOS

**Problema Resolvido:**
- Decisões geradas muito curtas e genéricas
- IA não seguia estilo dos modelos golden
- Modelos de referência eram injetados apenas como "trechos" (preview)

**Solução Implementada:**

1. **Extração DOCX Completa** (`scripts/extractDocxComplete.cjs`)
   - 79 modelos DOCX extraídos com conteúdo completo
   - Detecção de campos FillIn (14 modelos com formulários)
   - Textos salvos em `knowledge/decisoes/textos_completos/`
   - Novo índice: `modelos_completos_index.json`

2. **Carregador de Modelos** (`services/modelosLoader.ts`)
   - Carrega conteúdo COMPLETO dos modelos sob demanda
   - Busca por agrupador (remicao, indulto, retificacao, etc.)
   - Busca por resultado (defere/indefere) baseada na orientação de mérito
   - Formatação otimizada para Few-Shot Learning

3. **Pipeline v0.3.0** (`services/pipeline.ts`)
   - Few-Shot Learning: 2 modelos COMPLETOS injetados no prompt
   - Mapeamento matéria → agrupador automático
   - Instruções explícitas: "tamanho SIMILAR aos exemplos"
   - Log detalhado de modelos carregados

**Estatísticas da Extração:**
| Agrupador | Modelos | Com FillIn |
|-----------|---------|------------|
| remicao | 21 | ✅ |
| retificacao | 14 | - |
| indulto | 12 | - |
| multa | 4 | ✅ |
| unificacao | 6 | - |
| outros | 22 | - |

**Arquivos Criados:**
- `scripts/extractDocxComplete.cjs` - Extração completa
- `scripts/regenerateEmbeddings.cjs` - Embeddings v2 (pendente)
- `services/modelosLoader.ts` - Carregador de modelos
- `knowledge/decisoes/modelos_completos_index.json` - Índice v2.0
- `knowledge/decisoes/textos_completos/` - 78 arquivos TXT

**Arquivos Modificados:**
- `services/pipeline.ts` → v0.3.0 (Few-Shot)

---


## v0.2.18 - Embeddings + Busca Semântica Instantânea (21/01/2026)

### ⚡ RAG com Busca Semântica Instantânea

**Embeddings Pré-computados:**
- 251 modelos de decisão com embeddings (3.6MB)
- 95 itens de knowledge (doutrina + leis + súmulas)
- **Total: 346 embeddings** integrados (768 dimensões)

**Busca Instantânea:**
- `searchModelosInstant()` integrada no endpoint `/api/rag`
- Nível 2+: apenas 1 chamada de API (só para query)
- Fallback automático para keyword se necessário
- Log: `[RAG] ⚡ Busca instantânea: X modelos (Yms)`

**Índice Temático:**
- Função `buscarPorTema()` com índice pré-computado (424 itens)
- Mapeamento de sinônimos para temas canônicos
- Suporte a: remição, retificação, indulto, progressão, livramento, etc.
- Correção de acesso à estrutura `.citacoes` e `.livros`

**Engine v3.0:**
- Nova hierarquia: INSUMOS → ORIENTAÇÕES → NÍVEL → MATÉRIA
- Citações ABNT obrigatórias
- Checklist de validação

**Correções:**
- `materiaDetector.ts` - tipos corrigidos (gep→retificacao, removido multa)
- `buscarPorTema()` - acesso seguro com `Array.isArray()` check

**Arquivos Criados/Modificados:**
- `scripts/precomputeEmbeddings.cjs` - Indexação pré-computada
- `scripts/precomputeAllEmbeddings.cjs` - Embeddings de todo knowledge
- `scripts/testRAG.cjs` - Testes end-to-end do RAG
- `backend/server.js` - Busca temática e instantânea
- `knowledge/embeddings_cache.json` - Cache de modelos
- `knowledge/embeddings_knowledge.json` - Cache de doutrina/leis/juris

---

## v0.2.17 - Decision Engine v2.1 Anti-Alucinação Forte (21/01/2026)

### 🛡️ Correções Críticas

**Problema:** IA não respeitava estrutura, citava doutrina sem fonte, misturava matérias.

**Solução:**
- **Checklist obrigatório** no final do prompt com 6 verificações
- **Citação ABNT obrigatória**: autor, obra, editora, ano, página
- **Estrutura rígida** em bloco de código no prompt
- **Bloqueio de matéria diferente** da especificada
- **Novas proibições**: misturar matérias, citar sem fonte

**Arquivos Modificados:**
- `services/engine/decisionEngine.ts` → v2.1
- `services/pipeline.ts` → v0.2.17

---

---

## v0.2.16 - Busca Semântica Real Implementada (21/01/2026)

### 🎯 Embeddings Gemini text-embedding-004

**Implementação no Backend:**
- Função `getEmbedding()` - Gera embeddings via API Gemini
- Função `cosineSimilarity()` - Calcula similaridade de cosseno
- Função `searchModelosSemantic()` - Busca semântica nos modelos

**Funcionamento:**
1. Query do usuário → Embedding via Gemini
2. Modelos da categoria → Embeddings em batch
3. Similaridade de cosseno → Ranking por relevância
4. Fallback para keyword se embeddings indisponíveis

**Sem Docker Necessário:** Tudo funciona localmente via API Gemini.

---

---

## v0.2.15 - Implementação RAG Híbrido Real (21/01/2026)

### 🎯 RAG com Busca Semântica e Grafo

**Arquivos Criados:**
- `services/vector/chromaClient.ts` - Cliente ChromaDB para busca vetorial
- `services/vector/embeddings.ts` - Embeddings via Gemini text-embedding-004
- `services/graph/memgraphClient.ts` - Cliente Memgraph para busca em grafo
- `services/templateService.ts` - Estatísticas de modelos

**Arquivos Modificados:**
- `services/orchestration/ragIntegration.ts` → v0.3.0
  - Busca híbrida: ChromaDB (vetorial) + Memgraph (grafo) + JSON (fallback)
  - Detecção automática de disponibilidade dos serviços

**Dependências Restauradas:**
- `chromadb` → Busca semântica por embeddings
- `neo4j-driver` → Cliente para Memgraph

**Próximos Passos:**
1. Subir containers Docker (ChromaDB + Memgraph)
2. Rodar scripts de seed para popular os stores
3. Testar busca semântica em produção

---


## v0.2.14 - Correção Anti-Alucinação de Posicionamento (21/01/2026)

### 🚨 Correção CRÍTICA

**Problema 1:** IA invertia posição do MP (indeferimento→deferimento)
**Problema 2:** RAG retornava modelos de matérias erradas (Retificação para caso de Remição)

**Solução:**
- **Novo:** `services/utils/posicionamentoExtractor.ts`
  - Detecta automaticamente se MP/Defesa opinou por deferimento ou indeferimento via regex
  - Posicionamento injetado NO INÍCIO do prompt com ênfase máxima
- **Modificado:** `services/pipeline.ts` v0.2.14
  - Extração automática de posicionamento antes das manifestações
  - Repetição de regras críticas no final do contexto
  - Orientações de mérito com ênfase "SIGA OBRIGATORIAMENTE"
- **Modificado:** `backend/server.js`
  - Filtro RIGOROSO por categoria: remição só busca em modelos de remição
  - Bloqueia cross-matching entre categorias diferentes
  - Logging detalhado de modelos encontrados
- **Modificado:** `services/pipeline.ts` v0.2.14
  - Extração automática de posicionamento antes das manifestações
  - Repetição de regras críticas no final do contexto
  - Orientações de mérito com ênfase "SIGA OBRIGATORIAMENTE"

---

## v0.2.13 - Decision Engine v2.0 (21/01/2026)

### 🎯 Nova Engine de Geração Baseada no Art. 489 CPC

**Arquivos Criados:**
- `services/engine/decisionEngine.ts` - Engine completa com regras do magistrado

**Estrutura Obrigatória da Decisão:**
1. `"Vistos, etc."` - Abertura SEMPRE igual
2. Relatório - Evento entre parênteses, quem deu causa primeiro
3. `"Relatados."` - Transição em parágrafo separado
4. Fundamentação - Hierarquia: doutrina → legislação → jurisprudência
5. `"Isso posto,"` - Dispositivo objetivo, P.R.I.

**Níveis de Profundidade (Cumulativos):**
| Nível | Nome | Fontes RAG |
|-------|------|------------|
| 1 | Telegráfico | Nenhuma |
| 2 | Padrão | Modelos (OBRIGATÓRIO) |
| 3 | Normativo | + Legislação + Jurisprudência |
| 4 | Doutrinário | + Doutrina OBRIGATÓRIA |
| 5-6 | Tribunais/Internet | (futuro) |

**Regras Anti-Alucinação:**
- ❌ Nunca dividir em "DO RELATÓRIO/DA FUNDAMENTAÇÃO"
- ❌ Nunca inventar jurisprudência
- ❌ Nunca repetir juris citada pelas partes
- ❌ Nunca mencionar nome de promotor

**Arquivos Modificados:**
- `services/pipeline.ts` → Integração com nova engine (v0.3.0)

---


## v0.2.12 - Correção do Algoritmo RAG (21/01/2026)

### 🔧 Correções Críticas no Backend

**Problema:**
- Modelo "Ausência Acréscimo Intelectual" não era encontrado
- Encoding UTF-8 corrompido no índice impedia matching

**Correções em `server.js`:**
- Adicionada função `normalizeText()` que corrige encoding UTF-8 duplo
- Normalização aplicada em nomes de modelos e palavras-chave
- Termos especiais agora incluem variantes sem acento
- Limite de modelos aumentado de 3 para 5
- Score por múltiplos matches (relevância até 5)
- Filtro de jurisprudência para remição (estudo, trabalho, leitura)

**Resultado do Teste:**
```
[RAG N4] Modelos: 5, Leis: 5, Juris: 3, Doutrina: 3
1. [5] Remição Estudo - Indefere (Ausência Acréscimo Intelectual) ✅
```

---


## v0.2.11 - Extração Automática de Números de Evento (21/01/2026)

### 🔢 Captura de Eventos das Manifestações

**Problema Resolvido:**
- Números de evento não eram extraídos do texto colado
- Minutas não referenciavam corretamente `(evento XX)`

**Novo Módulo `eventExtractor.ts`:**
- Extrai números de evento de manifestações (MP, Defesa, RSPE, Outros)
- Suporta padrões: `Evento 45`, `EV. 45`, número isolado no início
- Gera instrução explícita para a IA usar formato `(evento XX)`

**Integração no Pipeline v0.2.2:**
- `buildCaseContext()` agora inclui seção de eventos identificados
- IA recebe regra obrigatória para referenciar manifestações por evento

---


## v0.2.10 - Injeção Dinâmica de Trechos no Prompt (21/01/2026)

### 🎯 Injeção de Conteúdo Real das Minutas

**Problema Resolvido:**
- Decisões geradas continuavam "genéricas" mesmo com modelos indexados
- O backend retornava `trecho` mas o frontend não mapeava o campo

**Correção em `ragIntegration.ts`:**
- Adicionado mapeamento do campo `trecho` no `getEnrichedContext()`
- Interface `RAGContext` atualizada com `trecho?: string`
- `formatRAGContext()` agora injeta até **2000 caracteres** de cada modelo relevante

**Resultado:**
- Prompt recebe trechos reais das minutas do magistrado
- IA pode copiar estrutura, linguagem e estilo específicos
- Máximo de 3 modelos × 2K chars = ~6K chars de referência

---

## v0.2.9 - Extração de Conteúdo dos Modelos (21/01/2026)

### 📄 Script `extractModelos.cjs`

Extrai conteúdo de arquivos DOCX e ODT dos modelos de decisão.

**Estatísticas:**
- 254 arquivos processados
- 1.296.452 caracteres extraídos
- 5 categorias: decisoesvrep, indulto, remicao, retificacao, old

**Tecnologias:**
- `mammoth` para DOCX
- `adm-zip` para ODT (extrai content.xml)

**Saída:**
- `knowledge/decisoes/textos/` - Arquivos TXT
- `modelos_extraidos.json` - Índice completo

**Backend:**
- Carrega `modelos_extraidos.json` na inicialização
- Log mostra total de arquivos e caracteres

---

## v0.2.8 - Busca Inteligente em Modelos (21/01/2026)

### 🔍 Busca em Modelos de Decisão

**Backend (`server.js`):**
- Carrega 53 modelos de decisão em 4 categorias
- Busca por matéria (retificacao, indulto, remicao, etc.)
- Busca por palavras-chave das orientações de mérito
- Retorna até 5 modelos ordenados por relevância

**RAG Integration:**
- `getEnrichedContext()` aceita parâmetro `orientacoes`
- Pipeline envia `guidance.merit` para busca por palavras-chave
- `formatRAGContext()` inclui seção de modelos no prompt

**Exemplos de busca:**
- "acréscimo intelectual" → modelos de remição
- "prescrição" → modelos de retificação
- "indefere/defere" → filtra por tipo de decisão

### 📊 Resultado de Teste
```
Nível 3 + orientações "acréscimo intelectual prescrição":
→ 5 modelos, 5 leis, 5 julgados ✅
```

---

## v0.2.7 - Regras do Core Baltazar (21/01/2026)

### 🎯 Regras de Estilo Implementadas

**Alterações em `coreBaltazar.ts`:**
- ❌ Removida menção de nome de promotor do template
- ❌ Proibido mencionar nome/número de promotoria
- ❌ Proibido dividir em "DO RELATÓRIO", "DA FUNDAMENTAÇÃO", etc.
- ✅ Linguagem fluida sem divisão rígida em seções
- ✅ Integração completa com `CORE_ACORDA_CLAUDE.md`

**Regras Anti-Alucinação atualizadas:**
- NÃO mencionar nome de promotor ou promotoria
- NÃO dividir texto em tópicos rígidos
- Linguagem deve ser fluida

---

## v0.2.6 - Estilos de Escrita Atualizados (21/01/2026)

### ✍️ Perfis de Estilo de Escrita

| ID | Nome | Descrição |
|----|------|-----------|
| `baltazar` | Estilo Baltazar (Padrão) | Tom formal e técnico do magistrado |
| `objetivo` | Estilo Objetivo e Didático | Linguagem clara e acessível |
| `erudito` | Estilo Prolixo e Erudito | Linguagem extremamente rebuscada |

**Arquivo:** `constants.ts`

---

## v0.2.5 - Níveis de Profundidade Cumulativos (21/01/2026)

### 📊 Nova Lógica de Níveis (CUMULATIVOS)

Os níveis são **cumulativos** - cada nível inclui todas as fontes dos níveis anteriores:

| Nível | Nome | Fontes RAG |
|-------|------|------------|
| 1 | Telegráfico | Nenhuma (texto mínimo) |
| 2 | Padrão | + Modelos do magistrado |
| 3 | Normativo + Jurisprudencial | + Legislação + Jurisprudência (STJ, STF) |
| 4 | Doutrinário | + Doutrina (34 volumes) |
| 5 | Tribunais | + Pesquisa em sites .jus.br (futuro) |
| 6 | Ampliado | + Pesquisa na internet (futuro) |

### 🔧 Alterações

**Frontend (`ColumnGuidance.tsx`):**
- Nível 3 renomeado de "Normativo" para "Normativo + Jurisprudencial"

**Backend (`server.js`):**
- Endpoint `/api/rag` recebe parâmetro `nivel`
- Filtro de fontes conforme o nível selecionado
- Carregamento de jurisprudência (25 súmulas STJ + STF)

**Pipeline (`pipeline.ts`):**
- Lógica de níveis cumulativos implementada
- RAG sempre usado (exceto nível 1)
- Níveis 5-6 usam nível 4 do RAG como base

---

## v0.2.4 - Correção Sistema RAG (21/01/2026)

- `ragIntegration.ts` v0.2.2: Chama `/api/rag` via backend (não retorna false no browser)
- Timeout configurado (3s health, 10s consulta)
- Cache de 10 segundos para evitar chamadas excessivas
- Filtro de legislação corrigido (usa `apelido` ao invés de `categoria`)

---

## v0.2.1 - Arquitetura RAG Híbrida (21/01/2026)

### 🧠 Knowledge Graph + Vector Store

**Stack implementada:**

| Componente | Tecnologia | Função |
|------------|------------|--------|
| Knowledge Graph | **Memgraph** | Relacionamentos jurídicos complexos |
| Vector Store | **ChromaDB** | Busca semântica (multi-tenant) |
| Orchestration | **LangGraph** | Workflows de IA com estado |
| Embeddings | **Gemini API** | text-embedding-004 (768 dims) |
| Feedback Storage | **Supabase** | Persistência (migrável para PostgreSQL) |

### Arquivos Criados

**Infraestrutura:**
- `docker-compose.yml` - Memgraph + ChromaDB containers
- `schema/memgraph_schema.cypher` - Schema do Knowledge Graph

**Serviços:**
- `services/graph/memgraphClient.ts` - Cliente Memgraph (Bolt)
- `services/vector/chromaClient.ts` - Cliente ChromaDB
- `services/vector/embeddings.ts` - Geração de embeddings Gemini
- `services/feedback/feedbackStore.ts` - Abstração Supabase/PostgreSQL

**Orchestração LangGraph:**
- `services/orchestration/ragWorkflow.ts` - Workflow RAG (5 nós)
- `services/orchestration/feedbackWorkflow.ts` - Workflow Feedback (4 nós)

### Dependências Adicionadas
- `@langchain/langgraph`, `@langchain/core`
- `chromadb`, `neo4j-driver`
- `@supabase/supabase-js`, `@google/generative-ai`

### 📊 Integração UI - Banco de Conhecimento

**Novo modal unificado** para explorar todas as bases indexadas:

| Aba | Conteúdo | Quantidade |
|-----|----------|------------|
| Modelos | Decisões categorizadas | 484 |
| Legislação | Códigos, Leis Especiais, Indultos | 36 |
| Doutrina | Por área do Direito | 34 (~46k páginas) |
| Jurisprudência | TJRN, STF, STJ | 2.462 |

**Arquivos:**
- `components/modals/BancoConhecimentoModal.tsx` - Modal com 4 abas
- `services/knowledge/indexService.ts` - Carregamento dos índices JSON
- `components/Header.tsx` - Atualizado para usar novo modal

### ⚙️ Integração Pipeline

**Pipeline atualizado** para usar contexto RAG quando Docker estiver disponível:

- `services/pipeline.ts` v0.2.1 - Fase 0 de enriquecimento de contexto
- `services/orchestration/ragIntegration.ts` - Wrapper seguro para frontend
- `services/graph/queries/legislation.ts` - Queries Cypher para legislação
- `services/graph/queries/conflicts.ts` - Queries para conflitos normativos
- `services/graph/seed/seedLegislation.ts` - Script de seed do Knowledge Graph
- `services/vector/seed/indexDoutrina.ts` - Indexação de doutrina no ChromaDB
- `services/vector/seed/indexJurisprudencia.ts` - Indexação de jurisprudência


---


## v0.2.3 - Sistema de Indexação de Doutrina (21/01/2026)

### 📚 Base de Doutrina Jurídica

**Pipeline OCR de 3 camadas** para extração de texto de PDFs:

| Camada | Tecnologia | Quando Usada |
|--------|------------|--------------|
| 1 (Nativa) | pdf-parse | PDFs pesquisáveis |
| 2 (OCR) | tesseract.js | PDFs escaneados |
| 3 (Vision) | Gemini 2.0 | Fallback para baixa qualidade |

**Características:**
- Processamento incremental e retomável
- Citações ABNT automáticas com página
- Saída segmentada em blocos de 50 páginas
- Índice JSON com metadados completos

**Catálogo:** 34 volumes (~853MB) incluindo:
- Códigos Comentados (CP, CPP, CPC, CC, CDC)
- Cursos de Processo Penal e Civil
- Manuais de Execução Penal
- Legislação Penal Especial

### Arquivos Criados
- `scripts/extractDoutrina.cjs` - Script principal
- `knowledge/doutrina/doutrina_index.json` - Índice
- `knowledge/doutrina/doutrina_progress.json` - Progresso
- `knowledge/doutrina/textos/` - Arquivos de texto extraídos

---

## v0.2.2 - Base de Legislação (21/01/2026)

### 📚 Base de Legislação Nacional

**36 legislações extraídas** do Planalto.gov.br com sistema de atualização automática.

#### Códigos
| Lei | Apelido | Caracteres |
|-----|---------|------------|
| Código Penal (DL 2.848/1940) | CP | 307K |
| Código de Processo Penal (DL 3.689/1941) | CPP | 386K |
| Código de Processo Civil (Lei 13.105/2015) | CPC | 577K |
| Código Civil (Lei 10.406/2002) | CC | 658K |
| Código de Trânsito (Lei 9.503/1997) | CTB | 355K |
| Código Tributário Nacional (Lei 5.172/1966) | CTN | 117K |
| Código de Defesa do Consumidor (Lei 8.078/1990) | CDC | 91K |
| Código Penal Militar (DL 1.001/1969) | CPM | 206K |
| Código de Processo Penal Militar (DL 1.002/1969) | CPPM | 344K |
| Código Eleitoral (Lei 4.737/1965) | CE | 244K |
| Constituição Federal (1988) | CF/88 | 704K |

#### Leis Penais Especiais
- Lei de Crimes Hediondos (8.072/1990)
- Lei de Drogas (11.343/2006)
- Estatuto do Desarmamento (10.826/2003)
- Lei das Organizações Criminosas (12.850/2013)
- Lei de Tortura (9.455/1997)
- Lei de Lavagem de Dinheiro (9.613/1998)
- Lei de Crimes Ambientais (9.605/1998)
- Lei de Crimes Tributários (8.137/1990)
- Lei de Crimes Financeiros (7.492/1986)
- Lei de Abuso de Autoridade (13.869/2019)
- Lei das Contravenções Penais (DL 3.688/1941)

#### Leis de Execução e Processo
- Lei de Execução Penal (7.210/1984)
- Lei de Juizados Especiais (9.099/1995)
- Lei de Execuções Fiscais (6.830/1980)
- Nova Lei de Licitações (14.133/2021)

#### Estatutos e Outras
- ECA (8.069/1990)
- Lei Maria da Penha (11.340/2006)
- LGPD (13.709/2018)
- Estatuto dos Servidores Federais (8.112/1990)
- Lei Antitruste/CADE (12.529/2011)

#### Decretos de Indulto
- Indulto 2021 (D 10.913)
- Indulto 2022 (D 11.302)
- Indulto 2023 (D 11.846)
- Indulto 2024 (D 12.338)
- Indulto 2025 (D 12.790)

### Arquivos Modificados
- `scripts/extractLegislacao.cjs` - [NOVO] Extração individual
- `scripts/reextractLegislacao.cjs` - [NOVO] Extração em lote
- `knowledge/legislacao/` - 64 arquivos de legislação
- `.agent/workflows/atualizar-legislacao.md` - [NOVO] Workflow

---

## v0.2.1 - Jurisprudência STJ Repetitivos (21/01/2026)

### 📚 Base de Jurisprudência v2.2.0

| Fonte | Tipo | Quantidade |
|-------|------|------------|
| TJRN | Acórdãos criminais | 2.331 |
| STF | Repercussão Geral | 31 |
| STJ | Recursos Repetitivos | 75 |
| STJ | Súmulas | 25 |
| **Total** | | **2.462** |

### Temas STJ Incluídos
- Tema 1084, 1106, 1120, 1126, 1152, 1165, 1196, 1208, 1236, 1272

---

## v0.2.0 - Redesenho do Pipeline (20/01/2026)

### 🎯 Profundidade Jurídica (6 Níveis)
- Telegráfico → Padrão → Normativo → Doutrinário → Tribunais → Ampliado

### 🔍 Detecção Automática de Matéria
### 👍 Sistema de Feedback

---

## v0.1.5 - Sistema de Doutrina (20/01/2026)
- 34 volumes de doutrina em PDF processados
- Integração com pipeline de IA

---

## v0.1.4 - Modelos SEEU Base Única (20/01/2026)
- 290 modelos estruturados em 43 agrupadores
- Pesquisa e navegação por grupo

---

## v0.1.3 - Migração SEEU (19/01/2026)
- Banco de modelos importado do SEEU
- 145 categorias identificadas

---

## v0.1.2 - Multi-IA RAG (19/01/2026)
- Integração com 5 provedores (Gemini, Claude, Perplexity, Grok, OpenAI)
- Backend proxy para requisições seguras

---

## v0.1.1 - Estrutura Base (19/01/2026)
- Layout 4 colunas funcional
- 8 matérias configuradas
- Estado Zustand implementado

---

## v0.1.0 - MVP Inicial (19/01/2026)
- Estrutura React + Vite + TypeScript
- Pipeline simulado
