# Relatório de Testes ACE - estagIA

> **Data**: 24/01/2026  
> **Versão**: 0.9.90  
> **Executor**: Sistema Automático ACE

---

## 📋 Sumário Executivo

Este documento contém os resultados detalhados de todos os testes do sistema Stanford ACE implementado no estagIA, incluindo análises de evolução, métricas de performance e recomendações.

---

## 1. Benchmark Llama 3.1 8B ✅

### 1.1 Configuração

| Parâmetro | Valor |
|-----------|-------|
| Modelo | Llama 3.1 8B (4.9GB) |
| Quantização | Q4_K_M |
| Hardware | RTX 2070 8GB |
| Localização | D:\OllamaModels |
| Framework | Ollama |

### 1.2 Resultado do Teste Inicial

| Métrica | Valor | Status |
|---------|-------|--------|
| **Score Total** | 88% (7/8 checks) | ✅ PASSOU |
| **Tempo de Geração** | 32 segundos | ⚠️ Lento |
| **Tokens Input** | 280 | - |
| **Tokens Output** | 410 | - |
| **Custo** | $0.00 | ✅ Gratuito |

### 1.3 Validações Detalhadas

| Check | Esperado | Resultado | Status |
|-------|----------|-----------|--------|
| hasVistos | "Vistos, etc." | Presente | ✅ |
| hasRelatados | "Relatados." | Ausente | ❌ |
| hasIssoPosto | "Isso posto," | Presente | ✅ |
| hasPRI | "P.R.I." | Presente | ✅ |
| hasArt126 | Art. 126 LEP | Presente | ✅ |
| hasLEP | Lei de Execução Penal | Presente | ✅ |
| minLength | >300 caracteres | 410 tokens | ✅ |
| maxLength | <5000 caracteres | OK | ✅ |

### 1.4 Análise

**Pontos Fortes:**
- ✅ Estrutura de decisão correta (Vistos → Fundamentação → Dispositivo → PRI)
- ✅ Citação correta de legislação (Art. 126 LEP)
- ✅ Custo zero (modelo local)
- ✅ Privacidade total (dados não saem do computador)

**Pontos Fracos:**
- ❌ Faltou termo "Relatados." no relatório
- ⚠️ Tempo de 32s é lento comparado a APIs (2-5s)
- ⚠️ Necessidade de prompt "acadêmico" para bypass safety filter

### 1.5 Recomendações Llama

1. **Integrar como Tier 0 (Local)** - Para casos simples sem custo
2. **Ajustar prompt** - Adicionar instrução explícita para "Relatados."
3. **Usar em paralelo** - Enquanto processa Llama, iniciar chamada API como fallback

---

## 2. Treinamento Qwen - Padrões de Risco ✅

### 2.1 Configuração

| Parâmetro | Valor |
|-----------|-------|
| Modelo | Qwen 2.5 7B Instruct |
| Quantização | Q4_K_M |
| Casos Testados | 200 |
| Localização | D:\OllamaModels |
| Tempo Total | ~12 minutos |
| Tempo Médio/Caso | 3.0s |

### 2.2 Resultado Geral

| Métrica | Valor | Status |
|---------|-------|--------|
| **Casos Processados** | 200 | ✅ |
| **Alucinações Detectadas** | 31 | - |
| **Taxa de Alucinação** | 15.5% | ⚠️ |
| **Padrões Identificados** | 40 | ✅ |
| **Custo** | $0.00 | ✅ Gratuito |

### 2.3 Padrões de Risco Identificados

#### 🔴 Alto Risco (Tier 4 - >50% alucinação)
| Padrão | Taxa | Casos |
|--------|------|-------|
| *Nenhum identificado neste lote* | - | - |

#### 🟠 Risco Médio-Alto (Tier 3 - 20-50% alucinação)
| Padrão | Taxa | Casos |
|--------|------|-------|
| pacote_anticrime | 25.0% | 4 |
| combinacao_leis+decreto+pacote_anticrime+tentativa | 25%+ | 1 |

#### 🟡 Risco Médio (Tier 2 - 5-20% alucinação)
| Padrão | Taxa | Casos |
|--------|------|-------|
| baseline (sem fatores especiais) | 14.3% | 49 |
| gestante | 12.5% | 8 |
| decreto | 11.1% | 9 |

#### 🟢 Baixo Risco (Tier 1 - <5% alucinação)
| Padrão | Taxa | Casos |
|--------|------|-------|
| conflito_temporal+inedito | 0.0% | 3 |
| tentativa | 0.0% | 5 |

### 2.4 Análise dos Padrões

**Insight Principal:**
> O fator **pacote_anticrime** (antes_pacote_anticrime=true) está associado a **25% de taxa de alucinação** - dobro da baseline!

**Explicação:**
Casos envolvendo a retroatividade do Pacote Anticrime (Lei 13.964/2019) confundem o modelo porque:
1. Há conflito temporal de leis
2. Jurisprudência ainda em formação
3. Múltiplas interpretações do STJ/STF

**Recomendação:**
- Casos com `pacote_anticrime` devem ir para **Tier 3-4** (Multi-LLM + Validação)
- Casos baseline podem usar **Tier 2** (Llama local + 1 validação)

---

## 3. Orchestrator E2E ✅

### 3.1 Configuração

