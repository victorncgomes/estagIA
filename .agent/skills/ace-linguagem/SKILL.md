---
name: ACE Linguagem
description: Sistema de auto-aprimoramento contínuo para geração de decisões judiciais
---

# ACE Linguagem - Skill de Aprimoramento

Sistema evolutivo inspirado no [ACE Framework](https://arxiv.org/abs/2510.04618) da Stanford/SambaNova.

## Comandos de Ativação

| Comando | Ação |
|---------|------|
| `APRIMORE LINGUAGEM` | Ciclo completo de aprimoramento |
| `DRY TEST [agrupador]` | Executa testes em agrupador específico |
| `BENCHMARK ACE` | Gera relatório de métricas atual |
| `MOSTRE SKILLBOOK` | Exibe skills aprendidas |

## Ciclo de Aprimoramento

```
1. Agent → Gera decisão usando Skillbook
2. Reflector → Compara com golden truth, aplica rubricas
3. SkillManager → Extrai padrões, atualiza Skillbook
4. Repete até score alvo (default: 75)
```

## Executar Manualmente

### Benchmark Rápido
```bash
node .agent/skills/ace-linguagem/scripts/runBenchmark.cjs --agrupador=remicao --limit=3
```

### Benchmark Completo
```bash
node .agent/skills/ace-linguagem/scripts/runBenchmark.cjs --agrupador=remicao --epochs=5 --compare
```

### Ver Skillbook
```bash
type knowledge\ace\skillbook.json
```

## Métricas de Qualidade

| Métrica | Peso | Critérios |
|---------|------|-----------|
| Estrutura Art. 489 CPC | 40% | Vistos, Relatados, Isso posto, P.R.I. |
| Citações ABNT | 30% | Formato autor, obra, editora, página |
| Tamanho | 20% | Ratio 70%-130% do golden |
| Linguagem | 10% | Formalidade, tecnicidade |

## Arquivos da Skill

```
.agent/skills/ace-linguagem/
├── SKILL.md              # Este arquivo
├── scripts/
│   ├── runBenchmark.cjs  # Runner de benchmarks
│   ├── reflector.cjs     # Analisador de qualidade
│   └── skillManager.cjs  # Gerenciador de Skillbook
└── resources/
    ├── rubricas.json     # Critérios de avaliação
    └── config.json       # Configuração de benchmark

knowledge/ace/
├── skillbook.json        # Skillbook evolutivo
└── resultados/           # Histórico de testes
```
