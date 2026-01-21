/**
 * estagIA - Tipos para Integrações de IA
 * @version 0.1.1
 */

// Providers disponíveis
export type AIProvider = 'gemini' | 'anthropic' | 'perplexity' | 'grok' | 'openai';

// Configuração de um provider
export interface AIProviderConfig {
    id: AIProvider;
    name: string;
    model: string;
    apiKey: string;
    baseUrl?: string;
    maxTokens: number;
    temperature: number;
    enabled: boolean;
}

// Mensagem para chat completion
export interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

// Resposta de completion
export interface CompletionResponse {
    provider: AIProvider;
    content: string;
    usage?: {
        promptTokens: number;
        completionTokens: number;
        totalTokens: number;
    };
    latency: number;
    model: string;
}

// Etapa do pipeline
export interface PipelineStage {
    id: string;
    name: string;
    provider: AIProvider;
    purpose: string;
    order: number;
}

// Resultado do pipeline
export interface PipelineResult {
    stages: {
        stage: PipelineStage;
        response: CompletionResponse;
        success: boolean;
        error?: string;
    }[];
    finalOutput: string;
    totalLatency: number;
    totalTokens: number;
}

// ===========================================
// TIPOS PARA KNOWLEDGE BASE (RAG)
// ===========================================

// Documento na base de conhecimento
export interface KnowledgeDocument {
    id: string;
    title: string;
    content: string;
    type: 'minuta' | 'jurisprudencia' | 'legislacao' | 'doutrina' | 'modelo';
    materia?: string;
    tags: string[];
    embedding?: number[];
    createdAt: Date;
    updatedAt: Date;
}

// Chunk de documento para embedding
export interface DocumentChunk {
    id: string;
    documentId: string;
    content: string;
    embedding?: number[];
    metadata: {
        position: number;
        totalChunks: number;
    };
}

// Resultado de busca na knowledge base
export interface SearchResult {
    document: KnowledgeDocument;
    chunk?: DocumentChunk;
    score: number;
    highlights: string[];
}

// Configuração de RAG
export interface RAGConfig {
    maxResults: number;
    minScore: number;
    includeMetadata: boolean;
    chunkSize: number;
    chunkOverlap: number;
}

// ===========================================
// TIPOS PARA GENERATION
// ===========================================

// Input para geração de decisão
export interface GenerationInput {
    materia: string;
    inputs: {
        mp: string;
        defesa: string;
        rspe: string;
        outros: string;
    };
    guidance: {
        merit: string;
        device: string;
        prolixity: number;
        internetLevel: number;
        profile: string;
    };
    knowledgeContext?: SearchResult[];
}

// Output da geração
export interface GenerationOutput {
    decision: string;
    prompt: string;
    sources: SearchResult[];
    pipeline: PipelineResult;
    confidence: number;
    warnings: string[];
}
