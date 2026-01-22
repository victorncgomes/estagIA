/**
 * estagIA - Backend Proxy Server
 * Proxy seguro para chamadas de API de IA
 * @version 0.1.1
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3108;

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
// HEALTH CHECK
// ============================================
app.get('/api/health', (req, res) => {
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
