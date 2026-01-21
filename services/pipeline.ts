/**
 * estagIA - Pipeline Real de Geração de Decisões
 * @version 0.1.4
 * 
 * Pipeline que usa APIs reais de IA para gerar decisões judiciais
 * Integrado com Core Baltazar para conhecimento do juiz
 */

import { useStore } from '../store';
import { LogEntry } from '../types';
import { callGemini } from './ai/gemini';
import { callAnthropic } from './ai/anthropic';
import { getAvailableProviders, SYSTEM_PROMPTS } from './ai/config';
import { buildWritingSystemPrompt } from './knowledge/coreBaltazar';

// Adiciona log ao store
const addLog = (log: Omit<LogEntry, 'id' | 'timestamp'>) => {
  const store = useStore.getState();
  store.addLog({
    ...log,
    id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date(),
  });
};

// Formata o contexto do caso para o prompt
const buildCaseContext = () => {
  const { inputs, selectedMatter, guidance } = useStore.getState();

  let context = `## MATÉRIA: ${selectedMatter?.toUpperCase() || 'NÃO ESPECIFICADA'}\n\n`;

  if (inputs.rspe) {
    context += `## RELATÓRIO DA SITUAÇÃO PROCESSUAL EXECUTÓRIA (RSPE)\n${inputs.rspe}\n\n`;
  }

  if (inputs.mp) {
    context += `## MANIFESTAÇÃO DO MINISTÉRIO PÚBLICO\n${inputs.mp}\n\n`;
  }

  if (inputs.defesa) {
    context += `## MANIFESTAÇÃO DA DEFESA\n${inputs.defesa}\n\n`;
  }

  if (inputs.outros) {
    context += `## OUTROS DOCUMENTOS\n${inputs.outros}\n\n`;
  }

  context += `## ORIENTAÇÕES DE MÉRITO DO JUIZ\n${guidance.merit || 'Nenhuma orientação específica fornecida.'}\n\n`;

  if (guidance.device) {
    context += `## DISPOSITIVO INDICADO\n${guidance.device}\n\n`;
  }

  context += `## PARÂMETROS\n- Prolixidade: ${guidance.prolixity}/5\n- Perfil de estilo: ${guidance.profile}\n`;

  return context;
};

/**
 * Pipeline principal de geração de decisão
 * Usa Gemini para extração/validação e Claude para redação final
 */
