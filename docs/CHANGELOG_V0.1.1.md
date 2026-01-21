# estagIA - Changelog v0.1.1

## Data: 2026-01-19

## Resumo
Implementação completa do sistema Multi-IA com APIs reais funcionando.

---

## ✅ Correções e Implementações

### 1. Backend Proxy (porta 3108)
- Servidor Express funcionando em `localhost:3108`
- Proxy seguro para APIs: Gemini, Anthropic, Grok, Perplexity
- Carregamento correto do `.env` com `dotenv/config`
- Endpoint de health check em `/api/health`

### 2. APIs de IA Conectadas
| Provider | Status | Modelo |
|----------|--------|--------|
| Gemini | ✅ | gemini-2.0-flash-001 |
| Anthropic | ✅ | claude-3-5-sonnet-20241022 |
| Grok | ✅ | grok-beta |
| Perplexity | ❌ | Falta chave |
| OpenAI | ❌ | Falta chave |

### 3. Pipeline Real de Geração
- **Fase 1 - Extração (Gemini):** Extrai dados estruturados dos documentos
- **Fase 2 - Validação (Gemini):** Anti-alucinação e verificação de consistência
- **Fase 3 - Redação (Claude):** Geração da decisão final com perfil de estilo

### 4. Interface Funcional
- Versão corrigida para **v0.1.1**
- Logo SVG real carregando
- Badge dinâmico mostrando IAs ativas
- Dropdowns funcionais: Configurações, Minutas, Perfil
- Toggle Modo Batch funcional
- Exibição de modelo dinâmico no footer

---

## Arquivos Modificados
- `backend/server.js` - Porta 3108 + dotenv
- `services/ai/config.ts` - URL do backend atualizada
- `services/pipeline.ts` - Pipeline real com APIs
- `components/Header.tsx` - v0.1.1 + dropdowns funcionais
- `components/ColumnOutput.tsx` - Modelo dinâmico
- `store.ts` - batchMode + selectedModel
- `types.ts` - Tipos atualizados

---

## Para Executar
```bash
# Terminal 1: Frontend (porta 3008)
npm run dev

# Terminal 2: Backend (porta 3108)
cd backend && node server.js
```
