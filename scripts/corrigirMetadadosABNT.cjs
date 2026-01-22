/**
 * estagIA - Correção de Metadados ABNT
 * 
 * Corrige os metadados de doutrina e jurisprudência para formato ABNT correto.
 * 
 * Uso: node scripts/corrigirMetadadosABNT.cjs
 */

const fs = require('fs');
const path = require('path');

// Paths
const DOUTRINA_INDEX = path.join(__dirname, '..', 'knowledge', 'doutrina', 'doutrina_index.json');
const JURIS_DIR = path.join(__dirname, '..', 'knowledge', 'jurisprudencia');
const OUTPUT_DIR = path.join(__dirname, '..', 'knowledge', 'prompts');

// Mapeamento manual de livros conhecidos (autor correto pelo nome do arquivo)
const MAPEAMENTO_LIVROS = {
    '#Caderno Sistematizado de Direito Constitucional - Parte I (2018).pdf': {
        autor: 'Autor Desconhecido',
        titulo: 'Caderno Sistematizado de Direito Constitucional - Parte I',
        editora: null,
        ano: 2018
    },
    '#Código Brasileiro de Defesa do Consumidor - Comentado 12ª Ed. - Ada Pellegrini Grinover - OK.pdf': {
        autor: 'GRINOVER, Ada Pellegrini et al.',
        titulo: 'Código Brasileiro de Defesa do Consumidor Comentado',
        editora: 'Forense Universitária',
        ano: 2012,
        edicao: 12
    },
    '#Código de Processo Penal Comentado (2017) - Renato Brasileiro.pdf': {
        autor: 'LIMA, Renato Brasileiro de',
        titulo: 'Código de Processo Penal Comentado',
        editora: 'JusPodivm',
        ano: 2017
    },
    '#Código Penal - Comentado (2021) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Código Penal Comentado',
        editora: 'Impetus',
        ano: 2021
    },
    '#Código Penal Comentado (2018) - Rogério Sanches Cunha.pdf': {
        autor: 'CUNHA, Rogério Sanches',
        titulo: 'Código Penal Comentado',
        editora: 'JusPodivm',
        ano: 2018
    },
    '#Curso de Direito Penal - Parte Especial Vol 2 (2020) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Curso de Direito Penal - Parte Especial',
        editora: 'Impetus',
        ano: 2020,
        volume: 2
    },
    '#Curso de Direito Penal - Parte Especial Vol 3 (2020) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Curso de Direito Penal - Parte Especial',
        editora: 'Impetus',
        ano: 2020,
        volume: 3
    },
    '#Curso de Direito Penal - Parte Especial Vol 4 (2019) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Curso de Direito Penal - Parte Especial',
        editora: 'Impetus',
        ano: 2019,
        volume: 4
    },
    '#Curso de Direito Penal - Parte Geral Vol. 1 (2017) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Curso de Direito Penal - Parte Geral',
        editora: 'Impetus',
        ano: 2017,
        volume: 1
    },
    '#Curso de Direito Processual Civil V.1 (2019) - Fredie Didier Jr..pdf': {
        autor: 'DIDIER JR., Fredie',
        titulo: 'Curso de Direito Processual Civil',
        editora: 'JusPodivm',
        ano: 2019,
        volume: 1
    },
    '#Curso de Direito Processual Civil V.2 (2019) - Fredie Didier Jr..pdf': {
        autor: 'DIDIER JR., Fredie',
        titulo: 'Curso de Direito Processual Civil',
        editora: 'JusPodivm',
        ano: 2019,
        volume: 2
    },
    '#Curso de Direito Processual Civil V.3 (2019) - Fredie Didier Jr..pdf': {
        autor: 'DIDIER JR., Fredie',
        titulo: 'Curso de Direito Processual Civil',
        editora: 'JusPodivm',
        ano: 2019,
        volume: 3
    },
    '#Curso de Processo Penal (2020) - Nestor Tavorá.pdf': {
        autor: 'TÁVORA, Nestor; ALENCAR, Rosmar Rodrigues',
        titulo: 'Curso de Direito Processual Penal',
        editora: 'JusPodivm',
        ano: 2020
    },
    '#Execução Penal (2020) - Renato Marcão.pdf': {
        autor: 'MARCÃO, Renato',
        titulo: 'Curso de Execução Penal',
        editora: 'Saraiva',
        ano: 2020
    },
    '#Instituições de Direito Civil Vol 1 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil',
        editora: 'Forense',
        ano: 2022,
        volume: 1
    },
    '#Instituições de Direito Civil Vol 2 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil',
        editora: 'Forense',
        ano: 2022,
        volume: 2
    },
    '#Instituições de Direito Civil Vol 3 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil',
        editora: 'Forense',
        ano: 2022,
        volume: 3
    },
    '#Instituições de Direito Civil Vol 4 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil',
        editora: 'Forense',
        ano: 2022,
        volume: 4
    },
    '#Instituições de Direito Civil Vol 5 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil',
        editora: 'Forense',
        ano: 2022,
        volume: 5
    },
    '#Instituições de Direito Civil Vol 6 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil',
        editora: 'Forense',
        ano: 2022,
        volume: 6
    },
    '#Lei de Execução Penal Comentada (2018) - Guilherme de Souza Nucci.pdf': {
        autor: 'NUCCI, Guilherme de Souza',
        titulo: 'Lei de Execução Penal Comentada',
        editora: 'Forense',
        ano: 2018
    },
    '#Legislação Penal Especial Comentada (2022) - Renato Brasileiro.pdf': {
        autor: 'LIMA, Renato Brasileiro de',
        titulo: 'Legislação Penal Especial Comentada',
        editora: 'JusPodivm',
        ano: 2022
    },
    '#Manual de Direito Penal - Parte Especial (2020) - Rogério Sanches Cunha.pdf': {
        autor: 'CUNHA, Rogério Sanches',
        titulo: 'Manual de Direito Penal - Parte Especial',
        editora: 'JusPodivm',
        ano: 2020
    },
    '#Manual de Direito Penal - Parte Geral (2020) - Rogério Sanches Cunha.pdf': {
        autor: 'CUNHA, Rogério Sanches',
        titulo: 'Manual de Direito Penal - Parte Geral',
        editora: 'JusPodivm',
        ano: 2020
    },
    '#Manual de Execução Penal (2020) - Rogério Sanches Cunha.pdf': {
        autor: 'CUNHA, Rogério Sanches',
        titulo: 'Manual de Execução Penal',
        editora: 'JusPodivm',
        ano: 2020
    },
    '#Novo Código de Processo Civil Comentado (2016) - João Henrique Lopes.pdf': {
        autor: 'LOPES, João Henrique',
        titulo: 'Novo Código de Processo Civil Comentado',
        editora: 'RT',
        ano: 2016
    },
    // Adicionar mais conforme necessário
};

