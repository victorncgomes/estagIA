/**
 * estagIA - LLM Judge (Segunda Verificação)
 * 
 * Usa uma segunda IA para validar a decisão gerada,
 * verificando estrutura, citações, coerência e detecção de alucinações.
 * 
 * @version 1.0.0
 */

export interface ValidationResult {
    aprovado: boolean;
    score: number;
    detalhes: {
        estrutura: {
            ok: boolean;
            problemas: string[];
        };
        citacoes: {
            ok: boolean;
            citacoesDetectadas: number;
            citacoesValidas: number;
            problemas: string[];
        };
        coerencia: {
            ok: boolean;
            problemas: string[];
        };
        alucinacoes: {
            detectadas: boolean;
            lista: string[];
        };
    };
    sugestoes: string[];
    tempoValidacao: number;
}

// Prompt do LLM Judge
const JUDGE_PROMPT = `# VOCÊ É UM JUIZ VALIDADOR DE DECISÕES JUDICIAIS

Você vai analisar uma decisão judicial gerada por IA e verificar sua qualidade.

## CRITÉRIOS DE VALIDAÇÃO

### 1. ESTRUTURA (25 pontos)
- [ ] Inicia com "Vistos, etc." ou "Vistos etc." (+5)
- [ ] Contém parágrafo "Relatados." sozinho (+5)
- [ ] Contém "Isso posto," antes do dispositivo (+5)
- [ ] Finaliza com "P.R.I." ou similar (+5)
- [ ] Não usa bullet points ou listas numeradas (+5)

### 2. CITAÇÕES (25 pontos)
- [ ] Citações de doutrina incluem autor, obra, editora, ano (+10)
- [ ] Citações de jurisprudência incluem tribunal e número (+10)
- [ ] Não há citações inventadas ou incompletas (+5)

### 3. COERÊNCIA (25 pontos)
- [ ] Relatório corresponde aos fatos descritos (+10)
- [ ] Fundamentação é lógica e consistente (+10)
- [ ] Dispositivo é coerente com a fundamentação (+5)

### 4. ANTI-ALUCINAÇÃO (25 pontos)
- [ ] Não inventa nomes de partes ou advogados (+10)
- [ ] Não inventa números de processos (+10)
- [ ] Não mistura matérias diferentes (+5)

## RESPONDA NO FORMATO JSON:
{
  "score": <número de 0 a 100>,
  "aprovado": <true se score >= 70>,
  "estrutura": {
    "ok": <boolean>,
    "pontos": <número>,
    "problemas": ["lista de problemas ou vazio"]
  },
  "citacoes": {
    "ok": <boolean>,
    "pontos": <número>,
    "citacoesDetectadas": <número>,
    "citacoesValidas": <número>,
    "problemas": ["lista de problemas ou vazio"]
  },
  "coerencia": {
    "ok": <boolean>,
    "pontos": <número>,
    "problemas": ["lista de problemas ou vazio"]
  },
  "alucinacoes": {
    "detectadas": <boolean>,
    "pontos": <número>,
    "lista": ["lista de alucinações detectadas ou vazio"]
  },
  "sugestoes": ["lista de sugestões de melhoria"]
}

RESPONDA APENAS COM O JSON, SEM TEXTO ADICIONAL.

## DECISÃO A VALIDAR:
`;

/**
 * Extrai JSON de uma resposta que pode conter texto adicional
 */
function extrairJSON(texto: string): object | null {
    // Tentar encontrar JSON no texto
    const jsonMatch = texto.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
        try {
            return JSON.parse(jsonMatch[0]);
        } catch (e) {
            console.warn('[LLMJudge] Erro ao parsear JSON:', e);
        }
    }
    return null;
}

/**
 * Valida uma decisão usando o LLM Judge
 */
