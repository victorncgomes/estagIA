/**
 * estagIA - Carregador de Modelos Completos
 * 
 * Carrega o conteúdo COMPLETO dos modelos de decisão para injeção no prompt.
 * Usa o novo índice modelos_completos_index.json e os arquivos de texto extraídos.
 * 
 * @version 1.0.0
 */

// Interface para modelo completo
export interface ModeloCompleto {
    arquivo: string;
    nome: string;
    agrupador: string;
    resultado: string;
    tamanho: number;
    conteudo: string;
    estrutura: {
        tem_vistos: boolean;
        tem_relatados: boolean;
        tem_isso_posto: boolean;
        tem_pri: boolean;
    };
    temFillin: boolean;
}

// Cache de modelos carregados
let modelosCache: Map<string, ModeloCompleto> = new Map();
let indiceCarregado = false;

/**
 * Carrega o índice de modelos completos
 */
async function carregarIndice(): Promise<void> {
    if (indiceCarregado) return;

    try {
        // Em ambiente browser, faz fetch do arquivo
        const response = await fetch('/knowledge/decisoes/modelos_completos_index.json');
        const indice = await response.json();

        // Para cada modelo no índice, salvar no cache com metadados
        for (const modelo of indice.modelos || []) {
            modelosCache.set(modelo.arquivo, {
                arquivo: modelo.arquivo,
                nome: modelo.nome,
                agrupador: modelo.agrupador,
                resultado: modelo.resultado,
                tamanho: modelo.tamanho_chars || 0,
                conteudo: '', // Será carregado sob demanda
                estrutura: modelo.estrutura || {},
                temFillin: modelo.tem_fillin || false,
            });
        }

        indiceCarregado = true;
        console.log(`[ModelosLoader] Índice carregado: ${modelosCache.size} modelos`);
    } catch (error) {
        console.error('[ModelosLoader] Erro ao carregar índice:', error);
    }
}

/**
 * Carrega o conteúdo completo de um modelo
 */
async function carregarConteudo(arquivo: string): Promise<string> {
    // Nome do arquivo de texto
    const nomeTexto = arquivo.replace(/\.docx?$/i, '.txt');

    try {
        const response = await fetch(`/knowledge/decisoes/textos_completos/${encodeURIComponent(nomeTexto)}`);
        if (response.ok) {
            return await response.text();
        }
    } catch (error) {
        console.warn(`[ModelosLoader] Não foi possível carregar: ${nomeTexto}`);
    }

    return '';
}

/**
 * Busca modelos por agrupador
 */
export async function buscarModelosPorAgrupador(agrupador: string, limite: number = 3): Promise<ModeloCompleto[]> {
    await carregarIndice();

    const resultados: ModeloCompleto[] = [];
    const entries = Array.from(modelosCache.entries());

    for (const [arquivo, modelo] of entries) {
        if (modelo.agrupador.toLowerCase() === agrupador.toLowerCase()) {
            // Carregar conteúdo se ainda não foi carregado
            if (!modelo.conteudo) {
                modelo.conteudo = await carregarConteudo(arquivo);
            }

            if (modelo.conteudo) {
                resultados.push(modelo);
            }

            if (resultados.length >= limite) break;
        }
    }

    return resultados;
}

/**
 * Busca modelos por resultado (defere/indefere)
 */
export async function buscarModelosPorResultado(
    agrupador: string,
    resultado: 'defere' | 'indefere' | 'parcial',
    limite: number = 2
): Promise<ModeloCompleto[]> {
    await carregarIndice();

    const resultados: ModeloCompleto[] = [];
    const entries = Array.from(modelosCache.entries());

    for (const [arquivo, modelo] of entries) {
        if (
            modelo.agrupador.toLowerCase() === agrupador.toLowerCase() &&
            modelo.resultado === resultado
        ) {
            if (!modelo.conteudo) {
                modelo.conteudo = await carregarConteudo(arquivo);
            }

            if (modelo.conteudo) {
                resultados.push(modelo);
            }

            if (resultados.length >= limite) break;
        }
    }

    return resultados;
}

/**
 * Busca os modelos mais relevantes para um caso
 * Prioriza: mesmo agrupador + mesmo resultado
 */
