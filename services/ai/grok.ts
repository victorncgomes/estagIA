/**
 * estagIA - Cliente Grok (xAI via Proxy)
 * @version 0.1.1
 */

import { ChatMessage, CompletionResponse } from './types';
import { getProviderConfig } from './config';

interface GrokResponse {
    id: string;
    object: string;
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
}

export async function callGrok(
    messages: ChatMessage[],
    options?: { maxTokens?: number; temperature?: number }
): Promise<CompletionResponse> {
    const config = getProviderConfig('grok');

    if (!config?.enabled) {
        throw new Error('Grok não está configurado no backend');
    }

    const startTime = performance.now();

    const response = await fetch(config.baseUrl!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: config.model,
            messages: messages.map(m => ({
                role: m.role,
                content: m.content,
            })),
            max_tokens: options?.maxTokens || config.maxTokens,
            temperature: options?.temperature || config.temperature,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Grok API error: ${response.status} - ${error}`);
    }

    const data: GrokResponse = await response.json();
    const latency = performance.now() - startTime;

    return {
        provider: 'grok',
        content: data.choices[0]?.message?.content || '',
        usage: {
            promptTokens: data.usage.prompt_tokens,
            completionTokens: data.usage.completion_tokens,
            totalTokens: data.usage.total_tokens,
        },
        latency,
        model: data.model,
    };
}
