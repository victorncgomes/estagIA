/**
 * estagIA - Backend Proxy Server
 * Proxy seguro para chamadas de API de IA
 * @version 1.0.0 - Com Token Tracking
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import tracker, { API_PRICING } from './tokenTracker.js';

// Configuração do Ollama (Llama local)
const OLLAMA_URL = 'http://localhost:11434';
const LLAMA_MODEL = 'llama3.1:8b';

const app = express();
const PORT = process.env.PORT || 3508;

// Origens permitidas (local + produção)
const ALLOWED_ORIGINS = [
    'http://localhost:3008',
    'https://estagia.vercel.app',
    'https://estagia.up.railway.app',
    process.env.FRONTEND_URL,
].filter(Boolean);

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        // Permitir requests sem origin (ex: curl, Postman)
        if (!origin) return callback(null, true);
        if (ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed.replace(/\/$/, '')))) {
            return callback(null, true);
        }
        callback(new Error('CORS não permitido'));
    },
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(express.json({ limit: '50mb' }));

// Chaves de API do ambiente
const API_KEYS = {
    gemini: process.env.GEMINI_API_KEY || '',
    anthropic: process.env.ANTHROPIC_API_KEY || '',
    perplexity: process.env.PERPLEXITY_API_KEY || '',
    grok: process.env.GROK_API_KEY || '',
    openai: process.env.OPENAI_API_KEY || '',
};

// ============================================
// ROTA RAIZ
// ============================================
app.get('/', (req, res) => {
    res.json({
        name: 'estagIA Backend API',
        version: '0.3.2',
        status: 'online',
        endpoints: [
            'GET /api/health',
            'POST /api/gemini',
            'POST /api/anthropic',
            'POST /api/grok',
            'POST /api/perplexity',
            'POST /api/openai',
            'GET /api/admin/usage',
            'GET /api/admin/usage/summary',
            'GET /api/admin/usage/daily',
            'GET /api/admin/usage/requests'
        ]
    });
});

// ============================================
// PROXY PARA GEMINI
// ============================================
app.post('/api/gemini', async (req, res) => {
    try {
        const { model, contents, generationConfig, systemInstruction } = req.body;

        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEYS.gemini}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents, generationConfig, systemInstruction }),
        });

        const data = await response.json();

        // Track usage
        const inputText = JSON.stringify(contents);
        const outputText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        tracker.track('gemini', inputText, outputText, 'system', { model });

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error('Gemini proxy error:', error);
        res.status(500).json({ error: error.message });
    }
});

// ============================================
// PROXY PARA ANTHROPIC (CLAUDE)
// ============================================
app.post('/api/anthropic', async (req, res) => {
    try {
        const { model, messages, system, max_tokens, temperature } = req.body;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEYS.anthropic,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({ model, messages, system, max_tokens, temperature }),
        });

        const data = await response.json();

        // Track usage
        const inputText = JSON.stringify(messages) + (system || '');
        const outputText = data?.content?.[0]?.text || '';
        tracker.track('anthropic', inputText, outputText, 'system', { model });

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error('Anthropic proxy error:', error);
        res.status(500).json({ error: error.message });
    }
});

// ============================================
// PROXY PARA GROK (XAI)
// ============================================
app.post('/api/grok', async (req, res) => {
    try {
        const { model, messages, max_tokens, temperature } = req.body;

        const response = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEYS.grok}`,
            },
            body: JSON.stringify({ model, messages, max_tokens, temperature }),
        });

        const data = await response.json();

        // Track usage
        const inputText = JSON.stringify(messages);
        const outputText = data?.choices?.[0]?.message?.content || '';
        tracker.track('grok', inputText, outputText, 'system', { model });

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error('Grok proxy error:', error);
        res.status(500).json({ error: error.message });
    }
});

// ============================================
// PROXY PARA PERPLEXITY
// ============================================
app.post('/api/perplexity', async (req, res) => {
    try {
        const { model, messages, max_tokens, temperature } = req.body;

        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEYS.perplexity}`,
            },
            body: JSON.stringify({ model, messages, max_tokens, temperature, return_citations: true }),
        });

        const data = await response.json();

        // Track usage
        const inputText = JSON.stringify(messages);
        const outputText = data?.choices?.[0]?.message?.content || '';
        tracker.track('perplexity', inputText, outputText, 'system', { model });

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error('Perplexity proxy error:', error);
        res.status(500).json({ error: error.message });
    }
});

// ============================================
// PROXY PARA OPENAI (ChatGPT)
// ============================================
app.post('/api/openai', async (req, res) => {
    try {
        const { model, messages, max_tokens, temperature } = req.body;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEYS.openai}`,
            },
            body: JSON.stringify({
                model: model || 'gpt-4o',
                messages,
                max_tokens: max_tokens || 4096,
                temperature: temperature || 0.7
            }),
        });

        const data = await response.json();

        // Track usage
        const inputText = JSON.stringify(messages);
        const outputText = data?.choices?.[0]?.message?.content || '';
        tracker.track('openai', inputText, outputText, 'system', { model });

        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        res.json(data);
    } catch (error) {
        console.error('OpenAI proxy error:', error);
        res.status(500).json({ error: error.message });
    }
});

// ============================================
// PROXY PARA LLAMA LOCAL (Tier 0 - Custo $0)
// ============================================
app.post('/api/llama', async (req, res) => {
    try {
        const { prompt, system, model, max_tokens, temperature } = req.body;

        const selectedModel = model || LLAMA_MODEL;
        const inputContent = (system || '') + prompt;

        const response = await fetch(`${OLLAMA_URL}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: selectedModel,
                prompt: prompt,
                system: system || '',
                stream: false,
                options: {
                    temperature: temperature || 0.3,
                    num_predict: max_tokens || 2000,
                },
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Ollama error:', errorText);
            return res.status(response.status).json({ error: 'Llama local error', details: errorText });
        }

        const data = await response.json();

        // Track usage (custo $0 para local)
        tracker.track({
            api: 'llama',
            inputTokens: data.prompt_eval_count || Math.round(inputContent.length / 4),
            outputTokens: data.eval_count || Math.round((data.response || '').length / 4),
            userId: req.headers['x-user-id'] || 'anonymous',
        });

        res.json({
            response: data.response,
            model: selectedModel,
            usage: {
                prompt_tokens: data.prompt_eval_count || 0,
                completion_tokens: data.eval_count || 0,
                total_tokens: (data.prompt_eval_count || 0) + (data.eval_count || 0),
            },
            cost: 0, // Llama local é gratuito
            tier: 0,
        });
    } catch (error) {
        console.error('Llama proxy error:', error);
        res.status(500).json({ error: error.message, details: 'Verifique se Ollama está rodando (ollama serve)' });
    }
});

// ============================================
// VALIDAÇÃO DE DECISÕES
// ============================================
import fs from 'fs';
import path from 'path';

const VALIDADOS_PATH = path.join(
    process.cwd(),
    '..',
    'services',
    'templates',
    'JuizHenriqueBaltazar',
    'decisoes',
    'validados.ts'
);

// Armazenamento em memória (persistido em arquivo)
let decisoesValidadas = [];

app.post('/api/validar-decisao', async (req, res) => {
    try {
        const {
            nome,
            conteudo,
            agrupador,
            nivelQualidade,
            promptOriginal,
            modeloIA,
            validadoPor = 'usuario',
        } = req.body;

        // Validação
        if (!conteudo || !agrupador || !nivelQualidade) {
            return res.status(400).json({
                error: 'Campos obrigatórios: conteudo, agrupador, nivelQualidade',
            });
        }

        if (nivelQualidade < 4 || nivelQualidade > 5) {
            return res.status(400).json({
                error: 'Apenas decisões com nível 4 ou 5 podem ser validadas',
            });
        }

        // Gerar ID único
        const data = new Date().toISOString().split('T')[0].replace(/-/g, '');
        const seq = String(decisoesValidadas.length + 1).padStart(3, '0');
        const id = `validado_${data}_${seq}`;

        const decisao = {
            id,
            nome: nome || `Decisão Validada - ${agrupador}`,
            tipoDocumento: 'decisao',
            magistrado: 'henriqueBaltazar',
            agrupador,
            fonteOriginal: 'VALIDADO',
            dataExtracao: new Date().toISOString().split('T')[0],
            conteudo,
            nivelQualidade,
            dataValidacao: new Date().toISOString(),
            validadoPor,
            promptOriginal: promptOriginal || '',
            modeloIA: modeloIA || 'unknown',
        };

        // Adicionar à memória
        decisoesValidadas.push(decisao);

        // Log para debug
        console.log(`✅ Decisão validada: ${id} (${agrupador}, nível ${nivelQualidade})`);

        res.json({
            success: true,
            id,
            message: 'Decisão validada e adicionada ao banco',
            total: decisoesValidadas.length,
        });
    } catch (error) {
        console.error('Erro ao validar decisão:', error);
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para listar decisões validadas
app.get('/api/decisoes-validadas', (req, res) => {
    res.json({
        total: decisoesValidadas.length,
        decisoes: decisoesValidadas,
    });
});

// ============================================
// ADMIN - USAGE TRACKING
// ============================================

// Resumo completo de uso
app.get('/api/admin/usage', (req, res) => {
    const summary = tracker.getSummary();
    res.json(summary);
});

// Resumo simplificado
app.get('/api/admin/usage/summary', (req, res) => {
    const summary = tracker.getSummary();
    res.json({
        totals: summary.totals,
        today: summary.today,
        projectedMonthlyCost: summary.projectedMonthlyCost,
        avgDailyCost: summary.avgDailyCost,
    });
});

// Uso por dia (para gráficos)
app.get('/api/admin/usage/daily', (req, res) => {
    const days = parseInt(req.query.days) || 30;
    const dailyUsage = tracker.getDailyUsage(days);
    res.json(dailyUsage);
});

// Requests recentes (auditoria)
app.get('/api/admin/usage/requests', (req, res) => {
    const limit = parseInt(req.query.limit) || 50;
    const requests = tracker.getRecentRequests(limit);
    res.json(requests);
});

// Tabela de preços
app.get('/api/admin/pricing', (req, res) => {
    res.json(API_PRICING);
});

// Reset de dados (apenas para dev)
app.post('/api/admin/usage/reset', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        return res.status(403).json({ error: 'Não permitido em produção' });
    }
    tracker.reset();
    res.json({ success: true, message: 'Dados de uso resetados' });
});

// ============================================
// HEALTH CHECK
// ============================================
app.get('/api/health', (req, res) => {
    const usage = tracker.getSummary();
    res.json({
        status: 'ok',
        providers: {
            gemini: !!API_KEYS.gemini,
            anthropic: !!API_KEYS.anthropic,
            perplexity: !!API_KEYS.perplexity,
            grok: !!API_KEYS.grok,
            openai: !!API_KEYS.openai,
        },
        decisoesValidadas: decisoesValidadas.length,
        usage: {
            totalCost: usage.totals.totalCost.toFixed(4),
            totalRequests: usage.totals.requestCount,
            todayCost: usage.today.cost.toFixed(4),
        },
        timestamp: new Date().toISOString(),
    });
});

// ============================================
// INICIALIZAÇÃO
// ============================================
app.listen(PORT, () => {
    console.log(`\n🚀 estagIA Backend Proxy rodando em http://localhost:${PORT}`);
    console.log('\nProviders configurados:');
    console.log(`  - Gemini: ${API_KEYS.gemini ? '✅' : '❌'}`);
    console.log(`  - Anthropic: ${API_KEYS.anthropic ? '✅' : '❌'}`);
    console.log(`  - Perplexity: ${API_KEYS.perplexity ? '✅' : '❌'}`);
    console.log(`  - Grok: ${API_KEYS.grok ? '✅' : '❌'}`);
    console.log(`  - OpenAI: ${API_KEYS.openai ? '✅' : '❌'}`);
    console.log('\n');
});
