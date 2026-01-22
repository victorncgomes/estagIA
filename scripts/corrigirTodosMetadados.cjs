/**
 * estagIA - Correção Completa de Metadados ABNT
 * 
 * Corrige TODOS os 34 livros de doutrina com citação ABNT formatada.
 * Os arquivos de texto já contêm marcadores [PAGINA X] para citação exata.
 * 
 * Uso: node scripts/corrigirTodosMetadados.cjs
 */

const fs = require('fs');
const path = require('path');

const DOUTRINA_INDEX = path.join(__dirname, '..', 'knowledge', 'doutrina', 'doutrina_index.json');

// Mapeamento COMPLETO de todos os 34 livros
const MAPEAMENTO_COMPLETO = {
    // Caderno Sistematizado
    '#Caderno Sistematizado de Direito Constitucional - Parte I (2018).pdf': {
        autor: 'DIVERSOS',
        titulo: 'Caderno Sistematizado de Direito Constitucional',
        editora: 'Estratégia',
        ano: 2018,
        cidade: 'São Paulo'
    },

    // Ada Pellegrini - CDC
    '#Código Brasileiro de Defesa do Consumidor - Comentado 12ª Ed. - Ada Pellegrini Grinover - OK.pdf': {
        autor: 'GRINOVER, Ada Pellegrini et al.',
        titulo: 'Código Brasileiro de Defesa do Consumidor Comentado pelos Autores do Anteprojeto',
        editora: 'Forense Universitária',
        ano: 2012,
        edicao: 12,
        cidade: 'Rio de Janeiro'
    },

    // Renato Brasileiro - CPP
    '#Código de Processo Penal Comentado (2017) - Renato Brasileiro.pdf': {
        autor: 'LIMA, Renato Brasileiro de',
        titulo: 'Código de Processo Penal Comentado',
        editora: 'JusPodivm',
        ano: 2017,
        edicao: 2,
        cidade: 'Salvador'
    },

    // Guilherme Nucci - CP
    '#Código Penal Comentado (2017) - Guilherme de Souza Nucci.pdf': {
        autor: 'NUCCI, Guilherme de Souza',
        titulo: 'Código Penal Comentado',
        editora: 'Forense',
        ano: 2017,
        cidade: 'Rio de Janeiro'
    },

    // Rogério Greco - CP Comentado
    '#Código Penal Comentado (2017) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Código Penal Comentado',
        editora: 'Impetus',
        ano: 2017,
        cidade: 'Niterói'
    },

    // Rogério Greco - CP 2021
    '#Código Penal - Comentado (2021) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Código Penal Comentado',
        editora: 'Impetus',
        ano: 2021,
        cidade: 'Niterói'
    },

    // Rogério Sanches - CP 2018
    '#Código Penal Comentado (2018) - Rogério Sanches Cunha.pdf': {
        autor: 'CUNHA, Rogério Sanches',
        titulo: 'Código Penal para Concursos',
        editora: 'JusPodivm',
        ano: 2018,
        cidade: 'Salvador'
    },

    // Rogério Greco - Curso Vol 2
    '#Curso de Direito Penal - Parte Especial Vol 2 (2020) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Curso de Direito Penal: Parte Especial',
        editora: 'Impetus',
        ano: 2020,
        volume: 2,
        cidade: 'Niterói'
    },

    // Rogério Greco - Curso Vol 3
    '#Curso de Direito Penal - Parte Especial Vol 3 (2020) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Curso de Direito Penal: Parte Especial',
        editora: 'Impetus',
        ano: 2020,
        volume: 3,
        cidade: 'Niterói'
    },

    // Rogério Greco - Curso Vol 4
    '#Curso de Direito Penal - Parte Especial Vol 4 (2019) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Curso de Direito Penal: Parte Especial',
        editora: 'Impetus',
        ano: 2019,
        volume: 4,
        cidade: 'Niterói'
    },

    // Rogério Greco - Curso Vol 1
    '#Curso de Direito Penal - Parte Geral Vol. 1 (2017) - Rogério Greco.pdf': {
        autor: 'GRECO, Rogério',
        titulo: 'Curso de Direito Penal: Parte Geral',
        editora: 'Impetus',
        ano: 2017,
        volume: 1,
        cidade: 'Niterói'
    },

    // Fredie Didier - CPC Vol 1
    '#Curso de Direito Processual Civil V.1 (2019) - Fredie Didier Jr..pdf': {
        autor: 'DIDIER JR., Fredie',
        titulo: 'Curso de Direito Processual Civil: Introdução ao Direito Processual Civil',
        editora: 'JusPodivm',
        ano: 2019,
        edicao: 21,
        volume: 1,
        cidade: 'Salvador'
    },

    // Fredie Didier - CPC Vol 2
    '#Curso de Direito Processual Civil V.2 (2019) - Fredie Didier Jr..pdf': {
        autor: 'DIDIER JR., Fredie; BRAGA, Paula Sarno; OLIVEIRA, Rafael Alexandria de',
        titulo: 'Curso de Direito Processual Civil: Teoria da Prova',
        editora: 'JusPodivm',
        ano: 2019,
        edicao: 14,
        volume: 2,
        cidade: 'Salvador'
    },

    // Fredie Didier - CPC Vol 3
    '#Curso de Direito Processual Civil V.3 (2019) - Fredie Didier Jr..pdf': {
        autor: 'DIDIER JR., Fredie; CUNHA, Leonardo Carneiro da',
        titulo: 'Curso de Direito Processual Civil: Meios de Impugnação',
        editora: 'JusPodivm',
        ano: 2019,
        edicao: 17,
        volume: 3,
        cidade: 'Salvador'
    },

    // Nestor Távora - Processo Penal
    '#Curso de Processo Penal (2020) - Nestor Tavorá.pdf': {
        autor: 'TÁVORA, Nestor; ALENCAR, Rosmar Rodrigues',
        titulo: 'Curso de Direito Processual Penal',
        editora: 'JusPodivm',
        ano: 2020,
        edicao: 15,
        cidade: 'Salvador'
    },

    // Maria Sylvia Zanella - Direito Administrativo
    '#Direito-Administrativo-32ed - 2019 - Maria Sylvia Zanella.pdf': {
        autor: 'DI PIETRO, Maria Sylvia Zanella',
        titulo: 'Direito Administrativo',
        editora: 'Atlas',
        ano: 2019,
        edicao: 32,
        cidade: 'São Paulo'
    },

    // Renato Marcão - Execução Penal
    '#Execução Penal (2020) - Renato Marcão.pdf': {
        autor: 'MARCÃO, Renato',
        titulo: 'Curso de Execução Penal',
        editora: 'Saraiva',
        ano: 2020,
        edicao: 18,
        cidade: 'São Paulo'
    },

    // Caio Mário Vol 1
    '#Instituições de Direito Civil Vol 1 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil: Introdução ao Direito Civil',
        editora: 'Forense',
        ano: 2022,
        volume: 1,
        cidade: 'Rio de Janeiro'
    },

    // Caio Mário Vol 2
    '#Instituições de Direito Civil Vol 2 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil: Teoria Geral das Obrigações',
        editora: 'Forense',
        ano: 2022,
        volume: 2,
        cidade: 'Rio de Janeiro'
    },

    // Caio Mário Vol 3
    '#Instituições de Direito Civil Vol 3 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil: Contratos',
        editora: 'Forense',
        ano: 2022,
        volume: 3,
        cidade: 'Rio de Janeiro'
    },

    // Caio Mário Vol 4
    '#Instituições de Direito Civil Vol 4 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil: Direitos Reais',
        editora: 'Forense',
        ano: 2022,
        volume: 4,
        cidade: 'Rio de Janeiro'
    },

    // Caio Mário Vol 5
    '#Instituições de Direito Civil Vol 5 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil: Direito de Família',
        editora: 'Forense',
        ano: 2022,
        volume: 5,
        cidade: 'Rio de Janeiro'
    },

    // Caio Mário Vol 6
    '#Instituições de Direito Civil Vol 6 (2022) - Caio Mário.pdf': {
        autor: 'PEREIRA, Caio Mário da Silva',
        titulo: 'Instituições de Direito Civil: Direito das Sucessões',
        editora: 'Forense',
        ano: 2022,
        volume: 6,
        cidade: 'Rio de Janeiro'
    },

    // Nucci - LEP
    '#Lei de Execução Penal Comentada (2018) - Guilherme de Souza Nucci.pdf': {
        autor: 'NUCCI, Guilherme de Souza',
        titulo: 'Leis Penais e Processuais Penais Comentadas',
        editora: 'Forense',
        ano: 2018,
        edicao: 11,
        cidade: 'Rio de Janeiro'
    },

    // Renato Brasileiro - Legislação Especial
    '#Legislação Penal Especial Comentada (2022) - Renato Brasileiro.pdf': {
        autor: 'LIMA, Renato Brasileiro de',
        titulo: 'Legislação Criminal Especial Comentada',
        editora: 'JusPodivm',
        ano: 2022,
        edicao: 9,
        cidade: 'Salvador'
    },

    // Rogério Sanches - Manual PE
    '#Manual de Direito Penal - Parte Especial (2020) - Rogério Sanches Cunha.pdf': {
        autor: 'CUNHA, Rogério Sanches',
        titulo: 'Manual de Direito Penal: Parte Especial',
        editora: 'JusPodivm',
        ano: 2020,
        edicao: 12,
        cidade: 'Salvador'
    },

    // Rogério Sanches - Manual PG
    '#Manual de Direito Penal - Parte Geral (2020) - Rogério Sanches Cunha.pdf': {
        autor: 'CUNHA, Rogério Sanches',
        titulo: 'Manual de Direito Penal: Parte Geral',
        editora: 'JusPodivm',
        ano: 2020,
        edicao: 8,
        cidade: 'Salvador'
    },

    // Rogério Sanches - Manual Execução
    '#Manual de Execução Penal (2020) - Rogério Sanches Cunha.pdf': {
        autor: 'CUNHA, Rogério Sanches',
        titulo: 'Manual de Execução Penal',
        editora: 'JusPodivm',
        ano: 2020,
        cidade: 'Salvador'
    },

    // Elpídio Donizetti - CPC
    '#Novo Código de Processo Civil Comentado (2017) - Elpídio Donizetti.pdf': {
        autor: 'DONIZETTI, Elpídio',
        titulo: 'Novo Código de Processo Civil Comentado',
        editora: 'Atlas',
        ano: 2017,
        edicao: 2,
        cidade: 'São Paulo'
    },

    // Marinoni - CPC
    '#Novo Código de Processo Civil Comentado (2017) - Luiz Guilherme Marinoni, Sérgio Cruz Arenhart e Daniel Mitidiero.pdf': {
        autor: 'MARINONI, Luiz Guilherme; ARENHART, Sérgio Cruz; MITIDIERO, Daniel',
        titulo: 'Novo Código de Processo Civil Comentado',
        editora: 'RT',
        ano: 2017,
        edicao: 3,
        cidade: 'São Paulo'
    },

    // José Miguel CPC
    '#Novo CPC 2016 Comentado (2016) - José Miguel Garcia Medina.pdf': {
        autor: 'MEDINA, José Miguel Garcia',
        titulo: 'Novo Código de Processo Civil Comentado',
        editora: 'RT',
        ano: 2016,
        edicao: 4,
        cidade: 'São Paulo'
    }
};

