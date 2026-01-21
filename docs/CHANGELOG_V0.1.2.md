# CHANGELOG v0.1.2 - Tema Dark Glassmórfico

**Data:** 2026-01-19

## Visão Geral
Aplicação do tema escuro glassmórfico inspirado no projeto JUDIT, com fonte Manrope em toda a aplicação.

## Mudanças

### Design System (`index.css`)
- Novo design system dark glassmórfico completo
- Variáveis CSS: `--bg-app: #0f172a`, `--glass-bg`, `--glass-border`
- Fonte Manrope como fonte primária via Google Fonts
- Componentes reutilizáveis: `.glass-card`, `.btn`, `.badge`, `.input`, `.progress-bar`
- Animações: `fadeIn`, `skeleton-loading`, `pulse`, `spin`
- Scrollbar estilo Fluent (transparente, 6px)

### Componentes Atualizados
- **Header.tsx**: Background `slate-900/80` com `backdrop-blur-xl`
- **ColumnMatters.tsx**: Cards com efeito glass e bordas translúcidas
- **ColumnInputs.tsx**: Inputs e tabs dark com indicadores de cor indigo
- **ColumnGuidance.tsx**: Sliders e botões com gradiente indigo-cyan
- **ColumnOutput.tsx**: Log com ícones coloridos e barra de progresso gradiente
- **KnowledgeModal.tsx**: Modal dark com backdrop blur

### Paleta de Cores
| Token | Valor |
|-------|-------|
| `--bg-app` | `#0f172a` |
| `--primary` | `#6366f1` (indigo) |
| `--accent` | `#06b6d4` (cyan) |
| `--success` | `#10b981` (emerald) |
| `--warning` | `#f59e0b` (amber) |
| `--error` | `#ef4444` (red) |

### Tipografia
- **Fonte primária:** Manrope (pesos 300-800)
- **Fonte mono:** JetBrains Mono
- **Tamanho base:** 0.95rem
