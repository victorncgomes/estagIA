# estagIA - Blueprint do Projeto

> **Versão Atual**: 0.9.90  
> **Status**: Sistema Adaptive Multi-LLM + Anti-Alucinação  
> **Data de Início**: 19/01/2026  
> **Última Atualização**: 24/01/2026

---

## 📋 Sumário


1. [Visão Geral](#visão-geral)
2. [O Que é estagIA](#o-que-é-estagia)
3. [Arquitetura do Sistema](#arquitetura-do-sistema)
4. [Stack Tecnológico](#stack-tecnológico)
5. [Estrutura de Diretórios](#estrutura-de-diretórios)
6. [Componentes Principais](#componentes-principais)
7. [Pipeline Multi-IA](#pipeline-multi-ia)
8. [Sistema Anti-Alucinação](#sistema-anti-alucinação)
9. [Integração com APIs](#integração-com-apis)
10. [Roadmap de Versões](#roadmap-de-versões)

---

## 🎯 Visão Geral

**estagIA** é um assistente inteligente de elaboração de minutas de decisões, sentenças e despachos judiciais, desenvolvido para a **1ª Vara Regional de Execução Penal do TJRN**.

### Problema que Resolve

- ⏱️ **Reduzir tempo** de elaboração de minutas de decisão
- ✅ **Eliminar erros** de cálculo e inconsistências
- 📝 **Manter padrão** de redação consistente (estilo do magistrado)
- 🛡️ **Evitar alucinações** de dados (eventos, datas, jurisprudência)
- 📦 **Permitir processamento** em lote para mutirões

### Usuários-Alvo

- Analistas Judiciários de Varas de Execução Penal
- Assessores de Magistrados
- Magistrados (para revisão e assinatura)

---

## 💡 O Que é estagIA

estagIA combina múltiplas ferramentas de IA num **pipeline estruturado** para:

1. **Receber insumos processuais** (RSPE, manifestações MP/Defesa, arquivos)
2. **Extrair dados estruturados** via OCR e parsing inteligente
3. **Validar informações** contra fontes oficiais (anti-alucinação)
4. **Gerar minutas formatadas** no estilo específico do magistrado
5. **Gerar prompts otimizados** para uso em outras plataformas de IA

### Funcionalidades Principais

| Funcionalidade | Descrição |
|---|---|
| **Interface 4 Colunas** | Matéria → Insumos → Orientações → Saída |
| **OCR Multi-Engine** | Gemini Vision + Google Vision + Azure + Tesseract |
| **Pipeline Multi-IA** | GPT-4 → Perplexity → Gemini → Grok → Claude |
| **Anti-Alucinação** | 5 camadas de validação cruzada |
| **Banco de Minutas** | Biblioteca de decisões para RAG e aprendizado |
| **Validador Jurisprudência** | Verificação em .jus.br |
| **Modo Batch** | Processamento em lote para mutirões |
| **Perfis de Estilo** | Templates por magistrado (MVP: Baltazar) |

---

## 🏗️ Arquitetura do Sistema

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React)                         │
│  ┌──────────┬──────────┬──────────┬──────────┐                 │
│  │ Coluna 1 │ Coluna 2 │ Coluna 3 │ Coluna 4 │                 │
│  │ Matéria  │ Insumos  │Orientação│  Saída   │                 │
│  │  (15%)   │  (35%)   │  (20%)   │  (30%)   │                 │
│  └──────────┴──────────┴──────────┴──────────┘                 │
└─────────────────────────┬───────────────────────────────────────┘
                          │ API REST
┌─────────────────────────▼───────────────────────────────────────┐
│                     BACKEND (Python FastAPI)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   OCR       │  │  Pipeline   │  │  Validador  │             │
│  │  Engine     │  │  Multi-IA   │  │Jurisprudênc.│             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────┬───────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────┐
│                      SUPABASE                                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │ PostgreSQL  │  │    Auth     │  │   Storage   │             │
│  │  (dados)    │  │  (login)    │  │  (backups)  │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────┐
│                    PROVEDORES DE IA                              │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │ OpenAI │ │Anthropic│ │ Gemini │ │Perplexi│ │  xAI   │       │
│  │  GPT   │ │ Claude │ │        │ │   ty   │ │  Grok  │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnologia | Versão | Propósito |
|---|---|---|
| React | 19.x | Framework UI |
| Vite | 6.x | Build tool + Dev server |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | CDN | Estilização |
| Zustand | 5.x | Estado global |
| Lucide React | 0.562.x | Ícones |

### Backend (Planejado)

| Tecnologia | Propósito |
|---|---|
| Python 3.11+ | Linguagem principal |
| FastAPI | Framework API |
| Celery + Redis | Tarefas assíncronas |
| Supabase | Banco de dados + Auth |

### APIs Externas

| Provedor | Modelo/API | Propósito |
|---|---|---|
| OpenAI | GPT-4 Turbo | Extração estruturada |
| Anthropic | Claude Sonnet | Redação final |
| Google | Gemini 1.5 Pro | Validação + OCR |
| Perplexity | pplx-70b-online | Checagem de fontes |
| xAI | Grok | Verificação adicional |
| Google Cloud | Vision API | OCR robusto |
| Azure | Computer Vision | OCR fallback |

---

## 📁 Estrutura de Diretórios

```
estagIA/
├── public/
│   └── Logo.svg              # Logo oficial do projeto
├── components/
│   ├── Header.tsx            # Barra superior com navegação
│   ├── ColumnMatters.tsx     # Coluna 1: Seleção de matéria
│   ├── ColumnInputs.tsx      # Coluna 2: Entrada de insumos
│   ├── ColumnGuidance.tsx    # Coluna 3: Orientações
│   └── ColumnOutput.tsx      # Coluna 4: Saída (decisão/prompt)
├── services/
│   └── pipeline.ts           # Simulação do pipeline multi-IA
├── docs/
│   ├── BLUEPRINT.md          # Este documento
│   ├── CHANGELOG.md          # Histórico de versões
│   └── IMPLEMENTATION_PLAN.md # Plano de implementação detalhado
├── App.tsx                   # Componente principal
├── index.tsx                 # Entry point
├── index.html                # HTML base
├── store.ts                  # Estado global (Zustand)
├── types.ts                  # Definições TypeScript
├── constants.ts              # Constantes (matérias, perfis)
├── vite.config.ts            # Configuração Vite
├── package.json              # Dependências
└── tsconfig.json             # Configuração TypeScript
```

---

## 🧩 Componentes Principais

### Coluna 1 - Matéria (15%)

Seleção do tipo de decisão a ser gerada.

**Matérias do MVP:**
1. Retificação de GEP (fração/progressão)
2. Remição (leitura/trabalho/estudo)
3. Livramento Condicional
4. Monitoramento Eletrônico
5. Multa/Hipossuficiência
6. Falta Média
7. Agravo em Execução
8. Pedido de Reconsideração

### Coluna 2 - Insumos (35%)

Entrada massiva de dados do processo.

**Abas:**
- RSPE (Relatório da Situação Processual Executória)
- MP (Manifestação do Ministério Público)
- Defesa (Manifestação da Defesa)
- Outros (Sentenças, certidões)
- Arquivos (Upload com OCR automático)

### Coluna 3 - Orientações (20%)

Controle editorial da decisão.

**Campos:**
- Perfil de Estilo (Baltazar, Didático, Breve)
- Orientações de Mérito (como deve ser a decisão)
- Dispositivo (texto específico opcional)
- Slider Prolixidade (1-5: Telegráfico → Exaustivo)
- Slider Pesquisa Internet (1-5: OFF → Internet ampla)

### Coluna 4 - Saída (30%)

Exibição do resultado gerado.

**Abas:**
- Decisão (texto editável)
- Prompt (para usar em outras IAs)
- Log (timeline do processamento)

---

## 🤖 Pipeline Multi-IA

```
INSUMOS → [GPT-4] → [Perplexity] → [Gemini] → [Grok] → [Claude] → DECISÃO
              ↓           ↓            ↓          ↓          ↓
         Extração    Coerência    Validação  Segunda   Redação
        Estruturada  + Fontes     de Dados   Opinião   Final
```

### Etapas do Pipeline

| # | Engine | Função | Output |
|---|---|---|---|
| 1 | GPT-4 Turbo | Extração estruturada | JSON com fatos rastreados |
| 2 | Perplexity | Checagem de coerência | Validação de fontes |
| 3 | Gemini 1.5 Pro | Validação de dados | Alerta de alucinações |
| 4 | Grok | Verificação adicional | Segunda opinião |
| 5 | Claude Sonnet | Redação final | Decisão formatada |

---

## 🛡️ Sistema Anti-Alucinação

### Princípios Fundamentais

1. **NUNCA ALUCINAR**: A aplicação não pode inventar dados
2. **ENTRADA GIGANTE**: Quanto mais contexto, menos erro
3. **RASTREABILIDADE**: Todo fato deve ter origem identificável
4. **ESTILO CONSISTENTE**: Decisões devem seguir padrão do juiz
5. **VERIFICAÇÃO CRUZADA**: Múltiplas IAs conferem o trabalho

### 5 Camadas de Proteção

| Camada | Descrição |
|---|---|
| 1. Prompt Engineering | Regras absolutas no system prompt |
| 2. Schema de Origem | Todo dado carrega metadado de origem |
| 3. Validação Cruzada | Gemini compara estrutura com documentos |
| 4. Jurisprudência Verificada | Busca em stf.jus.br / stj.jus.br |
| 5. Marcadores de Lacuna | [DADO AUSENTE: descrição] |

---

## 🔌 Integração com APIs

### Chaves de API Necessárias

```env
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_AI_API_KEY=...
PERPLEXITY_API_KEY=...
XAI_API_KEY=...
GOOGLE_CLOUD_VISION_KEY=...
AZURE_VISION_KEY=...
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
```

---

## 🗓️ Roadmap de Versões

### v0.1.x - MVP Fundacional ✅

- [x] Estrutura base React + Vite + TypeScript
- [x] Layout 4 colunas
- [x] 8 matérias configuradas
- [x] Estado Zustand
- [x] Pipeline multi-IA funcional
- [x] Integração com 5 provedores de IA

### v0.2.x - Base de Conhecimento ✅

- [x] Pipeline real com todos os providers
- [x] Banco de modelos SEEU (290 modelos, 43 grupos)
- [x] Base de jurisprudência (2.462 julgados)
- [x] Base de legislação (36 leis, atualização automática)
- [x] Sistema de doutrina (34 volumes)
- [x] Detecção automática de matéria
- [x] Sistema de feedback

### v0.3.x - Refinamento ✅

- [x] OCR multi-engine integrado
- [x] RAG Semântico In-Memory
- [x] Perfis de Estilo (Baltazar/Objetivo/Prolixo)
- [x] Deploy Vercel + Railway

### v0.4.x - Produção ✅

- [x] RAG para estilo do magistrado
- [x] Embeddings pré-computados (346 vetores)
- [x] Dashboard de métricas básico
- [x] Testes automatizados (100% aprovação)

### v0.9.x - Sistema Adaptive Multi-LLM ✅ (Atual)

- [x] **Skill ACE Linguagem** - Benchmark básico com rubricas Art. 489 CPC
- [x] **Skill RAG-ACE Optimizer v2.0** - Anti-alucinação multi-IA
  - Theme Identifier (433 modelos mapeados por 8 temas)
  - Hallucination Detector (valida citações, processos, frações)
  - Multi-IA Pipeline (Gemini→GPT→Claude→Perplexity→Grok)
  - Benchmark Engine (testes massivos)
- [x] **Skill Adaptive Multi-LLM Orchestrator**
  - Risk Detector (5 fatores → Score 0-100)
  - Voting Engine (votação ponderada por tipo de questão)
  - Orchestrator (4 Tiers de pipeline)
  - Risk Pattern Trainer (Qwen 7B local via Ollama)
- [x] **Treinamento de Padrões** - 21 padrões de risco identificados
- [x] **Taxa de Alucinação** - Baseline 28% (meta: <1%)

### v1.0.x - Próximos Passos (Planejado)

- [ ] Expandir treinamento Qwen (1000-10000 casos)
- [ ] Integrar padrões aprendidos no Risk Detector
- [ ] Evolution Engine (ciclo de autoevolução contínua)
- [ ] Dashboard de taxa de alucinação
- [ ] Reduzir taxa para <1%

## 📚 Documentos Relacionados

- [CHANGELOG.md](./CHANGELOG.md) - Histórico de todas as versões
- [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) - Plano detalhado de implementação

---

*Documento mantido pela equipe de desenvolvimento estagIA*  
*Última atualização: 19/01/2026*
