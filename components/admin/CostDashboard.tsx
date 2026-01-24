/**
 * estagIA - Admin Cost Dashboard
 * Dashboard para monitoramento de custos de tokens e uso de APIs
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import {
    DollarSign,
    TrendingUp,
    Activity,
    AlertTriangle,
    RefreshCw,
    Calendar,
    BarChart3,
    PieChart as PieChartIcon,
    Clock,
    Zap,
    X,
} from 'lucide-react';

// Tipos
interface UsageSummary {
    totals: {
        inputTokens: number;
        outputTokens: number;
        totalCost: number;
        requestCount: number;
    };
    today: {
        inputTokens: number;
        outputTokens: number;
        cost: number;
        requests: number;
    };
    byApi: Record<string, {
        name: string;
        inputTokens: number;
        outputTokens: number;
        cost: number;
        requests: number;
    }>;
    projectedMonthlyCost: number;
    avgDailyCost: number;
}

interface DailyUsage {
    date: string;
    inputTokens: number;
    outputTokens: number;
    cost: number;
    requests: number;
}

interface RecentRequest {
    id: string;
    timestamp: string;
    api: string;
    inputTokens: number;
    outputTokens: number;
    cost: number;
}

// Cores por API
const API_COLORS: Record<string, string> = {
    gemini: '#4285F4',
    openai: '#10A37F',
    anthropic: '#D97757',
    perplexity: '#22D3EE',
    grok: '#1DA1F2',
    qwen: '#7C3AED',
};

// Componente principal
export default function CostDashboard({ onClose }: { onClose: () => void }) {
    const [summary, setSummary] = useState<UsageSummary | null>(null);
    const [dailyUsage, setDailyUsage] = useState<DailyUsage[]>([]);
    const [recentRequests, setRecentRequests] = useState<RecentRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

    const BACKEND_URL = window.location.hostname === 'localhost'
        ? 'http://localhost:3508'
        : 'https://estagia.up.railway.app';

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const [summaryRes, dailyRes, requestsRes] = await Promise.all([
                fetch(`${BACKEND_URL}/api/admin/usage`),
                fetch(`${BACKEND_URL}/api/admin/usage/daily?days=14`),
                fetch(`${BACKEND_URL}/api/admin/usage/requests?limit=20`),
            ]);

            if (!summaryRes.ok) throw new Error('Erro ao carregar resumo');

            const summaryData = await summaryRes.json();
            const dailyData = await dailyRes.json();
            const requestsData = await requestsRes.json();

            setSummary(summaryData);
            setDailyUsage(dailyData);
            setRecentRequests(requestsData);
            setLastUpdated(new Date());
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // Refresh a cada 30 segundos
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    const formatCurrency = (value: number) => {
        return `$${value.toFixed(4)}`;
    };

    const formatNumber = (value: number) => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(2)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
        return value.toString();
    };

    // Calcular porcentagem por API
    const getApiPercentages = () => {
        if (!summary) return [];
        const total = summary.totals.totalCost;
        if (total === 0) return [];

        const byApiTyped = summary.byApi as Record<string, {
            name: string;
            inputTokens: number;
            outputTokens: number;
            cost: number;
            requests: number;
        }>;

        return Object.entries(byApiTyped).map(([key, data]) => ({
            name: data.name,
            key,
            value: data.cost,
            percentage: (data.cost / total) * 100,
            color: API_COLORS[key] || '#6B7280',
        })).sort((a, b) => b.value - a.value);
    };

    // Determinar nível de alerta
    const getAlertLevel = () => {
        if (!summary) return null;
        const dailyCost = summary.today.cost;
        if (dailyCost > 5) return { level: 'critical', message: 'Custo diário acima de $5!' };
        if (dailyCost > 2) return { level: 'warning', message: 'Custo diário acima de $2' };
        if (summary.projectedMonthlyCost > 50) return { level: 'warning', message: 'Projeção mensal acima de $50' };
        return null;
    };

    const alert = getAlertLevel();
    const apiPercentages = getApiPercentages();

    if (loading && !summary) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 flex items-center gap-4">
                    <RefreshCw className="animate-spin text-blue-500" size={24} />
                    <span>Carregando dados de uso...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 text-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                            <BarChart3 size={28} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Dashboard de Custos</h1>
                            <p className="text-white/70 text-sm">
                                Atualizado: {lastUpdated.toLocaleTimeString()}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={fetchData}
                            className="p-2 hover:bg-white/10 rounded-lg transition"
                            title="Atualizar"
                        >
                            <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-lg transition"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Alerta */}
                {alert && (
                    <div className={`px-6 py-3 flex items-center gap-3 ${alert.level === 'critical' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                        <AlertTriangle size={18} />
                        <span className="text-sm font-medium">{alert.message}</span>
                    </div>
                )}

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
                    {error ? (
                        <div className="text-center py-12 text-red-400">
                            <AlertTriangle size={48} className="mx-auto mb-4" />
                            <p>{error}</p>
                            <button
                                onClick={fetchData}
                                className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                                Tentar novamente
                            </button>
                        </div>
                    ) : summary && (
                        <>
                            {/* Cards de Resumo */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {/* Custo Total */}
                                <div className="bg-gray-800 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-green-500/20 p-2 rounded-lg">
                                            <DollarSign className="text-green-400" size={20} />
                                        </div>
                                        <span className="text-gray-400 text-sm">Custo Total</span>
                                    </div>
                                    <p className="text-2xl font-bold text-green-400">
                                        {formatCurrency(summary.totals.totalCost)}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {summary.totals.requestCount} requisições
                                    </p>
                                </div>

                                {/* Custo Hoje */}
                                <div className="bg-gray-800 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-blue-500/20 p-2 rounded-lg">
                                            <Calendar className="text-blue-400" size={20} />
                                        </div>
                                        <span className="text-gray-400 text-sm">Hoje</span>
                                    </div>
                                    <p className="text-2xl font-bold text-blue-400">
                                        {formatCurrency(summary.today.cost)}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {summary.today.requests} requisições
                                    </p>
                                </div>

                                {/* Projeção Mensal */}
                                <div className="bg-gray-800 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-purple-500/20 p-2 rounded-lg">
                                            <TrendingUp className="text-purple-400" size={20} />
                                        </div>
                                        <span className="text-gray-400 text-sm">Projeção Mês</span>
                                    </div>
                                    <p className="text-2xl font-bold text-purple-400">
                                        {formatCurrency(summary.projectedMonthlyCost)}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Média: {formatCurrency(summary.avgDailyCost)}/dia
                                    </p>
                                </div>

                                {/* Tokens Totais */}
                                <div className="bg-gray-800 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-orange-500/20 p-2 rounded-lg">
                                            <Zap className="text-orange-400" size={20} />
                                        </div>
                                        <span className="text-gray-400 text-sm">Tokens</span>
                                    </div>
                                    <p className="text-2xl font-bold text-orange-400">
                                        {formatNumber(summary.totals.inputTokens + summary.totals.outputTokens)}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        In: {formatNumber(summary.totals.inputTokens)} | Out: {formatNumber(summary.totals.outputTokens)}
                                    </p>
                                </div>
                            </div>

                            {/* Gráficos */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Distribuição por API */}
                                <div className="bg-gray-800 rounded-xl p-5">
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <PieChartIcon size={20} className="text-gray-400" />
                                        Custo por API
                                    </h3>
                                    {apiPercentages.length > 0 ? (
                                        <div className="space-y-3">
                                            {apiPercentages.map((api) => (
                                                <div key={api.key} className="flex items-center gap-3">
                                                    <div
                                                        className="w-3 h-3 rounded-full flex-shrink-0"
                                                        style={{ backgroundColor: api.color }}
                                                    />
                                                    <span className="text-sm flex-1 truncate">{api.name}</span>
                                                    <span className="text-sm text-gray-400">
                                                        {formatCurrency(api.value)}
                                                    </span>
                                                    <div className="w-20 bg-gray-700 rounded-full h-2">
                                                        <div
                                                            className="h-2 rounded-full"
                                                            style={{
                                                                width: `${api.percentage}%`,
                                                                backgroundColor: api.color,
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="text-xs text-gray-500 w-12 text-right">
                                                        {api.percentage.toFixed(1)}%
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 text-center py-8">
                                            Nenhum uso registrado ainda
                                        </p>
                                    )}
                                </div>

                                {/* Uso por Dia */}
                                <div className="bg-gray-800 rounded-xl p-5">
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <Activity size={20} className="text-gray-400" />
                                        Últimos 14 dias
                                    </h3>
                                    <div className="flex items-end gap-1 h-40">
                                        {dailyUsage.map((day) => {
                                            const maxCost = Math.max(...dailyUsage.map(d => d.cost), 0.01);
                                            const height = (day.cost / maxCost) * 100;
                                            return (
                                                <div
                                                    key={day.date}
                                                    className="flex-1 flex flex-col items-center gap-1 group"
                                                >
                                                    <div className="relative w-full">
                                                        <div
                                                            className="w-full bg-gradient-to-t from-blue-600 to-purple-500 rounded-t transition-all group-hover:from-blue-500 group-hover:to-purple-400"
                                                            style={{ height: `${Math.max(height, 2)}%`, minHeight: '2px' }}
                                                        />
                                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                                                            {formatCurrency(day.cost)}
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] text-gray-500 rotate-45 origin-left">
                                                        {day.date.slice(5)}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Requisições Recentes */}
                            <div className="bg-gray-800 rounded-xl p-5">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Clock size={20} className="text-gray-400" />
                                    Requisições Recentes
                                </h3>
                                {recentRequests.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="text-gray-400 text-left border-b border-gray-700">
                                                    <th className="pb-2 pr-4">Hora</th>
                                                    <th className="pb-2 pr-4">API</th>
                                                    <th className="pb-2 pr-4 text-right">Input</th>
                                                    <th className="pb-2 pr-4 text-right">Output</th>
                                                    <th className="pb-2 text-right">Custo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {recentRequests.slice(0, 10).map((req) => (
                                                    <tr key={req.id} className="border-b border-gray-700/50">
                                                        <td className="py-2 pr-4 text-gray-400">
                                                            {new Date(req.timestamp).toLocaleTimeString()}
                                                        </td>
                                                        <td className="py-2 pr-4">
                                                            <span
                                                                className="px-2 py-1 rounded text-xs font-medium"
                                                                style={{
                                                                    backgroundColor: `${API_COLORS[req.api] || '#6B7280'}20`,
                                                                    color: API_COLORS[req.api] || '#9CA3AF',
                                                                }}
                                                            >
                                                                {req.api}
                                                            </span>
                                                        </td>
                                                        <td className="py-2 pr-4 text-right text-gray-400">
                                                            {formatNumber(req.inputTokens)}
                                                        </td>
                                                        <td className="py-2 pr-4 text-right text-gray-400">
                                                            {formatNumber(req.outputTokens)}
                                                        </td>
                                                        <td className="py-2 text-right text-green-400">
                                                            {formatCurrency(req.cost)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <p className="text-gray-500 text-center py-8">
                                        Nenhuma requisição registrada ainda
                                    </p>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
