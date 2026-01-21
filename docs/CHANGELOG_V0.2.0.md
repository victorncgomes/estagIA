# Changelog v0.2.0 - Redesenho do Pipeline

**Data:** 2026-01-20

## Resumo

Redesenho completo do pipeline de geração de minutas com foco em:
- Identificação automática de matéria
- Sistema de feedback para aprendizado contínuo
- Novo sistema de níveis "Profundidade Jurídica"

---

## Novas Funcionalidades

### 🎯 Profundidade Jurídica (6 Níveis)

Substitui os controles separados de "Prolixidade" e "Pesquisa Internet":

| Nível | Nome | Fonte de Dados |
|-------|------|----------------|
| 1 | Telegráfico | Sem fundamentação |
| 2 | **Padrão** | 290 modelos SEEU |
| 3 | Normativo | + Legislação |
| 4 | Doutrinário | + Doutrina local |
| 5 | Tribunais | + Sites .jus.br |
| 6 | Ampliado | + Internet geral |

### 🔍 Detecção Automática de Matéria

- Sistema identifica matéria pelo texto do RSPE/MP/Defesa
- Indicador visual na Coluna 2
- Matérias: Remição, Livramento, GEP, Monitoramento, Multa, Falta, Agravo

### 👍 Sistema de Feedback

- Botões thumbs up/down após geração
- Diálogo para comentários
- Armazenamento para retroalimentação

---

## Arquivos Modificados

### Componentes
- `ColumnGuidance.tsx` - Novo slider de 6 níveis
- `ColumnOutput.tsx` - Integração de feedback
- `ColumnInputs.tsx` - Detecção automática de matéria
- `FeedbackDialog.tsx` - [NOVO] Componente de feedback

### Serviços
- `materiaDetector.ts` - [NOVO] Engine de detecção
- `feedbackService.ts` - [NOVO] Persistência de feedback

### Estado
- `types.ts` - Novos tipos (ProfundidadeJuridicaNivel, FeedbackData)
- `store.ts` - Novos campos e actions

### Diretórios
- `knowledge/feedback/positivo/` - [NOVO]
- `knowledge/feedback/negativo/` - [NOVO]

---

## Build

```
✓ 1723 modules transformed
✓ built in 8.27s
```