export async function buscarModelosRelevantes(
    agrupador: string,
    orientacaoMerito?: string,
    limite: number = 2
): Promise<ModeloCompleto[]> {
    await carregarIndice();

    // Detectar se a orientação indica deferimento ou indeferimento
    let resultadoEsperado: 'defere' | 'indefere' | 'parcial' | null = null;
    if (orientacaoMerito) {
        const orientacaoLower = orientacaoMerito.toLowerCase();
        if (orientacaoLower.includes('indeferir') || orientacaoLower.includes('negar') || orientacaoLower.includes('rejeitar')) {
            resultadoEsperado = 'indefere';
        } else if (orientacaoLower.includes('deferir') || orientacaoLower.includes('conceder') || orientacaoLower.includes('acolher')) {
            resultadoEsperado = 'defere';
        } else if (orientacaoLower.includes('parcial')) {
            resultadoEsperado = 'parcial';
        }
    }

    let resultados: ModeloCompleto[] = [];

    // Primeiro: buscar por agrupador + resultado
    if (resultadoEsperado) {
        resultados = await buscarModelosPorResultado(agrupador, resultadoEsperado, limite);
    }

    // Se não encontrou suficiente, buscar apenas por agrupador
    if (resultados.length < limite) {
        const modelosAgrupador = await buscarModelosPorAgrupador(agrupador, limite - resultados.length);

        // Evitar duplicatas
        for (const m of modelosAgrupador) {
            if (!resultados.find(r => r.arquivo === m.arquivo)) {
                resultados.push(m);
            }
        }
    }

    return resultados.slice(0, limite);
}

/**
 * Formata modelos para inclusão no prompt da IA
 * Inclui o conteúdo COMPLETO do modelo
 */
export function formatarModelosParaPrompt(modelos: ModeloCompleto[], maxCharsPerModel: number = 6000): string {
    if (!modelos || modelos.length === 0) {
        return '';
    }

    let output = `## 📚 MODELOS DE REFERÊNCIA (SIGA EXATAMENTE ESTE ESTILO)

Estes são exemplos REAIS de decisões do Juiz Henrique Baltazar.
A decisão que você gerar DEVE ter:
- ESTRUTURA SIMILAR aos exemplos (Vistos → Relatados → Isso posto → P.R.I.)
- TAMANHO SIMILAR aos exemplos (${Math.round(modelos[0]?.tamanho / 1000) || 3}-${Math.round((modelos[modelos.length - 1]?.tamanho || 5000) / 1000)}K caracteres)
- LINGUAGEM IDÊNTICA (formal, jurídica, sem modernismos)
- ESTILO DE CITAÇÃO igual aos exemplos

`;

    modelos.forEach((modelo, index) => {
        const conteudoTruncado = modelo.conteudo.length > maxCharsPerModel
            ? modelo.conteudo.substring(0, maxCharsPerModel) + '\n[... continuação omitida para economia de tokens ...]'
            : modelo.conteudo;

        output += `### MODELO ${index + 1}: ${modelo.nome}
**Agrupador**: ${modelo.agrupador} | **Resultado**: ${modelo.resultado} | **Tamanho**: ${modelo.tamanho} chars
${modelo.temFillin ? '⚠️ Este modelo usa campos de preenchimento (FillIn) - adapte ao caso' : ''}

\`\`\`
${conteudoTruncado}
\`\`\`

`;
    });

    output += `---
⚠️ ATENÇÃO: Sua decisão deve ser MUITO SIMILAR em estrutura, tamanho e linguagem aos modelos acima.
Se os modelos têm 5000 caracteres, sua decisão também deve ter aproximadamente 5000 caracteres.
NÃO gere decisões curtas de 500 caracteres quando os modelos têm 5000+.
---

`;

    return output;
}

/**
 * Lista agrupadores disponíveis
 */
export async function listarAgrupadores(): Promise<string[]> {
    await carregarIndice();

    const agrupadores = new Set<string>();
    const values = Array.from(modelosCache.values());
    for (const modelo of values) {
        agrupadores.add(modelo.agrupador);
    }

    return Array.from(agrupadores).sort();
}

/**
 * Estatísticas do cache
 */
export async function getEstatisticas(): Promise<{
    totalModelos: number;
    porAgrupador: Record<string, number>;
    porResultado: Record<string, number>;
}> {
    await carregarIndice();

    const porAgrupador: Record<string, number> = {};
    const porResultado: Record<string, number> = {};
    const values = Array.from(modelosCache.values());

    for (const modelo of values) {
        porAgrupador[modelo.agrupador] = (porAgrupador[modelo.agrupador] || 0) + 1;
        porResultado[modelo.resultado] = (porResultado[modelo.resultado] || 0) + 1;
    }

    return {
        totalModelos: modelosCache.size,
        porAgrupador,
        porResultado,
    };
}
