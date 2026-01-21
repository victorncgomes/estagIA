# CHANGELOG v0.1.3 - Tema Aurora Glassmórfico

**Data:** 2026-01-19

## Visão Geral
Implementação completa do tema dark aurora glassmórfico, baseado no mockup de referência JUDIT.

## Novos Arquivos

### `theme.css` - Design System Aurora
- **CSS Variables**: Paleta aurora completa (--bg-0, --ink-0, --aurora-blue, etc.)
- **Background Aurora**: 3 blobs radial-gradient com blur (cyan, purple, teal)
- **Classes Glass**: `.glass-panel`, `.glass-card`, `.glass-input`
- **Botões**: `.btn-primary-aurora` com gradiente cyan-purple e glow
- **Tabs**: `.segmented`, `.segmented-item`, `.segmented-active`
- **Sidebar**: `.sidebar-item`, `.sidebar-item-active`
- **Pills/Badges**: `.pill`, `.pill-ok`, `.pill-warn`, `.pill-bad`, `.pill-info`
- **Progress Bar**: `.progress-bar`, `.progress-fill` com gradiente aurora
- **Scrollbar**: 6px, translúcido

## Paleta de Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-0` | `#0B1020` | Background principal |
| `--bg-1` | `#0F172A` | Background secundário |
| `--ink-0` | `rgba(248,250,252,1)` | Texto principal |
| `--ink-1` | `rgba(226,232,240,0.92)` | Texto secundário |
| `--ink-2` | `rgba(148,163,184,0.90)` | Texto mutado |
| `--aurora-blue` | `#38BDF8` | Destaque principal |
| `--aurora-cyan` | `#22D3EE` | Destaque secundário |
| `--aurora-teal` | `#2DD4BF` | Gradientes |
| `--aurora-purple` | `#818CF8` | Acentos |

## Tipografia
- **Fonte principal:** Manrope (em TODA a aplicação)
- **Fonte mono:** JetBrains Mono (código/terminais)

## Componentes Atualizados
- `index.html`: Preload Manrope + CSS crítico
- `index.css`: Import theme.css + overrides Tailwind  
- `App.tsx`: Classe `.aurora-bg` para background
- `Header.tsx`: `.glass-panel` + `.pill` badges
- `ColumnMatters.tsx`: `.sidebar-item` + `.sidebar-item-active`
- `ColumnInputs.tsx`: `.segmented` tabs + `.glass-input`
- `ColumnGuidance.tsx`: Sliders aurora + `.btn-primary-aurora`
- `ColumnOutput.tsx`: `.progress-bar` + `.segmented` tabs
- `KnowledgeModal.tsx`: `.modal-overlay` + `.modal-content`