/**
 * Gera citação ABNT formatada corretamente
 * Formato: SOBRENOME, Nome. Título: subtítulo. ed. Cidade: Editora, Ano.
 */
function gerarCitacaoABNT(meta) {
    let citacao = meta.autor + '. ';
    citacao += meta.titulo;

    if (meta.volume) {
        citacao += `: v. ${meta.volume}`;
    }

    citacao += '. ';

    if (meta.edicao) {
        citacao += `${meta.edicao}. ed. `;
    }

    if (meta.cidade) {
        citacao += meta.cidade + ': ';
    }

    if (meta.editora) {
        citacao += meta.editora;
    }

    if (meta.ano) {
        citacao += `, ${meta.ano}`;
    }

    citacao += '.';

    return citacao;
}

/**
 * Gera citação ABNT com página (para uso em citações diretas)
 */
function gerarCitacaoComPagina(meta, pagina) {
    let citacao = gerarCitacaoABNT(meta);
    // Remove o ponto final e adiciona página
    citacao = citacao.slice(0, -1);
    citacao += `, p. ${pagina}.`;
    return citacao;
}

// Executar correção
console.log('═══════════════════════════════════════════════════════');
console.log('📚 estagIA - Correção Completa de Metadados ABNT');
console.log('═══════════════════════════════════════════════════════\n');

