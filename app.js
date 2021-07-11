const livros = require('./database')

const readline = require('readline-sync')

const entrada = readline.question('Deseja Buscar um Livro?(S/N)')

if (entrada.toLocaleUpperCase() === "S") {

  console.log('Categorias disponíveis')
  console.log('Paradidatico', '/Tecnologia', '/Produtividade e estilo de vida')

  const entradaCategoria = readline.question('Qual a categoria?')

  const livroPorCategoria = livros.filter(livro => livro.categoria === entradaCategoria);

  console.table(livroPorCategoria)
} else {
  console.log('Esses são todos os livros disponíveis')
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
  console.table(livrosOrdenados)
}
