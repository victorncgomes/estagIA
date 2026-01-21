# 📚 Knowledge Base - estagIA

Esta pasta contém o material de treinamento para a IA gerar decisões no estilo do Juiz Baltazar.

## 📂 Estrutura de Pastas

```
knowledge/
├── decisoes/       # Decisões reais do juiz (exemplos de output)
├── prompts/        # Prompts que já funcionaram bem
├── jurisprudencia/ # Súmulas, jurisprudência e legislação
├── doutrina/       # Livros e artigos doutrinários
└── modelos/        # Templates de decisões por tipo
```

## 📝 Como Adicionar Conteúdo

### 1. Decisões (`decisoes/`)
Coloque aqui decisões **já proferidas** pelo juiz. 
- Use arquivos `.txt` ou `.md`
- Nomeie de forma descritiva: `progressao_regime_deferida_001.txt`
- Quanto mais exemplos, melhor!

**Categorias sugeridas:**
- `progressao_*.txt` - Progressão de regime
- `livramento_*.txt` - Livramento condicional
- `indulto_*.txt` - Indulto e comutação
- `remicao_*.txt` - Remição de pena
- `unificacao_*.txt` - Unificação de penas
- `saida_*.txt` - Saída temporária

### 2. Prompts (`prompts/`)
Coloque aqui prompts que você já usou com sucesso.
- Use arquivos `.txt` ou `.md`
- Inclua tanto o prompt quanto o resultado se possível

### 3. Jurisprudência (`jurisprudencia/`)
Súmulas, entendimentos consolidados, artigos de lei.
- `sumulas_stf.txt`
- `sumulas_stj.txt`
- `lei_execucao_penal.txt`

### 4. Modelos (`modelos/`)
Templates "limpos" de decisões por tipo.

---

## 🔄 Importação Automática

Após adicionar arquivos, a IA irá processar e indexar automaticamente.

O sistema usa busca RAG (Retrieval Augmented Generation) para encontrar 
os documentos mais relevantes para cada caso.
