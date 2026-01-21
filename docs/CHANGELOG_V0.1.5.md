# estagIA - Changelog v0.1.5

## 🔍 Jurisprudência TJRN

**Data:** 21/01/2026

### Novos Recursos

#### Scraping de Jurisprudência
- **Script de Extração** (`scripts/scrapeTJRN.cjs`)
  - Puppeteer para navegação em SPA Angular
  - Extração automática de metadados (processo, classe, relator, data)
  - Captura do inteiro teor de cada decisão
  - Paginação automática (10 resultados por página)
  - Salvamento de progresso a cada 10 páginas

#### Base de Jurisprudência
- **800 acórdãos** do TJRN 2º Grau
- Termo de busca: "execução penal"
- Arquivo: `knowledge/jurisprudencia/tjrn_execucao_penal.json` (~3.8 MB)
- Estrutura por registro:
  - `processo` - Número do processo
  - `classe` - Tipo (Recurso Inominado Cível, Apelação, etc.)
  - `relator` - Nome do magistrado
  - `data` - Data do julgamento
  - `tipo` - Tipo do documento
  - `ementa` - Resumo da ementa
  - `textoResumo` - Texto completo (~5000 chars)

#### Serviço de Jurisprudência (`services/jurisprudencia.ts`)
- Carregamento do JSON com cache
- Busca por termo (multi-keyword)
- Filtro por classe
- Filtro por relator
- Estatísticas da base (total, classes, relatores, período)

#### Modal de Jurisprudência (`components/modals/JurisprudenciaModal.tsx`)
- Listagem com busca e filtro
- Dropdown de classes
- Contador de resultados
- Visualização de detalhes
- Metadados estruturados (processo, classe, relator, data)
- Inteiro teor completo
- Botão de copiar texto

### Interface

#### Header Atualizado
- Botão "Jurisprudência" ativo no dropdown "Banco de Modelos"
- Badge com contador (800)
- Ícone com cor âmbar

### Configuração

#### TypeScript
- `resolveJsonModule: true` adicionado ao `tsconfig.json`

#### Dependências
- `puppeteer` adicionado como devDependency para scraping

### Outras Integrações

#### OpenAI (GPT-4 Turbo)
- Provider configurado no backend
- Rota `/api/openai` funcionando
- Health check atualizado

#### Firecrawl
- API Key configurada no `.env`
- Preparado para futuras integrações de scraping

---

## Arquivos Modificados/Criados

### Novos
- `scripts/scrapeTJRN.cjs`
- `services/jurisprudencia.ts`
- `components/modals/JurisprudenciaModal.tsx`
- `knowledge/jurisprudencia/tjrn_execucao_penal.json`
- `docs/CHANGELOG_V0.1.5.md`

### Modificados
- `components/Header.tsx`
- `tsconfig.json`
- `backend/.env`
- `backend/server.js`
- `services/ai/index.ts`
- `services/ai/openai.ts`

---

## Estatísticas

| Métrica | Valor |
|---------|-------|
| Jurisprudências | 800 |
| Classes únicas | 21 |
| Relatores únicos | 23 |
| Tamanho JSON | 3.8 MB |
| Linhas JSON | 11.211 |
