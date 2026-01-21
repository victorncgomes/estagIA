/**
 * estagIA - Cliente Perplexity
 * @version 0.1.1
 */

import { ChatMessage, CompletionResponse } from './types';
import { getProviderConfig } from './config';

interface PerplexityResponse {
    id: string;
    model: string;
    choices: {
        index: number;
        message: {
            role: string;
            content: string;
        };
        finish_reason: string;
    }[];
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    citations?: string[];
}

export async function callPerplexity(
    messages: ChatMessage[],
    options?: { maxTokens?: number; temperature?: number }
): Promise<CompletionResponse & { citations?: string[] }> {
    const config = getProviderConfig('perplexity');

    if (!config?.enabled) {
        throw new Error('Perplexity API key não configurada');
    }

    const startTime = performance.now();

    const response = await fetch(`${config.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`,
        },
        body: JSON.stringify({
            model: config.model,
            messages: messages.map(m => ({
                role: m.role,
                content: m.content,
            })),
            max_tokens: options?.maxTokens || config.maxTokens,
            temperature: options?.temperature || config.temperature,
            return_citations: true,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Perplexity API error: ${response.status} - ${error}`);
    }

    const data: PerplexityResponse = await response.json();
    const latency = performance.now() - startTime;

    return {
        provider: 'perplexity',
        content: data.choices[0]?.message?.content || '',
        usage: {
            promptTokens: data.usage.prompt_tokens,
            completionTokens: data.usage.completion_tokens,
            totalTokens: data.usage.total_tokens,
        },
        latency,
        model: data.model,
        citations: data.citations,
    };
}