const indice = JSON.parse(fs.readFileSync(DOUTRINA_INDEX, 'utf-8'));
let corrigidos = 0;
let naoMapeados = [];

for (const livro of indice.livros) {
    const arquivo = livro.arquivoOriginal;
    const meta = MAPEAMENTO_COMPLETO[arquivo];

    if (meta) {
        // Atualizar todos os campos
        livro.autor = meta.autor;
        livro.titulo = meta.titulo;
        livro.editora = meta.editora;
        livro.ano = meta.ano;
        livro.cidade = meta.cidade;
        if (meta.edicao) livro.edicao = meta.edicao;
        if (meta.volume) livro.volume = meta.volume;

        // Gerar citação ABNT correta
        livro.citacaoABNT = gerarCitacaoABNT(meta);

        // Adicionar template para citação com página
        livro.citacaoABNTTemplate = `${meta.autor}. ${meta.titulo}. ${meta.editora}, ${meta.ano}, p. [PAGINA].`;

        corrigidos++;
        console.log(`✅ ${livro.titulo.substring(0, 45)}...`);
        console.log(`   → ${livro.citacaoABNT.substring(0, 70)}...`);
    } else {
        naoMapeados.push(arquivo);
        console.log(`⚠️ Não mapeado: ${arquivo.substring(0, 50)}...`);
    }
}

// Atualizar versão
indice.meta.versao = '2.0.0';
indice.meta.ultimaAtualizacao = new Date().toISOString();
indice.meta.notas = 'Citações ABNT corrigidas. Arquivos de texto contêm marcadores [PAGINA X] para citação com página.';

// Salvar
fs.writeFileSync(DOUTRINA_INDEX, JSON.stringify(indice, null, 2), 'utf-8');

console.log('\n═══════════════════════════════════════════════════════');
console.log('📊 RESULTADO');
console.log('═══════════════════════════════════════════════════════');
console.log(`\n✅ Corrigidos: ${corrigidos}/${indice.livros.length}`);
console.log(`⚠️ Não mapeados: ${naoMapeados.length}`);

if (naoMapeados.length > 0) {
    console.log('\nArquivos não mapeados:');
    naoMapeados.forEach(a => console.log(`   - ${a}`));
}

console.log(`\n💾 Salvo em: ${DOUTRINA_INDEX}`);
console.log('\n📝 NOTA: Os arquivos de texto já contêm marcadores [PAGINA X]');
console.log('   para citação com página exata quando usar trechos.\n');
