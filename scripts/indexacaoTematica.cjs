/**
 * estagIA - Indexação Temática Completa
 * 
 * Analisa TODO o conteúdo existente e classifica por temas/agrupadores:
 * - remicao, progressao, livramento, indulto, retificacao, multa, falta, etc.
 * 
 * Gera índice temático pré-classificado para busca instantânea.
 * 
 * Uso: node scripts/indexacaoTematica.cjs
 * 
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

const KNOWLEDGE_PATH = path.join(__dirname, '..', 'knowledge');

// ============================================
// AGRUPADORES/TEMAS
// ============================================
const TEMAS = {
    remicao: {
        nome: 'Remição',
        palavrasChave: [
            'remição', 'remicao', 'leitura', 'trabalho', 'estudo', 'enem', 'encceja',
            'diploma', 'certificado', 'dias remidos', 'art. 126', 'lei 7.210',
            '12 horas', '3 dias', '1 dia', 'carga horária', 'frequência escolar',
            'educação', 'ensino fundamental', 'ensino médio', 'supletivo'
        ]
    },
    progressao: {
        nome: 'Progressão de Regime',
        palavrasChave: [
            'progressão', 'progressao', 'regime', 'semiaberto', 'aberto', 'fechado',
            'requisito objetivo', 'requisito subjetivo', 'lapso temporal',
            '1/6', '2/5', '3/5', '40%', '50%', '60%', '70%',
            'bom comportamento', 'atestado carcerário', 'art. 112', 'lep'
        ]
    },
    livramento: {
        nome: 'Livramento Condicional',
        palavrasChave: [
            'livramento', 'condicional', 'art. 83', 'código penal',
            '1/3', '1/2', '2/3', 'mais de um terço', 'metade da pena',
            'condições', 'revogação', 'suspensão', 'período de prova'
        ]
    },
    indulto: {
        nome: 'Indulto e Comutação',
        palavrasChave: [
            'indulto', 'comutação', 'comutacao', 'decreto natalino', 'decreto presidencial',
            'requisitos', 'vedação', 'crime hediondo', 'tortura', 'tráfico',
            'art. 84', 'constituição', 'perdão', 'extinção da punibilidade'
        ]
    },
    retificacao: {
        nome: 'Retificação GEP',
        palavrasChave: [
            'retificação', 'retificacao', 'gep', 'guia de execução',
            'cálculo', 'calculo', 'atestado de penas', 'data-base',
            'fração', 'soma', 'unificação', 'detração', 'erro material'
        ]
    },
    multa: {
        nome: 'Multa',
        palavrasChave: [
            'multa', 'pena de multa', 'conversão', 'execução fiscal',
            'fazenda', 'pagamento', 'parcelamento', 'extinção', 'art. 51'
        ]
    },
    falta: {
        nome: 'Falta Disciplinar',
        palavrasChave: [
            'falta', 'disciplinar', 'grave', 'média', 'leve',
            'procedimento disciplinar', 'pad', 'sindicância',
            'regressão', 'interrupção', 'contagem', 'art. 50', 'art. 52'
        ]
    },
    saida: {
        nome: 'Saída Temporária',
        palavrasChave: [
            'saída temporária', 'saida temporaria', 'autorização',
            'monitoramento', 'tornozeleira', 'art. 122', 'art. 123', 'art. 124',
            'trabalho externo', 'visita à família', 'frequência a curso'
        ]
    },
    extincao: {
        nome: 'Extinção da Punibilidade',
        palavrasChave: [
            'extinção', 'extincao', 'punibilidade', 'cumprimento',
            'prescrição', 'prescricao', 'morte', 'art. 107', 'art. 109',
            'alvará de soltura', 'término', 'fim da pena'
        ]
    },
    unificacao: {
        nome: 'Unificação de Penas',
        palavrasChave: [
            'unificação', 'unificacao', 'penas', 'soma', 'cúmulo',
            'material', 'concurso', 'art. 111', 'lep', 'limite', '40 anos', '30 anos'
        ]
    }
};

// ============================================
// FUNÇÕES DE CLASSIFICAÇÃO
// ============================================

/**
 * Classifica um texto por tema baseado em palavras-chave
 * Retorna array de temas com score
 */
