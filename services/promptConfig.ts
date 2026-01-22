/**
 * estagIA - Configuração Otimizada de Prompts
 * 
 * Carrega configurações otimizadas pelo sistema de auto-aprendizado
 * e as aplica no pipeline de geração.
 * 
 * @version 1.0.0
 */

// Configuração otimizada (atualizada pelo autoLearn.cjs)
export interface PromptConfig {
    instrucaoTamanho: string;
    instrucaoEstrutura: string;
    numExemplos: number;
    maxCharsExemplo: number;
    enfase: string;
    multiplicadorTamanho: number;
}

// Configuração padrão (fallback)
const CONFIG_PADRAO: PromptConfig = {
    instrucaoTamanho: 'A decisão deve ter entre 3000 e 6000 caracteres.',
    instrucaoEstrutura: 'ESTRUTURA: Vistos → Relatório → Relatados. → Fundamentação → Isso posto, → P.R.I.',
    numExemplos: 2,
    maxCharsExemplo: 5000,
    enfase: 'IMPORTANTE: Seu texto deve ter tamanho SIMILAR aos exemplos.',
    multiplicadorTamanho: 1.0
};

// Cache da configuração
let configCache: PromptConfig | null = null;

/**
 * Carrega a configuração otimizada
 */
export async function carregarConfigOtimizada(): Promise<PromptConfig> {
    if (configCache) {
        return configCache;
    }

    try {
        const response = await fetch('/knowledge/prompts/prompt_config.json');
        if (response.ok) {
            configCache = await response.json();
            console.log('[PromptConfig] Configuração otimizada carregada');
            return configCache!;
        }
    } catch (error) {
        console.warn('[PromptConfig] Usando configuração padrão');
    }

    configCache = CONFIG_PADRAO;
    return configCache;
}

/**
 * Aplica a configuração otimizada nas instruções do prompt
 */
export function aplicarConfigNoPrompt(
    config: PromptConfig,
    tamanhoGolden: number
): {
    instrucaoTamanho: string;
    instrucaoEstrutura: string;
    enfase: string;
} {
    const tamanhoAlvo = Math.round(tamanhoGolden * config.multiplicadorTamanho);
    const tamanhoMin = Math.round(tamanhoAlvo * 0.8);
    const tamanhoMax = Math.round(tamanhoAlvo * 1.2);

    return {
        instrucaoTamanho: `A decisão deve ter entre ${tamanhoMin} e ${tamanhoMax} caracteres. TAMANHO SERÁ VERIFICADO.`,
        instrucaoEstrutura: config.instrucaoEstrutura,
        enfase: config.enfase
    };
}

/**
 * Gera o bloco de instruções otimizadas para o prompt
 */
export async function gerarInstrucoesOtimizadas(tamanhoModeloReferencia: number): Promise<string> {
    const config = await carregarConfigOtimizada();
    const instrucoes = aplicarConfigNoPrompt(config, tamanhoModeloReferencia);

    return `## REGRAS CRÍTICAS (VERIFICADAS AUTOMATICAMENTE)
1. ${instrucoes.instrucaoEstrutura}
2. ${instrucoes.instrucaoTamanho}
3. Use linguagem formal jurídica. SEM bullet points ou listas.
4. ${instrucoes.enfase}
`;
}

/**
 * Retorna quantos exemplos usar (otimizado)
 */
export async function getNumExemplos(): Promise<number> {
    const config = await carregarConfigOtimizada();
    return config.numExemplos;
}

/**
 * Retorna tamanho máximo de cada exemplo
 */
export async function getMaxCharsExemplo(): Promise<number> {
    const config = await carregarConfigOtimizada();
    return config.maxCharsExemplo;
}

/**
 * Limpa cache (para recarregar após otimização)
 */
export function limparCache(): void {
    configCache = null;
}