/**
 * Gera citação ABNT correta
 */
function gerarCitacaoABNT(livro) {
    const { autor, titulo, editora, ano, edicao, volume } = livro;

    let citacao = `${autor}. ${titulo}`;

    if (volume) {
        citacao += `. v. ${volume}`;
    }

    if (edicao) {
        citacao += `. ${edicao}. ed.`;
    }

    if (editora) {
        citacao += ` ${editora}`;
    }

    if (ano) {
        citacao += `, ${ano}`;
    }

    citacao += '.';

    return citacao;
}

/**
 * Extrai metadados do nome do arquivo
 */
function extrairMetadadosDoNome(nomeArquivo) {
    // Verificar mapeamento manual primeiro
    if (MAPEAMENTO_LIVROS[nomeArquivo]) {
        return MAPEAMENTO_LIVROS[nomeArquivo];
    }

    // Tentar extrair padrão: #Titulo (Ano) - Autor.pdf
    const match = nomeArquivo.match(/#(.+?)\s*\((\d{4})\)\s*-\s*(.+?)\.pdf/i);
    if (match) {
        return {
            titulo: match[1].trim(),
            ano: parseInt(match[2], 10),
            autor: match[3].replace(/OK|\.pdf$/gi, '').trim().toUpperCase()
        };
    }

    return null;
}

/**
 * Corrige índice de doutrina
 */
function corrigirDoutrina() {
    console.log('═══════════════════════════════════════════════════════');
    console.log('📚 Corrigindo Metadados de Doutrina');
    console.log('═══════════════════════════════════════════════════════\n');

    const indice = JSON.parse(fs.readFileSync(DOUTRINA_INDEX, 'utf-8'));
    let corrigidos = 0;
    let erros = 0;

    for (const livro of indice.livros) {
        const nomeArquivo = livro.arquivoOriginal;
        const metadados = extrairMetadadosDoNome(nomeArquivo);

        if (metadados) {
            // Atualizar campos
            if (metadados.autor) livro.autor = metadados.autor;
            if (metadados.titulo) livro.titulo = metadados.titulo;
            if (metadados.editora) livro.editora = metadados.editora;
            if (metadados.ano) livro.ano = metadados.ano;
            if (metadados.edicao) livro.edicao = metadados.edicao;
            if (metadados.volume) livro.volume = metadados.volume;

            // Gerar nova citação ABNT
            livro.citacaoABNT = gerarCitacaoABNT(livro);

            corrigidos++;
            console.log(`✅ ${livro.titulo.substring(0, 40)}...`);
            console.log(`   ${livro.citacaoABNT.substring(0, 70)}...`);
        } else {
            erros++;
            console.log(`⚠️ Não corrigido: ${nomeArquivo.substring(0, 50)}...`);
        }
    }

    // Atualizar metadata
    indice.meta.ultimaAtualizacao = new Date().toISOString();
    indice.meta.versao = '1.1.0';

    // Salvar
    fs.writeFileSync(DOUTRINA_INDEX, JSON.stringify(indice, null, 2), 'utf-8');

    console.log(`\n📊 Resultado: ${corrigidos} corrigidos, ${erros} não processados`);
    console.log(`💾 Salvo em: ${DOUTRINA_INDEX}`);

    return { corrigidos, erros };
}

/**
 * Verifica e corrige súmulas STJ
 */
function corrigirSumulasSTJ() {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('⚖️ Verificando Súmulas STJ');
    console.log('═══════════════════════════════════════════════════════\n');

    const sumulasPath = path.join(JURIS_DIR, 'stj_sumulas.json');
    const sumulas = JSON.parse(fs.readFileSync(sumulasPath, 'utf-8'));

    let ok = 0;
    let problemas = 0;

    // Verificar estrutura
    if (sumulas.sumulas && Array.isArray(sumulas.sumulas)) {
        for (const sumula of sumulas.sumulas) {
            if (sumula.numero && sumula.enunciado) {
                // Adicionar citação ABNT se não existir
                if (!sumula.citacaoABNT) {
                    sumula.citacaoABNT = `BRASIL. Superior Tribunal de Justiça. Súmula nº ${sumula.numero}. ${sumula.enunciado}`;
                }
                ok++;
            } else {
                problemas++;
            }
        }

        // Salvar atualizado
        fs.writeFileSync(sumulasPath, JSON.stringify(sumulas, null, 2), 'utf-8');
        console.log(`✅ ${ok} súmulas verificadas`);
        console.log(`⚠️ ${problemas} com problemas`);
    } else {
        console.log('❌ Estrutura inválida');
    }

    return { ok, problemas };
}

/**
 * Verifica repetitivos STJ
 */
function verificarRepetitivosSTJ() {
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📜 Verificando Repetitivos STJ');
    console.log('═══════════════════════════════════════════════════════\n');

    const repetitivosPath = path.join(JURIS_DIR, 'stj_repetitivos.json');

    if (!fs.existsSync(repetitivosPath)) {
        console.log('❌ Arquivo não encontrado');
        return { ok: 0, problemas: 0 };
    }

    const repetitivos = JSON.parse(fs.readFileSync(repetitivosPath, 'utf-8'));

    let ok = 0;
    let atualizados = 0;

    // Verificar se é array ou objeto com propriedade
    const lista = Array.isArray(repetitivos) ? repetitivos : (repetitivos.temas || repetitivos.repetitivos || []);

    for (const item of lista) {
        // Adicionar citação ABNT se necessário
        if (item.tema || item.numero) {
            const tema = item.tema || item.numero;
            if (!item.citacaoABNT) {
                item.citacaoABNT = `BRASIL. Superior Tribunal de Justiça. Tema Repetitivo ${tema}.`;
                atualizados++;
            }
            ok++;
        }
    }

    if (atualizados > 0) {
        fs.writeFileSync(repetitivosPath, JSON.stringify(repetitivos, null, 2), 'utf-8');
    }

    console.log(`✅ ${ok} temas verificados, ${atualizados} atualizados`);
    return { ok, problemas: 0 };
}

// Executar
console.log('🔧 estagIA - Correção de Metadados ABNT v1.0\n');

const doutrina = corrigirDoutrina();
const sumulas = corrigirSumulasSTJ();
const repetitivos = verificarRepetitivosSTJ();

console.log('\n═══════════════════════════════════════════════════════');
console.log('📊 RESUMO FINAL');
console.log('═══════════════════════════════════════════════════════');
console.log(`\nDoutrina: ${doutrina.corrigidos} corrigidos`);
console.log(`Súmulas STJ: ${sumulas.ok} verificadas`);
console.log(`Repetitivos: ${repetitivos.ok} verificados`);
console.log('\n✅ Correção concluída!');
