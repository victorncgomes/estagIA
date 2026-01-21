# Changelog v0.2.1 - Expansão da Base de Jurisprudência

**Data:** 2026-01-21

## Resumo

Extração massiva de jurisprudência dos tribunais superiores (STF e STJ) e integração completa ao serviço de jurisprudência.

---

## Novas Funcionalidades

### 📚 Base de Jurisprudência v2.2.0

| Fonte | Tipo | Quantidade |
|-------|------|------------|
| TJRN | Acórdãos criminais | 2.331 |
| STF | Repercussão Geral | 31 |
| **STJ** | **Recursos Repetitivos** | **75** |
| STJ | Súmulas | 25 |
| **Total** | | **2.462** |

### 🏛️ STJ Recursos Repetitivos (75 acórdãos)

Temas incluídos:
- **Tema 1084** - Retroatividade progressão regime (reincidente genérico)
- **Tema 1106** - Execução simultânea pena restritiva/privativa
- **Tema 1120** - Remição durante pandemia COVID-19
- **Tema 1126** - Prescrição falta disciplinar (3 anos)
- **Tema 1152** - Progressão x inadimplemento multa
- **Tema 1165** - Data-base progressão (requisito objetivo/subjetivo)
- **Tema 1196** - Aplicação retroativa 50% crime hediondo + morte
- **Tema 1208** - Reincidência reconhecida pelo juízo da execução
- **Tema 1236** - Remição por EAD (requisitos)
- **Tema 1272** - Adicional noturno agente penitenciário federal

---

## Arquivos Modificados

### Serviços
- `services/jurisprudencia.ts` - v2.2.0 (integração STJ Repetitivos)

### Base de Dados
- `knowledge/jurisprudencia/stj_repetitivos.json` - [NOVO] 75 acórdãos
- `knowledge/jurisprudencia/acordaos-stj.txt` - Dados fonte (raw)

### Scripts
- `scripts/parseSTJAcordaos.cjs` - [NOVO] Parser para formato STJ

---

## Interface Jurisprudencia

Novos campos adicionados:
```typescript
interface Jurisprudencia {
    // ... campos existentes
    tese?: string;         // Tese jurídica fixada
    acordao?: string;      // Texto do acórdão
    situacaoTema?: string; // Status (Trânsito em Julgado, etc.)
    dataExtracao?: string; // Opcional para compatibilidade
}
```

---

## Build

```
✓ Servidor rodando em http://localhost:5173
✓ Jurisprudência: 2437 (TJRN: 2331, STF: 31, STJ Rep: 75) + 25 súmulas STJ
```
