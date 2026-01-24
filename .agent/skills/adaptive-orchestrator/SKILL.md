---
name: Adaptive Multi-LLM Orchestrator v1.0
description: Sistema adaptativo que escolhe pipeline multi-LLM baseado no risco do caso
---

# Adaptive Multi-LLM Orchestrator

Sistema inteligente que detecta complexidade do caso e ativa pipeline apropriado.

## Tiers

| Tier | Score | LLMs | Custo | Tempo | Confiança |
|------|-------|------|-------|-------|-----------|
| 1 | 0-20 | 1 | $0.0005 | 3s | 97% |
| 2 | 21-50 | 2-3 | $0.008 | 8s | 98.5% |
| 3 | 51-75 | 4-5 | $0.018 | 15s | 99.2% |
| 4 | 76-100 | 5-7 | $0.035 | 35s | 99.9% |

## Comandos

```
AVALIAR RISCO <caso>     → Score 0-100 + tier
PROCESSAR CASO <caso>    → Pipeline automático
FORÇAR TIER <N> <caso>   → Override manual
ANALYTICS TIERS          → Métricas
```

## Fatores de Risco

1. **Similaridade RAG** (30%) - Modelo similar? Jurisprudência?
2. **Complexidade Jurídica** (25%) - Conflito normas? Caso inédito?
3. **Variáveis Especiais** (20%) - Gestante? Tentativa? Decreto?
4. **Cálculos Complexos** (15%) - Múltiplas frações? Combinação leis?
5. **Histórico de Erro** (10%) - Tema com alucinações?

## Pipeline Tier 4 (Máxima Proteção)

```
1. 5 LLMs analisam (Gemini, GPT, Claude, DeepSeek, Perplexity)
2. Votação ponderada por questão
3. Fact-check triplo se divergência
4. Consolidação (Gemini)
5. Redação final (Claude Sonnet)
6. Validação tripla
7. Score final → humano se <99%
```
