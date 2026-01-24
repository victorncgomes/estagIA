/**
 * estagIA - Configuração dos Providers de IA
 * @version 0.1.2
 */

import { AIProviderConfig, AIProvider } from './types';

// URL do backend proxy - detecta ambiente automaticamente
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    || (window.location.hostname === 'localhost'
        ? 'http://localhost:3508'
        : 'https://estagia.up.railway.app');

// Configurações padrão dos providers
export const AI_PROVIDERS: Record<AIProvider, Omit<AIProviderConfig, 'apiKey' | 'enabled'>> = {
    gemini: {
        id: 'gemini',
        name: 'Google Gemini',
        model: 'gemini-2.0-flash-001',
        baseUrl: `${BACKEND_URL}/api/gemini`,
        maxTokens: 8192,
        temperature: 0.3,
    },
    anthropic: {
        id: 'anthropic',
        name: 'Anthropic Claude',
        model: 'claude-3-5-sonnet-20241022',
        baseUrl: `${BACKEND_URL}/api/anthropic`,
        maxTokens: 8192,
        temperature: 0.4,
    },
    perplexity: {
        id: 'perplexity',
        name: 'Perplexity',
        model: 'llama-3.1-sonar-large-128k-online',
        baseUrl: `${BACKEND_URL}/api/perplexity`,
        maxTokens: 4096,
        temperature: 0.2,
    },
    grok: {
        id: 'grok',
        name: 'xAI Grok',
        model: 'grok-beta',
        baseUrl: `${BACKEND_URL}/api/grok`,
        maxTokens: 4096,
        temperature: 0.3,
    },
    openai: {
        id: 'openai',
        name: 'OpenAI GPT',
        model: 'gpt-4-turbo',
        baseUrl: `${BACKEND_URL}/api/openai`,
        maxTokens: 8192,
        temperature: 0.2,
    },
};

// Ordem do pipeline de geração
export const PIPELINE_ORDER: AIProvider[] = [
    'gemini',     // 1. Extração estruturada + OCR
    'perplexity', // 2. Checagem de coerência e fontes
    'grok',       // 3. Validação adicional
    'anthropic',  // 4. Redação final (Claude Sonnet 4.5)
];

// Prompts de sistema por provider
export const SYSTEM_PROMPTS = {
    extraction: `Você é um especialista em análise de processos de execução penal brasileiros.
Sua tarefa é EXTRAIR DADOS ESTRUTURADOS dos documentos fornecidos.

REGRAS ABSOLUTAS:
1. NUNCA invente ou infira dados que não estejam explicitamente nos documentos
2. Se uma informação não estiver clara, marque como "NAO_ENCONTRADO"
3. Cada informação extraída DEVE ter uma referência de origem
4. Mantenha exatamente os números, datas e nomes como aparecem
5. Se houver contradição entre documentos, liste AMBAS as versões`,

    validation: `Você é um auditor de dados jurídicos especializado em execução penal.
Sua função é VALIDAR que nenhuma informação foi inventada.

TAREFA:
1. Compare a estrutura extraída com os documentos originais
2. Para CADA fato, verifique se existe nos documentos
3. Se um fato não tiver correspondência, marque como POSSÍVEL ALUCINAÇÃO
4. Verifique especialmente: datas, números de processo, valores de pena`,

    coherence: `Você é um revisor jurídico especializado em execução penal.
Analise a coerência das informações e verifique contra fontes oficiais.

FOCO:
1. Os cálculos de pena e frações estão corretos?
2. As datas fazem sentido cronologicamente?
3. A jurisprudência citada existe e está correta?
4. Há inconsistências internas no caso?`,

    // WRITING é gerado dinamicamente pelo buildWritingSystemPrompt do coreBaltazar.ts
    // Este é apenas o fallback básico
    writing: `Você é um redator de decisões judiciais especializado em execução penal,
trabalhando para o Juiz Henrique Baltazar Vilar dos Santos da 1ª Vara Regional
de Execução Penal do TJRN.

## ESTRUTURA OBRIGATÓRIA
1. CABEÇALHO: PODER JUDICIÁRIO / TJRN / 1ª VARA REGIONAL DE EXECUÇÃO PENAL
2. ABERTURA: "Vistos, etc."
3. RELATÓRIO: Nome completo, eventos entre parênteses, manifestação do MP
4. TRANSIÇÃO: "Relatados." (sozinho em parágrafo)
5. FUNDAMENTAÇÃO: Sem título, cita artigos, jurisprudência quando necessário
6. DISPOSITIVO: "Isso posto," + decisão + "P.R.I."
7. ASSINATURA: Data por extenso + nome do juiz

## PERFIL DE ESTILO - BALTAZAR
- Tom formal e técnico, sem ser rebuscado
- NÃO usar listas ou bullet points NUNCA
- NÃO usar negrito ou itálico para ênfase
- NÃO dividir em "DO RELATÓRIO", "DA FUNDAMENTAÇÃO" - linguagem fluida
- Eventos processuais ao final do parágrafo (evento XX)
- Frases típicas: "Isso posto", "Relatados.", "P.R.I.", "Anoto que..."

## FRAÇÕES DE PROGRESSÃO (Lei 13.964/2019)
- Primário sem violência: 16% (Art. 112, I, LEP)
- Reincidente sem violência: 20% (Art. 112, II, LEP)
- Primário com violência: 25% (Art. 112, III, LEP)
- Hediondo primário: 40% (Art. 112, V, LEP)
- Tráfico privilegiado: 16% (Súmula Vinculante 59 STF - não é hediondo)

## SÚMULAS ESSENCIAIS
- SV 59 (STF): Tráfico privilegiado não é hediondo
- Súmula 534 (STJ): Falta grave interrompe prazo de progressão
- Súmula 668 (STJ): Porte de arma de uso permitido não é hediondo
- Tema 1.006 (STJ): Unificação não altera data-base

## REGRAS ABSOLUTAS (ANTI-ALUCINAÇÃO)
1. Use APENAS os dados fornecidos na estrutura validada
2. Se faltar informação essencial, marque como [DADO AUSENTE: descrição]
3. NUNCA cite jurisprudência inventada - na dúvida, use apenas a lei
4. Siga o nível de prolixidade indicado`,
};

// Verificar status do backend
let backendAvailable = false;
let backendProviders: Record<string, boolean> = {};

async function checkBackendHealth(): Promise<void> {
    try {
        const response = await fetch(`${BACKEND_URL}/api/health`);
        if (response.ok) {
            const data = await response.json();
            backendAvailable = true;
            backendProviders = data.providers;
        }
    } catch {
        backendAvailable = false;
    }
}

// Checar na inicialização
checkBackendHealth();
setInterval(checkBackendHealth, 30000); // Re-check a cada 30s

// Função para obter configuração com status
export function getProviderConfig(provider: AIProvider): AIProviderConfig | null {
    const baseConfig = AI_PROVIDERS[provider];

    // Se o backend está disponível, verificar se o provider está configurado lá
    const enabled = backendAvailable && backendProviders[provider];

    return {
        ...baseConfig,
        apiKey: enabled ? 'BACKEND_PROXY' : '',
        enabled,
    };
}

// Verificar quais providers estão disponíveis
export function getAvailableProviders(): AIProvider[] {
    if (!backendAvailable) return [];

    return Object.keys(AI_PROVIDERS).filter(
        (p) => backendProviders[p as AIProvider]
    ) as AIProvider[];
}

// Força re-check do backend
export async function refreshProviders(): Promise<void> {
    await checkBackendHealth();
}

// Verificar se backend está online
export function isBackendOnline(): boolean {
    return backendAvailable;
}
