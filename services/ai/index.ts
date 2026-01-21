/**
 * estagIA - Unificador de APIs de IA
 * @version 0.1.1
 */

import { AIProvider, ChatMessage, CompletionResponse } from './types';
import { getAvailableProviders, getProviderConfig } from './config';
import { callAnthropic } from './anthropic';
import { callGemini } from './gemini';
import { callPerplexity } from './perplexity';
import { callGrok } from './grok';
import { callOpenAI } from './openai';

// Mapeamento de funções de chamada por provider
const providerFunctions: Record<AIProvider, typeof callGemini> = {
    gemini: callGemini,
    anthropic: callAnthropic,
    perplexity: callPerplexity,
    grok: callGrok,
    openai: callOpenAI,
};

/**
 * Chamar um provider específico
 */
export async function callProvider(
    provider: AIProvider,
    messages: ChatMessage[],
    options?: { maxTokens?: number; temperature?: number }
): Promise<CompletionResponse> {
    const config = getProviderConfig(provider);

    if (!config?.enabled) {
        throw new Error(`Provider ${provider} não está configurado ou habilitado`);
    }

    const callFn = providerFunctions[provider];
    return callFn(messages, options);
}

/**
 * Chamar o primeiro provider disponível
 */
export async function callAny(
    messages: ChatMessage[],
    preferredOrder?: AIProvider[],
    options?: { maxTokens?: number; temperature?: number }
): Promise<CompletionResponse> {
    const available = getAvailableProviders();

    if (available.length === 0) {
        throw new Error('Nenhum provider de IA configurado. Configure as chaves de API.');
    }

    // Usar ordem preferida ou ordem padrão
    const order = preferredOrder || ['anthropic', 'gemini', 'perplexity', 'grok'];

    for (const provider of order) {
        if (available.includes(provider)) {
            try {
                return await callProvider(provider, messages, options);
            } catch (error) {
                console.warn(`Provider ${provider} falhou, tentando próximo...`, error);
                continue;
            }
        }
    }

    throw new Error('Todos os providers falharam');
}

/**
 * Status dos providers configurados
 */
export function getProvidersStatus(): Record<AIProvider, { enabled: boolean; model: string }> {
    const result: Record<AIProvider, { enabled: boolean; model: string }> = {} as any;

    const providers: AIProvider[] = ['gemini', 'anthropic', 'perplexity', 'grok', 'openai'];

    for (const provider of providers) {
        const config = getProviderConfig(provider);
        result[provider] = {
            enabled: config?.enabled || false,
            model: config?.model || 'N/A',
        };
    }

    return result;
}

// Re-exports
export * from './types';
export * from './config';
export { callAnthropic } from './anthropic';
export { callGemini, extractTextFromImage } from './gemini';
export { callPerplexity } from './perplexity';
export { callGrok } from './grok';
export { callOpenAI } from './openai';