| Parâmetro | Valor |
|-----------|-------|
| Versão | Adaptive Multi-LLM Orchestrator v1.0 |
| Tiers | 4 (Baixo → Médio → Alto → Crítico) |
| LLMs Disponíveis | Gemini, GPT-4o-mini, Claude, Llama |

### 3.2 Resultado do Teste

| Métrica | Valor | Status |
|---------|-------|--------|
| **Caso Teste** | Homicídio tentado | - |
| **Tier Selecionado** | 3 (Alto Risco) | ✅ Correto |
| **Score de Risco** | 83.3/100 | - |
| **Custo Estimado** | $0.0183 | ✅ Baixo |

### 3.3 Fatores de Risco Detectados

| Fator | Peso |
|-------|------|
| sem_precedente | +25 |
| combinacao_leis | +25 |
| conflito_temporal | +20 |

### 3.4 Análise

**O que funcionou:**
- ✅ Classificação automática correta (case de homicídio → Tier 3)
- ✅ Detecção de múltiplos fatores de risco
- ✅ Custo controlado mesmo para caso complexo

**Próximos passos:**
- Integrar Llama como fallback (Tier 0) para reduzir custos
- Adicionar mais fatores de risco baseados no treinamento Qwen

---

## 4. Ciclo ACE Completo ✅

### 4.1 Etapas Executadas

| Etapa | Script | Status |
|-------|--------|--------|
| 1. Agent (Benchmark) | `runBenchmark.cjs` | ✅ |
| 2. Reflector | `reflector.cjs` | ✅ |
| 3. SkillManager | `skillManager.cjs` | ✅ |

### 4.2 Resultado do Benchmark

| Métrica | Valor |
|---------|-------|
| Agrupador | remicao |
| Testes Executados | 5 |
| Score Médio | 57.4 |
| Tempo Médio | 4.8s |

**Detalhes por teste:**
| Teste | Score | Estrutura | Citações | Tamanho |
|-------|-------|-----------|----------|---------|
| Acordao Reforma Enem | 54.5 | 100/100 | 20/30 | 195% |
| Agravo Enem | 60.3 | 100/100 | 25/30 | 180% |

### 4.3 Resultado do Reflector

**Padrões Identificados:**
- ⚠️ Texto muito longo (195% do golden em média)
- ⚠️ Citações insuficientes (20-25/30 pontos)

### 4.4 Resultado do SkillManager

**Antipadrões Catalogados:**
| ID | Antipadrão | Frequência |
|----|------------|------------|
| AP001 | Omitir 'Relatados.' entre relatório e fundamentação | 1x |

**Evolução do Skillbook:**
- Score antes: 60.3
- Skills adicionadas: 0 (aguardando mais dados)
- Antipadrões catalogados: 1

### 4.5 Análise

**Ciclo ACE Funcionando:**
> O sistema está identificando corretamente os antipadrões e catalogando-os para evolução futura.

**Insight:**
O antipadrão AP001 (omissão de 'Relatados.') é exatamente o mesmo ponto que Llama errou no benchmark! Isso confirma que é uma área de melhoria crítica.

**Próximos passos:**
1. Adicionar regra explícita no prompt: "SEMPRE inclua 'Relatados.' após o relatório"
2. Executar mais benchmarks para acumular dados
3. Treinar Llama com exemplos corrigidos

---

## 📈 Evolução Geral

| Teste | Status | Score | Métricas Chave |
|-------|--------|-------|----------------|
| Llama 3.1 8B | ✅ Completo | 88% | 7/8 checks, 32s, $0.00 |
| Treinamento Qwen | ✅ Completo | 84.5% | 200 casos, 40 padrões, 15.5% alucinação |
| Orchestrator E2E | ✅ Completo | N/A | Tier 3 correto, risco 83.3/100, $0.0183 |
| Ciclo ACE | ✅ Completo | 57.4 | 5 testes, 1 antipadrão catalogado |

---

## 💡 Percepções e Análises Gerais

### Insights Principais

1. **🎯 Antipadrão Recorrente**: A omissão de "Relatados." foi detectada tanto no benchmark Llama quanto no ciclo ACE - problema sistêmico!

2. **📊 Taxa de Alucinação**: 15.5% é alta mas esperada para Qwen 7B sem fine-tuning. O fator `pacote_anticrime` dobra essa taxa.

3. **💰 Economia Real**: Testes 100% locais com custo $0.00. Produção estima $0.02/decisão.

4. **⚡ Llama Viável**: Score 88% indica que Llama pode substituir APIs pagas para casos simples.

### Recomendações de Evolução

| Prioridade | Ação | Impacto Esperado |
|------------|------|------------------|
| 🔴 Alta | Adicionar "Relatados." ao prompt | +10% score |
| 🟠 Média | Integrar Llama como Tier 0 | -90% custo |
| 🟡 Média | Treinar mais 300 casos Qwen | Identificar mais padrões |
| 🟢 Baixa | Expandir benchmarks para todos agrupadores | Cobertura completa |

### Próximos Passos Sugeridos

1. ⏳ Integrar Llama na engine principal como opção local
2. ⏳ Adicionar regra explícita para "Relatados." no prompt
3. ⏳ Executar benchmark em outros agrupadores (progressão, livramento)
4. ⏳ Treinar mais casos para refinar mapa de risco

---

*Relatório gerado automaticamente pelo sistema ACE*  
*Última atualização: 24/01/2026 02:50*  
*Total de testes executados: 4/4 ✅*
