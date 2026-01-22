/**
 * Event Number Extractor
 * Extrai números de eventos das manifestações coladas pelos usuários
 * 
 * @version 1.0.0
 * 
 * Padrões suportados (encontrados em PDFs do SEEU):
 * - "Evento 45"
 * - "Evento: 45"
 * - "Evento Nº 45"
 * - "EV. 45" / "ev. 45"
 * - Número isolado no início do texto (ex: "45\n" ou "45.1\n")
 */

export interface EventNumber {
    source: 'mp' | 'defesa' | 'rspe' | 'outros';
    eventNumber: string;
    context: string; // Primeiros 80 chars após o número para contexto
}

/**
 * Extrai o número do evento de um texto de manifestação
 * Retorna null se não encontrar padrão reconhecível
 */
export function extractEventFromText(text: string): string | null {
    if (!text || text.trim().length === 0) return null;

    // Normaliza quebras de linha e espaços extras
    const normalizedText = text.trim();

    // Padrões de número de evento (ordenados por especificidade)
    const patterns: RegExp[] = [
        // "Evento 45" ou "Evento: 45" ou "Evento Nº 45"
        /^[\s\S]*?Evento[:\s]*(?:N[ºo°]?\s*)?(\d+(?:\.\d+)?)/i,

        // "EV. 45" ou "ev. 45"
        /^[\s\S]*?EV\.?\s*(\d+(?:\.\d+)?)/i,

        // Número isolado no início (45 ou 45.1) - comum em cópias de PDF
        /^[\s\n]*(\d+(?:\.\d+)?)\s*\n/,

        // Número no formato "45.1" no início de linha
        /^(\d+\.\d+)\s/,
    ];

    for (const pattern of patterns) {
        const match = normalizedText.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }

    return null;
}

/**
 * Extrai números de evento de todos os inputs
 */
export function extractEventNumbers(inputs: {
    mp?: string;
    defesa?: string;
    rspe?: string;
    outros?: string;
}): EventNumber[] {
    const events: EventNumber[] = [];

    const sources = [
        { key: 'mp', label: 'mp' as const },
        { key: 'defesa', label: 'defesa' as const },
        { key: 'rspe', label: 'rspe' as const },
        { key: 'outros', label: 'outros' as const },
    ];

    for (const source of sources) {
        const text = inputs[source.key as keyof typeof inputs];
        if (text) {
            const eventNumber = extractEventFromText(text);
            if (eventNumber) {
                // Captura contexto (primeiros 80 chars após limpar header)
                const contextStart = text.indexOf(eventNumber) + eventNumber.length;
                const context = text.slice(contextStart, contextStart + 80)
                    .replace(/\n/g, ' ')
                    .trim();

                events.push({
                    source: source.label,
                    eventNumber,
                    context,
                });
            }
        }
    }

    return events;
}

/**
 * Formata os eventos extraídos para inclusão no prompt
 */
export function formatEventsForPrompt(events: EventNumber[]): string {
    if (events.length === 0) return '';

    const sourceLabels: Record<string, string> = {
        mp: 'Manifestação do Ministério Público',
        defesa: 'Manifestação da Defesa',
        rspe: 'Relatório da Situação Processual',
        outros: 'Outros Documentos',
    };

    const lines = events.map(e =>
        `- ${sourceLabels[e.source] || e.source}: **Evento ${e.eventNumber}**`
    );

    return `## NÚMEROS DE EVENTO IDENTIFICADOS NOS DOCUMENTOS
${lines.join('\n')}

> **REGRA OBRIGATÓRIA**: Ao referenciar manifestações ou documentos na decisão, 
> SEMPRE use o formato "(evento XX)" ao final do parágrafo correspondente.
> Exemplo: "O Ministério Público opinou favoravelmente ao pedido (evento ${events[0]?.eventNumber || '45'})."
`;
}
