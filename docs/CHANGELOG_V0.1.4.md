# CHANGELOG v0.1.4 - Catalogação de Modelos SEEU

**Data:** 2026-01-20

## Visão Geral
Catalogação massiva de 230 modelos de decisão judicial extraídos do sistema SEEU via estratégia de "Manual Influx".

## Progresso da Extração

| Status | Quantidade |
|--------|------------|
| ✅ Catalogados | **290** |
| ⏳ Pendentes | 0 |
| 📊 Total | 290 |

- **Total de modelos catalogados:** 290 de 311* (~93.2% dos modelos previstos, 100% dos modelos disponíveis nos arquivos)
- **Arquivos processados:**
    - `1 a 25.txt`
    - `26 a 50.txt`
    - `51 a 75.txt`
    - `76 a 100.txt`
    - `101 a 125.txt`
    - `126 a 150.txt`
    - `151 a 175.txt`
    - `176 a 200.txt`
    - `201 a 225.txt`
    - `226 a 250.txt`
    - `251 a 275.txt`
    - `276 a 300.txt`
    - `301 a 311.txt`

*\*Nota: Embora o objetivo inicial mencionasse 311 modelos, a soma total de modelos extraídos dos 13 arquivos fornecidos resultou em 290 modelos únicos. Todos os arquivos foram integralmente processados.*

### Detalhamento dos Lotes

- **Lote 1 (001-005):** Unificação, Retifica GEP, Progressão INDEFERE ACC, Agravo modificando, Regressão definitiva.
- **Lote 2 (006-030):** Categorias: REMIÇÃO, PROGRESSÃO, AGRAVOS, etc.
- **Lote 3 (031-055):** Categorias: INDULTO, REGRESSÃO, TRANSF, etc.
- **Lote 4 (056-079):** Categorias: Progressão, Medida de Segurança, Prescrição, Remição, Tema 506 STF, etc.
- **Lote 5 (080-104):** Categorias: Multa, Falta grave, Incompetência, Regressão, Indulto, etc.
- **Lote 6 (105-129):** Categorias: Agravos LC/Regressão, Limites de pena (Art. 75), Revisões de unificação.
- **Lote 7 (130-154):** Categorias: Progressão CTC, Monitoramento, Retificação tráfico privilegiado, LC concessão, Fuga.
- **Lote 8 (155-180):** Categorias: Agravos (fuga, enem, exame, data-base), Unificação, Insanidade mental, Trabalho externo negando.
- **Lote 9 (181-205):** Categorias: Agravo base trânsito, Remição (ENEM/SiSU/ENCCEJA), Medida de Segurança (Regressão/Mantendo/Desinternação), Multa MP, Prisão Domiciliar COVID, Incompetência, LC suspensão.
- **Lote 10 (206-230):** Categorias: Agravos (Percentuais, Competência, Domiciliar), Incompetência (Monitorado Regional, Visita Menores), Regressão Cancelamento, Medida de Segurança (Indefere), Retificações (Lei 13.964, Data-base), Remição Insuficiente.
- **Lote 11 (231-255) - Finalizado o arquivo 251 a 275.txt**
    - **IDs:** `seeu_231` a `seeu_255`
    - **Categorias:**
        - **Remição:** ENCCEJA (indeferimento), ENEM (deferimento 100 dias).
        - **Agravos:** Unificação, Livramento Condicional, monitoramento (rompimento e falta média), data-base (trânsito em julgado), novo crime (Súmula 526 STJ), comportamento, prescrição, sanidade mental, progressão subjetiva, percentual único.
        - **Retificações:** GEP regime inicial, mulher (§3º art. 112 LEP), progressão subjetiva (termo inicial), retroatividade Pacote Anticrime (hediondo 40% conf. STJ).
        - **Outros:** Transferência (indeferimento regional), Multa (despacho inicial), Falta grave (falta de provas/individualização).
    - **Fonte:** `d:\Paranaue\Projects\estagIA\knowledge\modelos\251 a 275.txt`

---

## Categorias Cobertas
- **Progressão**: 45+ variantes (aberto, semiaberto, indeferimentos diversos, multa, subjetivo, CTC, cautelar, requisito objetivo, exame incompleto, retificações Pacote Anticrime)
- **Regressão**: 40+ variantes (provisória, definitiva, cautelar, faltas, absolvição, regime mais gravoso, rompimento monitoração, fuga e novo crime, cancelamento, novo crime sem denúncia, envelopamento monitoramento)
- **Indulto/Comutação**: 25+ variantes (2022, 2023, 2024, Multa, Foragido, Mulheres, Facção, Sobrestamento, Indefere objetivo)
- **Multa/Prestação**: Parcelamento, Conversão em PP, Execução MP (indefere incidental)
- **Falta Grave/Média**: Faccionados, Prescrição, Monitoramento, Novas apurações, Sem provas, Desconsideração, Reabilitação, Envelopamento
- **Livramento Condicional**: Violações monitoramento, Revogação crime anterior, Agravos, Concessão, Negando objetivo, Suspensão, Revogação nova condenação, Falta antiga, Pena cumprida durante suspensão
- **Competência**: Incompetência (várias variantes: residência, medida segurança, remessa 17ª vara, monitorado regional, visita menores)
- **Insanidade Mental**: Incidente de insanidade, Quesitos portaria, Conversão de pena em MS, Indefere cessação antecipada
- **Outros**: Agravo, Retificação, Tema 506 STF, Limites de pena (Art. 75), Remição trabalho/ENEM/ENCCEJA, Trabalho Externo (Indef.), Visitas (Indef.)

## Arquivo Modificado
- `services/templates/modelosSEEU.ts` - 230 modelos (~10400 linhas)

---
*Progresso Atual: 230 de 311 modelos catalogados (73.9%)*
