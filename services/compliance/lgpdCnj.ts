/**
 * estagIA - Módulo de Compliance LGPD e CNJ
 * 
 * Implementa:
 * - Anonimização de dados pessoais (LGPD)
 * - Conformidade com Resolução CNJ 332/2020 (IA no Judiciário)
 * - Auditoria de decisões automatizadas
 * 
 * @version 1.0.0
 */

// ============================================
// LGPD - ANONIMIZAÇÃO DE DADOS PESSOAIS
// ============================================

/**
 * Padrões de dados pessoais para anonimização
 */
const PADROES_DADOS_PESSOAIS = {
    // CPF: 000.000.000-00 ou 00000000000
    cpf: /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g,

    // RG: 0.000.000 ou 0000000
    rg: /\d{1,2}\.?\d{3}\.?\d{3}/g,

    // Telefone: (00) 00000-0000 ou similar
    telefone: /\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}/g,

    // Email
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,

    // Endereço (padrão simplificado)
    endereco: /(?:rua|av\.|avenida|travessa|alameda)\s+[^,\n]+,?\s*(?:n[°º]?\s*)?\d+/gi,

    // Data de nascimento (DD/MM/AAAA)
    dataNascimento: /(?:nascido\s+em|nascimento:?\s*|d\.?\s*n\.?:?\s*)\s*\d{1,2}\/\d{1,2}\/\d{4}/gi,
};

/**
 * Anonimiza dados pessoais em um texto
 * Substitui por placeholders como [CPF], [TELEFONE], etc.
 */
export function anonimizarDadosPessoais(texto: string): {
    textoAnonimizado: string;
    dadosEncontrados: Record<string, number>;
} {
    let resultado = texto;
    const dadosEncontrados: Record<string, number> = {};

    // CPF
    const cpfs = texto.match(PADROES_DADOS_PESSOAIS.cpf) || [];
    dadosEncontrados['cpf'] = cpfs.length;
    resultado = resultado.replace(PADROES_DADOS_PESSOAIS.cpf, '[CPF OMITIDO]');

    // Telefone
    const telefones = texto.match(PADROES_DADOS_PESSOAIS.telefone) || [];
    dadosEncontrados['telefone'] = telefones.length;
    resultado = resultado.replace(PADROES_DADOS_PESSOAIS.telefone, '[TELEFONE OMITIDO]');

    // Email
    const emails = texto.match(PADROES_DADOS_PESSOAIS.email) || [];
    dadosEncontrados['email'] = emails.length;
    resultado = resultado.replace(PADROES_DADOS_PESSOAIS.email, '[EMAIL OMITIDO]');

    // Endereço
    const enderecos = texto.match(PADROES_DADOS_PESSOAIS.endereco) || [];
    dadosEncontrados['endereco'] = enderecos.length;
    resultado = resultado.replace(PADROES_DADOS_PESSOAIS.endereco, '[ENDEREÇO OMITIDO]');

    return { textoAnonimizado: resultado, dadosEncontrados };
}

// ============================================
// CNJ 332/2020 - RESOLUÇÃO SOBRE IA NO JUDICIÁRIO
// ============================================

/**
 * Requisitos da Resolução CNJ 332/2020
 * Art. 5º - Princípios da IA Judicial
 */
export const REQUISITOS_CNJ_332 = {
    transparencia: {
        descricao: 'Transparência quanto ao uso de IA na tomada de decisão',
        implementacao: 'Indicar na decisão que houve uso de sistema de IA como apoio'
    },
    supervisaoHumana: {
        descricao: 'Supervisão humana efetiva',
        implementacao: 'Juiz revisa e assina decisão gerada por IA'
    },
    naoDiscriminacao: {
        descricao: 'Não discriminação e imparcialidade',
        implementacao: 'Não usar dados sensíveis (raça, religião, orientação) na geração'
    },
    auditabilidade: {
        descricao: 'Possibilidade de auditoria',
        implementacao: 'Registrar inputs, outputs e parâmetros usados'
    },
    seguranca: {
        descricao: 'Segurança da informação',
        implementacao: 'Não expor dados pessoais, criptografia de dados sensíveis'
    }
};

/**
 * Registro de auditoria para conformidade CNJ
 */
export interface RegistroAuditoria {
    id: string;
    timestamp: Date;

    // Identificação
    magistrado: string;
    processo?: string;

