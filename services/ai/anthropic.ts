/**
 * estagIA - Cliente Anthropic (Claude via Proxy)
 * @version 0.1.1
 */

import { ChatMessage, CompletionResponse } from './types';
import { getProviderConfig } from './config';

interface AnthropicMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface AnthropicResponse {
    id: string;
    type: string;
    role: string;
    content: { type: string; text: string }[];
    model: string;
    usage: {
        input_tokens: number;
        output_tokens: number;
    };
}

export async function callAnthropic(
    messages: ChatMessage[],
    options?: { maxTokens?: number; temperature?: number }
): Promise<CompletionResponse> {
    const config = getProviderConfig('anthropic');

    if (!config?.enabled) {
        throw new Error('Anthropic não está configurado no backend');
    }

    const startTime = performance.now();

    // Separar system message
    const systemMessage = messages.find(m => m.role === 'system')?.content || '';
    const chatMessages: AnthropicMessage[] = messages
        .filter(m => m.role !== 'system')
        .map(m => ({
            role: m.role as 'user' | 'assistant',
            content: m.content,
        }));

    const response = await fetch(config.baseUrl!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: config.model,
            max_tokens: options?.maxTokens || config.maxTokens,
            temperature: options?.temperature || config.temperature,
            system: systemMessage,
            messages: chatMessages,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Anthropic API error: ${response.status} - ${error}`);
    }

    const data: AnthropicResponse = await response.json();
    const latency = performance.now() - startTime;

    return {
        provider: 'anthropic',
        content: data.content[0]?.text || '',
        usage: {
            promptTokens: data.usage.input_tokens,
            completionTokens: data.usage.output_tokens,
            totalTokens: data.usage.input_tokens + data.usage.output_tokens,
        },
        latency,
        model: data.model,
    };
}
