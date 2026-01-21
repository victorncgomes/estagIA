---
description: Atualizar base de legislação do Planalto
---

# Atualizar Legislação

Este workflow sincroniza o conteúdo das legislações com as fontes oficiais do Planalto.

## Passos

// turbo-all

1. Execute o script de re-extração:
```bash
node scripts/reextractLegislacao.cjs
```

2. Se precisar adicionar novas leis, use o script de extração individual:
```bash
node scripts/extractLegislacao.cjs "https://www.planalto.gov.br/..."
```

3. Verifique o índice atualizado:
```bash
cat knowledge/legislacao/legislacao_index.json | jq '.meta'
```

## Scripts Disponíveis

- `scripts/extractLegislacao.cjs` - Extrai uma lei individual do URL
- `scripts/reextractLegislacao.cjs` - Re-extrai todas as leis marcadas como pendentes

## Estrutura de Arquivos

```
knowledge/legislacao/
├── legislacao_index.json      # Índice com URLs e metadados
├── [id]_em_vigor.txt          # Texto consolidado atual
└── [id]_historico_revogado.txt # Trechos revogados (histórico)
```

## Formato do Índice

Cada lei no índice contém:
- `id`: Identificador único
- `titulo`: Nome completo da lei
- `apelido`: Abreviação (ex: CP, CPP, LEP)
- `url`: Link do Planalto para atualização
- `arquivoVigor`: Nome do arquivo com texto atual
- `arquivoHistorico`: Nome do arquivo com histórico
- `tamanhoVigor`: Quantidade de caracteres
- `trechosRevogados`: Quantidade de trechos alterados
- `ultimaAtualizacao`: Data da última extração
- `pendente`: Se true, precisa ser re-extraída

## Lógica de Extração

O script identifica texto em vigor vs revogado:
- **Texto em vigor**: Todo texto NÃO dentro de tags `<strike>`
- **Texto revogado**: Conteúdo dentro de tags `<strike>` (riscado)
