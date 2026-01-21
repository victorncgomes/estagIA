# estagIA - Changelog Consolidado

> **Versão Atual**: 0.2.2  
> **Última Atualização**: 21/01/2026

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