    // Inputs (anonimizados)
    inputs: {
        materiaDetectada: string;
        materiaSelecionada: string;
        nivelProfundidade: number;
        insumosAnonimizados: string;
        orientacoes: string;
    };

    // Parâmetros do modelo
    modelo: {
        provedor: string;
        modelo: string;
        temperatura: number;
    };

    // RAG utilizado
    rag: {
        modelosUsados: string[];
        legislacaoUsada: string[];
        jurisprUsada: string[];
        doutrinaUsada: string[];
    };

    // Output
    output: {
        decisaoAnonimizada: string;
        tamanhoChars: number;
    };

    // Validação
    validacao: {
        estruturaScore: number;
        citacoesScore: number;
    };

    // Status
    status: 'gerada' | 'revisada' | 'assinada' | 'descartada';
}

/**
 * Cria registro de auditoria para uma decisão
 */
export function criarRegistroAuditoria(dados: {
    magistrado: string;
    processo?: string;
    materia: string;
    nivel: number;
    insumos: string;
    orientacoes: string;
    provedor: string;
    modelo: string;
    modelosUsados: string[];
    decisaoGerada: string;
}): RegistroAuditoria {
    const { textoAnonimizado: insumosAnon } = anonimizarDadosPessoais(dados.insumos);
    const { textoAnonimizado: decisaoAnon } = anonimizarDadosPessoais(dados.decisaoGerada);

    return {
        id: `audit_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        timestamp: new Date(),
        magistrado: dados.magistrado,
        processo: dados.processo,
        inputs: {
            materiaDetectada: dados.materia,
            materiaSelecionada: dados.materia,
            nivelProfundidade: dados.nivel,
            insumosAnonimizados: insumosAnon.slice(0, 500) + '...',
            orientacoes: dados.orientacoes.slice(0, 200),
        },
        modelo: {
            provedor: dados.provedor,
            modelo: dados.modelo,
            temperatura: 0.7,
        },
        rag: {
            modelosUsados: dados.modelosUsados,
            legislacaoUsada: [],
            jurisprUsada: [],
            doutrinaUsada: [],
        },
        output: {
            decisaoAnonimizada: decisaoAnon.slice(0, 1000) + '...',
            tamanhoChars: dados.decisaoGerada.length,
        },
        validacao: {
            estruturaScore: 0, // Será preenchido após validação
            citacoesScore: 0,
        },
        status: 'gerada',
    };
}

/**
 * Gera disclaimer de IA para inserção na decisão (opcional)
 */
export function gerarDisclaimerIA(): string {
    return `
[NOTA DE TRANSPARÊNCIA - Res. CNJ 332/2020]
Esta decisão foi elaborada com auxílio de sistema de inteligência artificial,
sob supervisão e revisão do magistrado signatário, que assume integral
responsabilidade pelo conteúdo.
`.trim();
}

/**
 * Verifica conformidade com CNJ 332/2020
 */
export function verificarConformidadeCNJ(registro: RegistroAuditoria): {
    conforme: boolean;
    requisitosAtendidos: string[];
    requisitosPendentes: string[];
} {
    const atendidos: string[] = [];
    const pendentes: string[] = [];

    // Transparência: verificar se há registro
    if (registro.id) {
        atendidos.push('Transparência (registro de auditoria)');
    } else {
        pendentes.push('Transparência (registro de auditoria)');
    }

    // Supervisão humana: verificar status
    if (registro.status === 'revisada' || registro.status === 'assinada') {
        atendidos.push('Supervisão humana (revisão/assinatura)');
    } else {
        pendentes.push('Supervisão humana (aguardando revisão)');
    }

    // Auditabilidade: verificar se inputs/outputs estão registrados
    if (registro.inputs && registro.output) {
        atendidos.push('Auditabilidade (inputs/outputs registrados)');
    }

    // Segurança: verificar se dados foram anonimizados
    if (!registro.inputs.insumosAnonimizados.includes('@') &&
        !registro.inputs.insumosAnonimizados.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/)) {
        atendidos.push('Segurança (dados anonimizados)');
    } else {
        pendentes.push('Segurança (possível dado pessoal não anonimizado)');
    }

    return {
        conforme: pendentes.length === 0,
        requisitosAtendidos: atendidos,
        requisitosPendentes: pendentes,
    };
}

export default {
    anonimizarDadosPessoais,
    REQUISITOS_CNJ_332,
    criarRegistroAuditoria,
    gerarDisclaimerIA,
    verificarConformidadeCNJ,
};
