/**
 * estagIA - Cliente Gemini (via Proxy)
 * @version 0.1.1
 */

import { ChatMessage, CompletionResponse } from './types';
import { getProviderConfig } from './config';

interface GeminiResponse {
    candidates: {
        content: {
            parts: { text: string }[];
            role: string;
        };
    }[];
    usageMetadata?: {
        promptTokenCount: number;
        candidatesTokenCount: number;
        totalTokenCount: number;
    };
}

export async function callGemini(
    messages: ChatMessage[],
    options?: { maxTokens?: number; temperature?: number }
): Promise<CompletionResponse> {
    const config = getProviderConfig('gemini');

    if (!config?.enabled) {
        throw new Error('Gemini não está configurado no backend');
    }

    const startTime = performance.now();

    // Converter mensagens para formato Gemini
    const systemInstruction = messages.find(m => m.role === 'system')?.content;
    const contents = messages
        .filter(m => m.role !== 'system')
        .map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
        }));

    const requestBody: any = {
        model: config.model,
        contents,
        generationConfig: {
            maxOutputTokens: options?.maxTokens || config.maxTokens,
            temperature: options?.temperature || config.temperature,
        },
    };

    if (systemInstruction) {
        requestBody.systemInstruction = {
            parts: [{ text: systemInstruction }],
        };
    }

    const response = await fetch(config.baseUrl!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Gemini API error: ${response.status} - ${error}`);
    }

    const data: GeminiResponse = await response.json();
    const latency = performance.now() - startTime;

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return {
        provider: 'gemini',
        content: text,
        usage: data.usageMetadata ? {
            promptTokens: data.usageMetadata.promptTokenCount,
            completionTokens: data.usageMetadata.candidatesTokenCount,
            totalTokens: data.usageMetadata.totalTokenCount,
        } : undefined,
        latency,
        model: config.model,
    };
}

/**
 * Extrair texto de imagem usando Gemini Vision (via proxy)
 */
export async function extractTextFromImage(
    imageBase64: string,
    mimeType: string = 'image/jpeg'
): Promise<string> {
    const config = getProviderConfig('gemini');

    if (!config?.enabled) {
        throw new Error('Gemini não está configurado no backend');
    }

    const response = await fetch(config.baseUrl!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'gemini-2.0-flash-001',
            contents: [{
                parts: [
                    {
                        inlineData: {
                            mimeType,
                            data: imageBase64,
                        },
                    },
                    {
                        text: `Extraia TODO o texto desta imagem de documento judicial brasileiro.
Mantenha a formatação original.
Se houver tabelas, preserve a estrutura.
Não adicione interpretações, apenas extraia o texto exato.`,
                    },
                ],
            }],
            generationConfig: {
                temperature: 0.1,
                maxOutputTokens: 8192,
            },
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Gemini Vision error: ${response.status} - ${error}`);
    }

    const data: GeminiResponse = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}
