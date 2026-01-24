/**
 * estagIA - Token Tracker
 * Sistema de monitoramento de uso e custos de APIs de IA
 * @version 1.0.0
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================
// CONFIGURAÇÃO DE PREÇOS (Janeiro 2026)
// ============================================

export const API_PRICING = {
    gemini: { name: 'Gemini Flash 2.0', inputPer1M: 0.10, outputPer1M: 0.40 },
    openai: { name: 'GPT-4o-mini', inputPer1M: 0.15, outputPer1M: 0.60 },
    anthropic: { name: 'Claude Sonnet 3.5', inputPer1M: 3.00, outputPer1M: 15.00 },
    perplexity: { name: 'Perplexity API', inputPer1M: 0.20, outputPer1M: 0.20 },
    grok: { name: 'xAI Grok', inputPer1M: 5.00, outputPer1M: 15.00 },
    qwen: { name: 'Qwen 7B (local)', inputPer1M: 0.00, outputPer1M: 0.00 },
    llama: { name: 'Llama 3.1 8B (local)', inputPer1M: 0.00, outputPer1M: 0.00 },
};

// ============================================
// ARQUIVO DE DADOS
// ============================================

const DATA_DIR = path.join(__dirname, 'data');
const USAGE_FILE = path.join(DATA_DIR, 'usage.json');

// Garantir que o diretório existe
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// ============================================
// ESTRUTURA DE DADOS
// ============================================

function getEmptyUsageData() {
    return {
        version: '1.0.0',
        createdAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        totals: {
            inputTokens: 0,
            outputTokens: 0,
            totalCost: 0,
            requestCount: 0,
        },
        byApi: {},
        byDay: {},
        byUser: {},
        requests: [], // Últimos 1000 requests para auditoria
    };
}

// Carregar dados existentes ou criar novo
function loadUsageData() {
    try {
        if (fs.existsSync(USAGE_FILE)) {
            const data = JSON.parse(fs.readFileSync(USAGE_FILE, 'utf-8'));
            return data;
        }
    } catch (error) {
        console.error('❌ Erro ao carregar usage.json:', error.message);
    }
    return getEmptyUsageData();
}

// Salvar dados
function saveUsageData(data) {
    try {
        data.lastUpdated = new Date().toISOString();
        fs.writeFileSync(USAGE_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('❌ Erro ao salvar usage.json:', error.message);
    }
}

// ============================================
// FUNÇÕES DE CÁLCULO
// ============================================

/**
 * Estima tokens de uma string (aproximação: 4 chars = 1 token)
 */
function estimateTokens(text) {
    if (!text) return 0;
    if (typeof text !== 'string') text = JSON.stringify(text);
    return Math.ceil(text.length / 4);
}

/**
 * Calcula custo em dólares
 */
function calculateCost(api, inputTokens, outputTokens) {
    const pricing = API_PRICING[api];
    if (!pricing) return 0;

    const inputCost = (inputTokens / 1_000_000) * pricing.inputPer1M;
    const outputCost = (outputTokens / 1_000_000) * pricing.outputPer1M;

    return inputCost + outputCost;
}

// ============================================
// TRACKER PRINCIPAL
// ============================================

class TokenTracker {
    constructor() {
        this.data = loadUsageData();
        this.pendingSave = false;

        // Auto-save a cada 30 segundos
        setInterval(() => {
            if (this.pendingSave) {
                saveUsageData(this.data);
                this.pendingSave = false;
            }
        }, 30000);
    }

