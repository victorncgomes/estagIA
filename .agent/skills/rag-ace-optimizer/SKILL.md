---
name: RAG-ACE Optimizer v2.0
description: Sistema autoevolutivo para eliminar alucinações através de fact-checking multi-IA e benchmarking contínuo
---

# RAG-ACE Optimizer v2.0

Sistema de eliminação de alucinações baseado no framework ACE da Stanford.

## Comandos

| Comando | Ação |
|---------|------|
| `ACE IDENTIFY THEMES` | Mapeia temas em todo o banco de conhecimento |
| `ACE OPTIMIZE RAG --tema=remicao` | Otimiza RAG para um tema |
| `ACE BENCHMARK --tema=remicao --testes=100` | Executa benchmark |
| `ACE EVOLVE --continuous` | Evolução contínua |
| `ACE REPORT` | Relatório de progresso |

## Arquitetura

```
1. Theme Identifier    → Mapeia conhecimento por tema
2. Hallucination Detector → Valida citações/cálculos
3. Multi-IA Pipeline   → Gemini→GPT→Claude→Perplexity/Grok
4. Benchmark Engine    → Testes massivos
5. Reflector          → Aprende com erros
6. Evolution Engine   → Evolução contínua
```

## Pipeline Multi-IA

```
Gemini Flash  → Gera decisão base (rápido)
    ↓
GPT-4o-mini   → Melhora argumentação
    ↓
Claude Sonnet → Redação final jurídica
    ↓
Perplexity    → Fact-check citações ← CRÍTICO
    ↓
Grok          → Validação final
```

## Métricas

| Métrica | Meta |
|---------|------|
| Taxa de alucinação | <1% |
| Contexto médio | <20k tokens |
| Precisão | >98% |

## Executar Manualmente

```bash
# Identificar temas
node .agent/skills/rag-ace-optimizer/scripts/themeIdentifier.cjs

# Benchmark
node .agent/skills/rag-ace-optimizer/scripts/benchmarkEngine.cjs --tema=remicao --testes=100

# Evolução contínua
node .agent/skills/rag-ace-optimizer/scripts/evolutionEngine.cjs --continuous
```

## Arquivos

```
scripts/
├── themeIdentifier.cjs      # Mapeia temas
├── hallucinationDetector.cjs # Detecta alucinações
├── multiIAPipeline.cjs      # Pipeline multi-IA
├── benchmarkEngine.cjs      # Testes massivos
├── reflectorAdvanced.cjs    # Aprendizado
└── evolutionEngine.cjs      # Evolução contínua
```
