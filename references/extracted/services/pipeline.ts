import { useStore } from '../store';
import { LogEntry } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const runPipeline = async () => {
  const store = useStore.getState();
  const { startGeneration, addLog, finishGeneration, inputs, guidance, selectedMatter } = store;

  startGeneration();

  // 1. OCR Simulation
  addLog({
    id: '1',
    timestamp: new Date(),
    stage: 'ocr',
    message: 'Iniciando extração OCR (Google Vision + Gemini)',
    status: 'pending'
  });
  await delay(1500);
  addLog({
    id: '1-done',
    timestamp: new Date(),
    stage: 'ocr',
    message: 'OCR concluído com sucesso. 3 documentos processados.',
    status: 'success',
    duration: 1.5,
    details: 'Confiança média: 98%'
  });

  // 2. Structured Extraction (GPT-4)
  await delay(800);
  addLog({
    id: '2',
    timestamp: new Date(),
    stage: 'extraction',
    message: 'Extraindo dados estruturados (GPT-4 Turbo)',
    status: 'pending'
  });
  await delay(2000);
  addLog({
    id: '2-done',
    timestamp: new Date(),
    stage: 'extraction',
    message: 'Dados extraídos. JSON estruturado gerado.',
    status: 'success',
    duration: 2.1
  });

  // 3. Consistency Check (Perplexity)
  await delay(500);
  addLog({
    id: '3',
    timestamp: new Date(),
    stage: 'consistency',
    message: 'Verificando coerência e jurisprudência (Perplexity)',
    status: 'pending'
  });
  await delay(1800);
  if (guidance.internetLevel > 3) {
      addLog({
        id: '3-warn',
        timestamp: new Date(),
        stage: 'consistency',
        message: 'Atenção: Pesquisa web ampla ativada. Verifique fontes.',
        status: 'warning'
      });
  }
  addLog({
    id: '3-done',
    timestamp: new Date(),
    stage: 'consistency',
    message: 'Validação de coerência finalizada.',
    status: 'success',
    duration: 1.8
  });

  // 4. Anti-Hallucination (Gemini)
  await delay(500);
  addLog({
    id: '4',
    timestamp: new Date(),
    stage: 'validation',
    message: 'Auditoria de dados e anti-alucinação (Gemini 1.5 Pro)',
    status: 'pending'
  });
  await delay(1500);
  addLog({
    id: '4-done',
    timestamp: new Date(),
    stage: 'validation',
    message: 'Nenhuma alucinação crítica detectada.',
    status: 'success',
    duration: 1.5
  });

  // 5. Final Drafting (Claude)
  await delay(500);
  addLog({
    id: '5',
    timestamp: new Date(),
    stage: 'writing',
    message: `Redigindo minuta final (Claude 3.5 Sonnet) - Perfil: ${guidance.profile}`,
    status: 'pending'
  });
  await delay(2500);

  // Generate Dummy Decision
  const today = new Date().toLocaleDateString('pt-BR');
  const decisionText = `PODER JUDICIÁRIO DO ESTADO DO RIO GRANDE DO NORTE
1ª Vara Regional de Execução Penal

Processo de Execução Penal nº: 0001234-56.2023.8.20.0000
Apenado: NOME DO APENADO (ANONIMIZADO)

DECISÃO

Trata-se de pedido de ${selectedMatter ? selectedMatter.toUpperCase() : 'BENEFÍCIO'}, formulado em favor do apenado em epígrafe.

1. RELATÓRIO
O Ministério Público manifestou-se ${inputs.mp.length > 10 ? 'nos autos' : 'favoravelmente'}, conforme evento retro.
A Defesa pugnou pela concessão do benefício.
O Relatório da Situação Processual Executória (RSPE) atesta o cumprimento dos requisitos objetivos.

2. FUNDAMENTAÇÃO
Cinge-se a demanda à análise da possibilidade de concessão do benefício pleiteado.
Compulsando os autos, verifica-se que o apenado preenche o requisito objetivo (lapso temporal) necessário, bem como ostenta bom comportamento carcerário, preenchendo o requisito subjetivo.

Isso posto, considerando o preenchimento dos requisitos legais previstos na Lei de Execução Penal (LEP).

3. DISPOSITIVO
Diante do exposto, DEFIRO o pedido formulado para CONCEDER o benefício pleiteado, nos termos da fundamentação supra.

Expeça-se o necessário.
Atualize-se o atestado de pena.
Publique-se. Registre-se. Intimem-se (P.R.I.).

Natal/RN, ${today}.

Henrique Baltazar Vilar dos Santos
Juiz de Direito
`;

  const generatedPrompt = `SYSTEM: Você é um redator de decisões judiciais especializado em execução penal...
USER: Elabore uma decisão para o caso de ${selectedMatter}...
CONTEXT: ${inputs.rspe.substring(0, 100)}...
`;

  finishGeneration(decisionText, generatedPrompt);
};