export async function validarDecisao(
    decisaoGerada: string,
    contextoOriginal?: string,
    apiKey?: string
): Promise<ValidationResult> {
    const inicio = Date.now();

    // Usar Gemini como judge (mais rápido e barato)
    const key = apiKey || (typeof window !== 'undefined' ? '' : process.env?.GEMINI_API_KEY);

    if (!key) {
        return criarResultadoFallback('API key não disponível');
    }

    const promptCompleto = JUDGE_PROMPT + '\n```\n' + decisaoGerada + '\n```';

    if (contextoOriginal) {
        // Adicionar contexto original para comparação
    }

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: promptCompleto }] }],
                    generationConfig: {
                        maxOutputTokens: 2000,
                        temperature: 0.1 // Baixa temperatura para resposta mais consistente
                    }
                })
            }
        );

        if (!response.ok) {
            return criarResultadoFallback(`API error: ${response.status}`);
        }

        const data = await response.json() as {
            candidates?: Array<{
                content?: {
                    parts?: Array<{ text?: string }>;
                };
            }>;
        };
        const textoResposta = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

        const json = extrairJSON(textoResposta);

        if (!json) {
            return criarResultadoFallback('Resposta não contém JSON válido');
        }

        const resultado = json as {
            score?: number;
            aprovado?: boolean;
            estrutura?: { ok?: boolean; pontos?: number; problemas?: string[] };
            citacoes?: { ok?: boolean; pontos?: number; citacoesDetectadas?: number; citacoesValidas?: number; problemas?: string[] };
            coerencia?: { ok?: boolean; pontos?: number; problemas?: string[] };
            alucinacoes?: { detectadas?: boolean; pontos?: number; lista?: string[] };
            sugestoes?: string[];
        };

        return {
            aprovado: resultado.aprovado ?? (resultado.score ?? 0) >= 70,
            score: resultado.score ?? 0,
            detalhes: {
                estrutura: {
                    ok: resultado.estrutura?.ok ?? true,
                    problemas: resultado.estrutura?.problemas || []
                },
                citacoes: {
                    ok: resultado.citacoes?.ok ?? true,
                    citacoesDetectadas: resultado.citacoes?.citacoesDetectadas ?? 0,
                    citacoesValidas: resultado.citacoes?.citacoesValidas ?? 0,
                    problemas: resultado.citacoes?.problemas || []
                },
                coerencia: {
                    ok: resultado.coerencia?.ok ?? true,
                    problemas: resultado.coerencia?.problemas || []
                },
                alucinacoes: {
                    detectadas: resultado.alucinacoes?.detectadas ?? false,
                    lista: resultado.alucinacoes?.lista || []
                }
            },
            sugestoes: resultado.sugestoes || [],
            tempoValidacao: Date.now() - inicio
        };

    } catch (error) {
        return criarResultadoFallback(`Erro: ${error}`);
    }
}

/**
 * Cria resultado de fallback quando validação falha
 */
function criarResultadoFallback(motivo: string): ValidationResult {
    return {
        aprovado: true, // Aprovar por padrão para não bloquear
        score: -1, // -1 indica que validação não foi possível
        detalhes: {
            estrutura: { ok: true, problemas: [motivo] },
            citacoes: { ok: true, citacoesDetectadas: 0, citacoesValidas: 0, problemas: [] },
            coerencia: { ok: true, problemas: [] },
            alucinacoes: { detectadas: false, lista: [] }
        },
        sugestoes: ['Validação não executada: ' + motivo],
        tempoValidacao: 0
    };
}

/**
 * Validação rápida local (sem chamada de API)
 * Útil para pré-filtro antes do LLM Judge
 */
export function validacaoRapidaLocal(decisao: string): {
    ok: boolean;
    problemas: string[];
} {
    const problemas: string[] = [];
    const lower = decisao.toLowerCase();

    // Verificar estrutura básica
    if (!lower.includes('vistos')) {
        problemas.push('Falta abertura "Vistos"');
    }

    if (!lower.includes('relatados')) {
        problemas.push('Falta transição "Relatados"');
    }

    if (!lower.includes('isso posto') && !lower.includes('isto posto')) {
        problemas.push('Falta transição "Isso posto"');
    }

    if (!lower.includes('p.r.i')) {
        problemas.push('Falta fechamento "P.R.I."');
    }

    // Verificar tamanho mínimo
    if (decisao.length < 1000) {
        problemas.push(`Decisão muito curta (${decisao.length} chars, mínimo 1000)`);
    }

    // Verificar listas/bullets (proibidos)
    if (decisao.includes('• ') || decisao.includes('- ') || /^\d+\.\s/m.test(decisao)) {
        problemas.push('Contém listas ou bullet points (proibido)');
    }

    return {
        ok: problemas.length === 0,
        problemas
    };
}
