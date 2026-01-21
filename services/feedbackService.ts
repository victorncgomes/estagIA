/**
 * estagIA - Serviço de Feedback
 * Gerencia armazenamento e recuperação de feedback do usuário
 */

import { MatterType, ProfundidadeJuridicaNivel } from '../types';

export interface FeedbackEntry {
    id: string;
    timestamp: string;
    materia: MatterType | null;
    profundidadeJuridica: ProfundidadeJuridicaNivel;
    inputRspe: string;
    inputMp: string;
    inputDefesa: string;
    orientacoesMerito: string;
    dispositivo: string;
    minutaGerada: string;
    promptUsado: string;
    feedback: 'up' | 'down';
    comentario: string;
    modeloBaseId?: string;
}

/**
 * Gera um ID único para o feedback
 */
function generateFeedbackId(): string {
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const random = Math.random().toString(36).substring(2, 6);
    return `${timestamp}_${random}`;
}

/**
 * Salva feedback no localStorage (para persistência local)
 * Em produção, isso seria enviado para um backend
 */
export function saveFeedback(entry: Omit<FeedbackEntry, 'id' | 'timestamp'>): FeedbackEntry {
    const now = new Date();
    const fullEntry: FeedbackEntry = {
        ...entry,
        id: generateFeedbackId(),
        timestamp: now.toISOString(),
    };

    // Salvar no localStorage
    const storageKey = entry.feedback === 'up' ? 'estagIA_feedback_positivo' : 'estagIA_feedback_negativo';
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]') as FeedbackEntry[];
    existing.push(fullEntry);
    localStorage.setItem(storageKey, JSON.stringify(existing));

    // Log para debug
    console.log(`[Feedback] Salvo feedback ${entry.feedback}:`, fullEntry);

    return fullEntry;
}

/**
 * Recupera todos os feedbacks de um tipo
 */
export function getFeedbacks(tipo: 'up' | 'down'): FeedbackEntry[] {
    const storageKey = tipo === 'up' ? 'estagIA_feedback_positivo' : 'estagIA_feedback_negativo';
    return JSON.parse(localStorage.getItem(storageKey) || '[]') as FeedbackEntry[];
}

/**
 * Recupera estatísticas de feedback
 */
export function getFeedbackStats(): { total: number; positivos: number; negativos: number; taxa: number } {
    const positivos = getFeedbacks('up').length;
    const negativos = getFeedbacks('down').length;
    const total = positivos + negativos;
    const taxa = total > 0 ? Math.round((positivos / total) * 100) : 0;

    return { total, positivos, negativos, taxa };
}

/**
 * Exporta feedbacks para JSON (para análise ou backup)
 */
export function exportFeedbacksToJson(): string {
    const all = {
        positivos: getFeedbacks('up'),
        negativos: getFeedbacks('down'),
        exportedAt: new Date().toISOString(),
    };
    return JSON.stringify(all, null, 2);
}

// ============================================
// VALIDAÇÃO DE DECISÕES PARA O BANCO
// ============================================

export interface DecisaoParaValidar {
    nome?: string;
    conteudo: string;
    agrupador: string;
    nivelQualidade: 4 | 5;
    promptOriginal?: string;
    modeloIA?: string;
}

export interface ValidacaoResult {
    success: boolean;
    id?: string;
    message: string;
    error?: string;
}

const BACKEND_URL = 'http://localhost:3108';

/**
 * Valida uma decisão gerada e envia para o banco de modelos
 * Apenas decisões com nível 4 ou 5 podem ser validadas
 */
export async function validarDecisaoParaBanco(decisao: DecisaoParaValidar): Promise<ValidacaoResult> {
    try {
        // Validação local primeiro
        if (decisao.nivelQualidade < 4 || decisao.nivelQualidade > 5) {
            return {
                success: false,
                message: 'Apenas decisões com nível 4 ou 5 podem ser validadas',
            };
        }

        if (!decisao.conteudo || decisao.conteudo.trim().length < 100) {
            return {
                success: false,
                message: 'Conteúdo da decisão muito curto para validação',
            };
        }

        // Enviar para o backend
        const response = await fetch(`${BACKEND_URL}/api/validar-decisao`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...decisao,
                validadoPor: 'usuario',
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                success: false,
                message: data.error || 'Erro ao validar decisão',
                error: data.error,
            };
        }

        // Salvar localmente também (backup)
        const validadasLocal = JSON.parse(localStorage.getItem('estagIA_decisoes_validadas') || '[]');
        validadasLocal.push({
            id: data.id,
            ...decisao,
            dataValidacao: new Date().toISOString(),
        });
        localStorage.setItem('estagIA_decisoes_validadas', JSON.stringify(validadasLocal));

        console.log(`[Validação] ✅ Decisão validada: ${data.id}`);

        return {
            success: true,
            id: data.id,
            message: 'Decisão validada e adicionada ao banco com sucesso!',
        };
    } catch (error) {
        console.error('[Validação] Erro:', error);
        return {
            success: false,
            message: 'Erro de conexão com o servidor',
            error: String(error),
        };
    }
}

/**
 * Recupera decisões validadas do localStorage (backup local)
 */
export function getDecisoesValidadasLocal(): DecisaoParaValidar[] {
    return JSON.parse(localStorage.getItem('estagIA_decisoes_validadas') || '[]');
}

/**
 * Recupera decisões validadas do backend
 */
export async function getDecisoesValidadasBackend(): Promise<DecisaoParaValidar[]> {
    try {
        const response = await fetch(`${BACKEND_URL}/api/decisoes-validadas`);
        const data = await response.json();
        return data.decisoes || [];
    } catch (error) {
        console.error('[Validação] Erro ao buscar decisões:', error);
        return getDecisoesValidadasLocal(); // Fallback para local
    }
}

export default saveFeedback;