    /**
     * Registra uma chamada de API
     */
    track(api, inputText, outputText, userId = 'system', metadata = {}) {
        const inputTokens = estimateTokens(inputText);
        const outputTokens = estimateTokens(outputText);
        const cost = calculateCost(api, inputTokens, outputTokens);
        const today = new Date().toISOString().split('T')[0];
        const timestamp = new Date().toISOString();

        // Atualizar totais
        this.data.totals.inputTokens += inputTokens;
        this.data.totals.outputTokens += outputTokens;
        this.data.totals.totalCost += cost;
        this.data.totals.requestCount += 1;

        // Atualizar por API
        if (!this.data.byApi[api]) {
            this.data.byApi[api] = {
                name: API_PRICING[api]?.name || api,
                inputTokens: 0,
                outputTokens: 0,
                cost: 0,
                requests: 0,
            };
        }
        this.data.byApi[api].inputTokens += inputTokens;
        this.data.byApi[api].outputTokens += outputTokens;
        this.data.byApi[api].cost += cost;
        this.data.byApi[api].requests += 1;

        // Atualizar por dia
        if (!this.data.byDay[today]) {
            this.data.byDay[today] = {
                inputTokens: 0,
                outputTokens: 0,
                cost: 0,
                requests: 0,
            };
        }
        this.data.byDay[today].inputTokens += inputTokens;
        this.data.byDay[today].outputTokens += outputTokens;
        this.data.byDay[today].cost += cost;
        this.data.byDay[today].requests += 1;

        // Atualizar por usuário
        if (!this.data.byUser[userId]) {
            this.data.byUser[userId] = {
                inputTokens: 0,
                outputTokens: 0,
                cost: 0,
                requests: 0,
            };
        }
        this.data.byUser[userId].inputTokens += inputTokens;
        this.data.byUser[userId].outputTokens += outputTokens;
        this.data.byUser[userId].cost += cost;
        this.data.byUser[userId].requests += 1;

        // Adicionar ao log de requests (manter últimos 1000)
        this.data.requests.unshift({
            id: `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp,
            api,
            userId,
            inputTokens,
            outputTokens,
            cost,
            ...metadata,
        });

        // Limitar a 1000 requests
        if (this.data.requests.length > 1000) {
            this.data.requests = this.data.requests.slice(0, 1000);
        }

        this.pendingSave = true;

        // Log para console
        console.log(`💰 [${api}] ${inputTokens}→${outputTokens} tokens | $${cost.toFixed(6)}`);

        return {
            inputTokens,
            outputTokens,
            cost,
        };
    }

    /**
     * Retorna resumo de uso
     */
    getSummary() {
        const today = new Date().toISOString().split('T')[0];
        const todayData = this.data.byDay[today] || { inputTokens: 0, outputTokens: 0, cost: 0, requests: 0 };

        // Calcular média diária para projeção
        const days = Object.keys(this.data.byDay).length || 1;
        const avgDailyCost = this.data.totals.totalCost / days;
        const daysInMonth = 30;
        const projectedMonthlyCost = avgDailyCost * daysInMonth;

        return {
            totals: this.data.totals,
            today: todayData,
            byApi: this.data.byApi,
            projectedMonthlyCost,
            avgDailyCost,
            pricing: API_PRICING,
        };
    }

    /**
     * Retorna uso por dia (para gráficos)
     */
    getDailyUsage(lastNDays = 30) {
        const result = [];
        const now = new Date();

        for (let i = lastNDays - 1; i >= 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            const dayData = this.data.byDay[dateStr] || {
                inputTokens: 0,
                outputTokens: 0,
                cost: 0,
                requests: 0,
            };

            result.push({
                date: dateStr,
                ...dayData,
            });
        }

        return result;
    }

    /**
     * Retorna requests recentes
     */
    getRecentRequests(limit = 50) {
        return this.data.requests.slice(0, limit);
    }

    /**
     * Força salvamento imediato
     */
    save() {
        saveUsageData(this.data);
        this.pendingSave = false;
    }

    /**
     * Reseta todos os dados (para testes)
     */
    reset() {
        this.data = getEmptyUsageData();
        saveUsageData(this.data);
    }
}

// Exportar instância singleton
const tracker = new TokenTracker();

export default tracker;
export { API_PRICING, estimateTokens, calculateCost };