function classificarPorTema(texto) {
    if (!texto) return [];

    const textoLower = texto.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove acentos

    const resultados = [];

    for (const [temaId, tema] of Object.entries(TEMAS)) {
        let score = 0;
        const matches = [];

        for (const palavra of tema.palavrasChave) {
            const palavraNorm = palavra.toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

            // Contar ocorrências
            const regex = new RegExp(palavraNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
            const count = (textoLower.match(regex) || []).length;

            if (count > 0) {
                score += count;
                matches.push({ palavra, count });
            }
        }

        if (score > 0) {
            resultados.push({
                tema: temaId,
                nome: tema.nome,
                score,
                matches: matches.slice(0, 5) // Top 5 matches
            });
        }
    }

    // Ordenar por score
    return resultados.sort((a, b) => b.score - a.score);
}

/**
 * Determina tema principal de um texto
 */
function temaPrincipal(texto) {
    const temas = classificarPorTema(texto);
    return temas.length > 0 ? temas[0].tema : 'outros';
}

// ============================================
// INDEXAÇÃO DE DOUTRINA
// ============================================

async function indexarDoutrina() {
    console.log('\n📖 INDEXANDO DOUTRINA...');

    const indexPath = path.join(KNOWLEDGE_PATH, 'doutrina', 'doutrina_index.json');
    if (!fs.existsSync(indexPath)) {
        console.log('  ❌ doutrina_index.json não encontrado');
        return { livros: [] };
    }

    const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    const resultado = {
        totalLivros: index.livros?.length || 0,
        porTema: {},
        livrosClassificados: []
    };

    // Inicializar contadores por tema
    for (const temaId of Object.keys(TEMAS)) {
        resultado.porTema[temaId] = { count: 0, citacoes: [] };
    }
    resultado.porTema['outros'] = { count: 0, citacoes: [] };

    // Processar cada livro
    for (const livro of (index.livros || [])) {
        console.log(`  Analisando: ${livro.titulo.slice(0, 50)}...`);

        // Carregar texto extraído se existir
        let textoCompleto = `${livro.titulo} ${livro.autor}`;

        if (livro.arquivosTexto && livro.arquivosTexto.length > 0) {
            for (const arqTexto of livro.arquivosTexto.slice(0, 5)) { // Primeiros 5 arquivos
                const txtPath = path.join(KNOWLEDGE_PATH, 'doutrina', 'textos', arqTexto);
                if (fs.existsSync(txtPath)) {
                    const conteudo = fs.readFileSync(txtPath, 'utf-8');
                    textoCompleto += ' ' + conteudo.slice(0, 15000); // Primeiros 15k chars
                }
            }
        }

        // Classificar
        const temas = classificarPorTema(textoCompleto);
        const temaPrinc = temas.length > 0 ? temas[0].tema : 'outros';

        // Registrar
        resultado.porTema[temaPrinc].count++;
        resultado.porTema[temaPrinc].citacoes.push({
            id: livro.id,
            titulo: livro.titulo,
            autor: livro.autor,
            citacaoABNT: livro.citacaoABNT,
            score: temas[0]?.score || 0,
            temasSecundarios: temas.slice(1, 3).map(t => t.tema)
        });

        resultado.livrosClassificados.push({
            ...livro,
            temaPrincipal: temaPrinc,
            temas: temas.slice(0, 3),
            scoreTotal: temas.reduce((a, b) => a + b.score, 0)
        });
    }

    console.log(`  ✅ ${resultado.totalLivros} livros classificados`);
    return resultado;
}

// ============================================
// INDEXAÇÃO DE JURISPRUDÊNCIA
// ============================================

async function indexarJurisprudencia() {
    console.log('\n⚖️ INDEXANDO JURISPRUDÊNCIA...');

    const jurisPath = path.join(KNOWLEDGE_PATH, 'jurisprudencia');
    const resultado = {
        totalJulgados: 0,
        porTema: {},
        julgadosClassificados: []
    };

    // Inicializar contadores
    for (const temaId of Object.keys(TEMAS)) {
        resultado.porTema[temaId] = { count: 0, julgados: [] };
    }
    resultado.porTema['outros'] = { count: 0, julgados: [] };

    // Arquivos de jurisprudência
    const arquivos = [
        'stj_sumulas.json',
        'stj_repetitivos.json',
        'stf_execucao_penal.json',
        'tjrn_execucao_penal.json'
    ];

    for (const arquivo of arquivos) {
        const filePath = path.join(jurisPath, arquivo);
        if (!fs.existsSync(filePath)) continue;

        console.log(`  Processando: ${arquivo}`);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

        // Extrair julgados conforme estrutura do arquivo
        let julgados = [];
        if (data.sumulas) julgados = data.sumulas;
        else if (data.temas) julgados = data.temas;
        else if (data.julgados) julgados = data.julgados;
        else if (data.acordaos) julgados = data.acordaos;

        for (const julgado of julgados) {
            resultado.totalJulgados++;

            // Montar texto para classificação
            const texto = `${julgado.enunciado || ''} ${julgado.tese || ''} ${julgado.ementa || ''} ${julgado.questaoSubmetida || ''}`;

            const temas = classificarPorTema(texto);
            const temaPrinc = temas.length > 0 ? temas[0].tema : 'outros';

            resultado.porTema[temaPrinc].count++;
            resultado.porTema[temaPrinc].julgados.push({
                id: julgado.id || julgado.numero,
                tipo: julgado.tipo || (data.sumulas ? 'Súmula' : data.temas ? 'Repetitivo' : 'Acórdão'),
                numero: julgado.numero,
                texto: (julgado.enunciado || julgado.tese || julgado.ementa || '').slice(0, 200),
                score: temas[0]?.score || 0
            });

            resultado.julgadosClassificados.push({
                ...julgado,
                fonte: arquivo,
                temaPrincipal: temaPrinc,
                temas: temas.slice(0, 3)
            });
        }
    }

    console.log(`  ✅ ${resultado.totalJulgados} julgados classificados`);
    return resultado;
}

// ============================================
// INDEXAÇÃO DE LEGISLAÇÃO
// ============================================

async function indexarLegislacao() {
    console.log('\n📜 INDEXANDO LEGISLAÇÃO...');

    const indexPath = path.join(KNOWLEDGE_PATH, 'legislacao', 'legislacao_index.json');
    if (!fs.existsSync(indexPath)) {
        console.log('  ❌ legislacao_index.json não encontrado');
        return { leis: [] };
    }

    const index = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    const resultado = {
        totalLeis: index.leis?.length || 0,
        porTema: {},
        leisClassificadas: []
    };

    // Inicializar
    for (const temaId of Object.keys(TEMAS)) {
        resultado.porTema[temaId] = { count: 0, leis: [] };
    }
    resultado.porTema['outros'] = { count: 0, leis: [] };

    for (const lei of (index.leis || [])) {
        console.log(`  Analisando: ${lei.apelido || lei.titulo?.slice(0, 40)}...`);

        // Carregar texto da lei se existir
        let textoCompleto = `${lei.titulo} ${lei.apelido || ''}`;

        if (lei.arquivoVigor) {
            const leiPath = path.join(KNOWLEDGE_PATH, 'legislacao', 'vigente', lei.arquivoVigor);
            if (fs.existsSync(leiPath)) {
                const conteudo = fs.readFileSync(leiPath, 'utf-8');
                textoCompleto += ' ' + conteudo.slice(0, 20000);
            }
        }

        const temas = classificarPorTema(textoCompleto);
        const temaPrinc = temas.length > 0 ? temas[0].tema : 'outros';

        resultado.porTema[temaPrinc].count++;
        resultado.porTema[temaPrinc].leis.push({
            id: lei.id,
            apelido: lei.apelido,
            titulo: lei.titulo,
            score: temas[0]?.score || 0
        });

        resultado.leisClassificadas.push({
            ...lei,
            temaPrincipal: temaPrinc,
            temas: temas.slice(0, 3)
        });
    }

    console.log(`  ✅ ${resultado.totalLeis} leis classificadas`);
    return resultado;
}

// ============================================
// INDEXAÇÃO DE MODELOS (DECISÕES)
// ============================================

async function indexarModelos() {
    console.log('\n📋 INDEXANDO MODELOS DE DECISÃO...');

    const textosPath = path.join(KNOWLEDGE_PATH, 'decisoes', 'textos', 'modelos_extraidos.json');
    if (!fs.existsSync(textosPath)) {
        console.log('  ❌ modelos_extraidos.json não encontrado');
        return { modelos: [] };
    }

    const textos = JSON.parse(fs.readFileSync(textosPath, 'utf-8'));
    const resultado = {
        totalModelos: textos.totalArquivos || 0,
        porTema: {},
        modelosClassificados: []
    };

    // Inicializar
    for (const temaId of Object.keys(TEMAS)) {
        resultado.porTema[temaId] = { count: 0, modelos: [] };
    }
    resultado.porTema['outros'] = { count: 0, modelos: [] };

    // Processar cada modelo (arquivos é array flat)
    const arquivos = Array.isArray(textos.arquivos) ? textos.arquivos : [];
    console.log(`  Total: ${arquivos.length} modelos`);

    for (const arquivo of arquivos) {
        const categoria = arquivo.categoria || 'outros';

        // Ler conteúdo do modelo
        let textoCompleto = `${arquivo.arquivo || ''} ${categoria}`;

        if (arquivo.outputFile) {
            const txtPath = path.join(KNOWLEDGE_PATH, 'decisoes', 'textos', arquivo.outputFile);
            if (fs.existsSync(txtPath)) {
                const conteudo = fs.readFileSync(txtPath, 'utf-8');
                textoCompleto += ' ' + conteudo.slice(0, 10000);
            }
        }

        const temas = classificarPorTema(textoCompleto);
        let temaPrinc = temas.length > 0 ? temas[0].tema : 'outros';

        // Mapear categoria para tema se não detectou bem
        if (temaPrinc === 'outros' || (temas[0]?.score || 0) < 5) {
            const catMap = {
                'remicao': 'remicao',
                'progressao': 'progressao',
                'livramento': 'livramento',
                'indulto': 'indulto',
                'retificacao': 'retificacao',
                'decisoesvrep': 'outros'
            };
            temaPrinc = catMap[categoria.toLowerCase()] || temaPrinc;
        }

        resultado.porTema[temaPrinc].count++;
        resultado.porTema[temaPrinc].modelos.push({
            nome: arquivo.arquivo,
            categoria: categoria,
            score: temas[0]?.score || 0
        });

        resultado.modelosClassificados.push({
            ...arquivo,
            temaPrincipal: temaPrinc,
            temas: temas.slice(0, 3)
        });
    }

    console.log(`  ✅ ${resultado.totalModelos} modelos classificados`);
    return resultado;
}

// ============================================
// FUNÇÃO PRINCIPAL
// ============================================

async function main() {
    console.log('='.repeat(60));
    console.log('estagIA - INDEXAÇÃO TEMÁTICA TOTAL');
    console.log('='.repeat(60));
    console.log('\nTemas disponíveis:');
    for (const [id, tema] of Object.entries(TEMAS)) {
        console.log(`  - ${id}: ${tema.nome}`);
    }

    // Indexar TODAS as bases
    const doutrina = await indexarDoutrina();
    const jurisprudencia = await indexarJurisprudencia();
    const legislacao = await indexarLegislacao();
    const modelos = await indexarModelos();

    // Consolidar resultado
    const indiceCompleto = {
        geradoEm: new Date().toISOString(),
        versao: '2.0.0',
        temas: TEMAS,
        estatisticas: {
            modelos: {
                total: modelos.totalModelos,
                porTema: Object.fromEntries(
                    Object.entries(modelos.porTema).map(([k, v]) => [k, v.count])
                )
            },
            doutrina: {
                total: doutrina.totalLivros,
                porTema: Object.fromEntries(
                    Object.entries(doutrina.porTema).map(([k, v]) => [k, v.count])
                )
            },
            jurisprudencia: {
                total: jurisprudencia.totalJulgados,
                porTema: Object.fromEntries(
                    Object.entries(jurisprudencia.porTema).map(([k, v]) => [k, v.count])
                )
            },
            legislacao: {
                total: legislacao.totalLeis,
                porTema: Object.fromEntries(
                    Object.entries(legislacao.porTema).map(([k, v]) => [k, v.count])
                )
            }
        },
        modelos: modelos.porTema,
        doutrina: doutrina.porTema,
        jurisprudencia: jurisprudencia.porTema,
        legislacao: legislacao.porTema
    };

    // Salvar índice
    const outputPath = path.join(KNOWLEDGE_PATH, 'indice_tematico.json');
    fs.writeFileSync(outputPath, JSON.stringify(indiceCompleto, null, 2));

    // Relatório
    console.log('\n' + '='.repeat(60));
    console.log('📊 RELATÓRIO DE INDEXAÇÃO TOTAL');
    console.log('='.repeat(60));

    console.log('\n📋 MODELOS DE DECISÃO:');
    for (const [tema, data] of Object.entries(modelos.porTema)) {
        if (data.count > 0) {
            console.log(`  ${tema}: ${data.count} modelos`);
        }
    }

    console.log('\n📖 DOUTRINA:');
    for (const [tema, data] of Object.entries(doutrina.porTema)) {
        if (data.count > 0) {
            console.log(`  ${tema}: ${data.count} livros`);
        }
    }

    console.log('\n⚖️ JURISPRUDÊNCIA:');
    for (const [tema, data] of Object.entries(jurisprudencia.porTema)) {
        if (data.count > 0) {
            console.log(`  ${tema}: ${data.count} julgados`);
        }
    }

    console.log('\n📜 LEGISLAÇÃO:');
    for (const [tema, data] of Object.entries(legislacao.porTema)) {
        if (data.count > 0) {
            console.log(`  ${tema}: ${data.count} leis`);
        }
    }

    const totalGeral = modelos.totalModelos + doutrina.totalLivros +
        jurisprudencia.totalJulgados + legislacao.totalLeis;
    console.log(`\n📊 TOTAL GERAL: ${totalGeral} itens indexados`);
    console.log('✅ Índice salvo em:', outputPath);
}

main().catch(console.error);