export const runPipeline = async () => {
  const store = useStore.getState();
  const { startGeneration, finishGeneration, guidance, selectedMatter } = store;
  const availableProviders = getAvailableProviders();

  // Verificar se há providers disponíveis
  if (availableProviders.length === 0) {
    addLog({
      stage: 'extraction',
      message: 'Nenhuma API de IA configurada. Configure as chaves no backend.',
      status: 'error',
    });
    return;
  }

  startGeneration();
  const caseContext = buildCaseContext();
  let extractedData = '';
  let finalDecision = '';
  let fullPrompt = '';

  try {
    // ===============================================
    // FASE 1: EXTRAÇÃO DE DADOS (Gemini)
    // ===============================================
    addLog({
      stage: 'extraction',
      message: 'Iniciando extração de dados estruturados (Gemini)',
      status: 'pending',
    });

    if (availableProviders.includes('gemini')) {
      const extractionResponse = await callGemini([
        { role: 'system', content: SYSTEM_PROMPTS.extraction },
        { role: 'user', content: `Extraia os dados estruturados do seguinte caso:\n\n${caseContext}` }
      ]);

      extractedData = extractionResponse.content;

      addLog({
        stage: 'extraction',
        message: `Dados extraídos com sucesso (${extractionResponse.latency?.toFixed(0)}ms)`,
        status: 'success',
        details: `${extractionResponse.usage?.totalTokens || 0} tokens usados`,
        duration: extractionResponse.latency ? extractionResponse.latency / 1000 : 0,
      });
    } else {
      // Fallback: usar contexto bruto se Gemini não disponível
      extractedData = caseContext;
      addLog({
        stage: 'extraction',
        message: 'Gemini não disponível - usando dados brutos',
        status: 'warning',
      });
    }

    // ===============================================
    // FASE 2: VALIDAÇÃO ANTI-ALUCINAÇÃO (Gemini)
    // ===============================================
    addLog({
      stage: 'validation',
      message: 'Validando dados e verificando possíveis alucinações',
      status: 'pending',
    });

    let validatedData = extractedData;

    if (availableProviders.includes('gemini')) {
      const validationResponse = await callGemini([
        { role: 'system', content: SYSTEM_PROMPTS.validation },
        { role: 'user', content: `Valide os seguintes dados extraídos. Marque qualquer inconsistência:\n\nDADOS EXTRAÍDOS:\n${extractedData}\n\nDOCUMENTOS ORIGINAIS:\n${caseContext}` }
      ]);

      validatedData = validationResponse.content;

      addLog({
        stage: 'validation',
        message: `Validação concluída (${validationResponse.latency?.toFixed(0)}ms)`,
        status: 'success',
        duration: validationResponse.latency ? validationResponse.latency / 1000 : 0,
      });
    } else {
      addLog({
        stage: 'validation',
        message: 'Validação pulada - Gemini não disponível',
        status: 'warning',
      });
    }

    // ===============================================
    // FASE 3: REDAÇÃO FINAL (Claude)
    // ===============================================
    addLog({
      stage: 'writing',
      message: `Redigindo decisão final (Claude) - Perfil: ${guidance.profile}`,
      status: 'pending',
    });

    // Construir prompt de escrita com nível de prolixidade
    const prolixityGuide = {
      1: 'Seja extremamente conciso. Máximo 3 parágrafos. Apenas o essencial.',
      2: 'Seja breve. Fundamentação curta e direta.',
      3: 'Prolixidade padrão. Fundamentação adequada sem excessos.',
      4: 'Seja detalhado. Explore os argumentos com mais profundidade.',
      5: 'Seja exaustivo. Cite toda a jurisprudência relevante e desenvolva longamente.',
    }[guidance.prolixity] || '';

    // Usa o buildWritingSystemPrompt do Core Baltazar (conhecimento completo do juiz)
    const corePrompt = buildWritingSystemPrompt(selectedMatter || 'BENEFÍCIO');

    const writingPrompt = `${corePrompt}

## NÍVEL DE PROLIXIDADE: ${guidance.prolixity}/5
${prolixityGuide}

## DADOS VALIDADOS DO CASO
Com base nos dados validados abaixo, redija a decisão judicial completa:

${validatedData}`;

    fullPrompt = writingPrompt;

    if (availableProviders.includes('anthropic')) {
      try {
        const writingResponse = await callAnthropic([
          { role: 'system', content: writingPrompt },
          { role: 'user', content: 'Redija a decisão judicial completa seguindo o perfil e formato indicados.' }
        ]);

        finalDecision = writingResponse.content;

        addLog({
          stage: 'writing',
          message: `Decisão redigida com sucesso (${writingResponse.latency?.toFixed(0)}ms)`,
          status: 'success',
          details: `${writingResponse.usage?.totalTokens || 0} tokens usados`,
          duration: writingResponse.latency ? writingResponse.latency / 1000 : 0,
        });
      } catch (claudeError) {
        // Fallback para Gemini se Claude falhar (ex: sem créditos)
        addLog({
          stage: 'writing',
          message: `Claude indisponível, usando Gemini como fallback`,
          status: 'warning',
          details: claudeError instanceof Error ? claudeError.message : 'Erro desconhecido',
        });

        if (availableProviders.includes('gemini')) {
          const writingResponse = await callGemini([
            { role: 'system', content: writingPrompt },
            { role: 'user', content: 'Redija a decisão judicial completa seguindo o perfil e formato indicados.' }
          ]);

          finalDecision = writingResponse.content;

          addLog({
            stage: 'writing',
            message: `Decisão redigida com Gemini (fallback) - ${writingResponse.latency?.toFixed(0)}ms`,
            status: 'success',
            duration: writingResponse.latency ? writingResponse.latency / 1000 : 0,
          });
        } else {
          throw claudeError; // Re-throw se não houver fallback
        }
      }
    } else if (availableProviders.includes('gemini')) {
      // Fallback para Gemini se Claude não disponível
      const writingResponse = await callGemini([
        { role: 'system', content: writingPrompt },
        { role: 'user', content: 'Redija a decisão judicial completa seguindo o perfil e formato indicados.' }
      ]);

      finalDecision = writingResponse.content;

      addLog({
        stage: 'writing',
        message: `Decisão redigida com Gemini (fallback) - ${writingResponse.latency?.toFixed(0)}ms`,
        status: 'success',
        duration: writingResponse.latency ? writingResponse.latency / 1000 : 0,
      });
    } else {
      throw new Error('Nenhum provider disponível para redação');
    }

    // ===============================================
    // FINALIZAÇÃO
    // ===============================================
    addLog({
      stage: 'review',
      message: 'Pipeline concluído! Decisão pronta para revisão humana.',
      status: 'success',
    });

    finishGeneration(finalDecision, fullPrompt);

  } catch (error) {
    console.error('Pipeline error:', error);

    addLog({
      stage: 'writing',
      message: `Erro no pipeline: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
      status: 'error',
    });

    // Finalizar com erro
    finishGeneration(
      `[ERRO] Não foi possível gerar a decisão.\n\nDetalhes: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
      fullPrompt
    );
  }
};

/**
 * Pipeline de teste rápido (para debug)
 */
export const runTestPipeline = async () => {
  const store = useStore.getState();
  const { startGeneration, finishGeneration } = store;

  startGeneration();

  addLog({
    stage: 'extraction',
    message: 'Teste: Verificando conexão com APIs...',
    status: 'pending',
  });

  try {
    const providers = getAvailableProviders();

    if (providers.length === 0) {
      throw new Error('Nenhuma API configurada');
    }

    // Teste simples com o primeiro provider disponível
    const testResponse = await (providers.includes('gemini')
      ? callGemini([{ role: 'user', content: 'Responda apenas: OK' }])
      : callAnthropic([{ role: 'user', content: 'Responda apenas: OK' }])
    );

    addLog({
      stage: 'extraction',
      message: `Conexão OK! Resposta: ${testResponse.content.substring(0, 50)}`,
      status: 'success',
      duration: testResponse.latency ? testResponse.latency / 1000 : 0,
    });

    finishGeneration(`Teste concluído com sucesso!\n\nProvider: ${testResponse.provider}\nModelo: ${testResponse.model}\nLatência: ${testResponse.latency?.toFixed(0)}ms`, '');

  } catch (error) {
    addLog({
      stage: 'extraction',
      message: `Erro no teste: ${error instanceof Error ? error.message : 'Erro'}`,
      status: 'error',
    });

    finishGeneration(`[ERRO] ${error instanceof Error ? error.message : 'Erro desconhecido'}`, '');
  }
};