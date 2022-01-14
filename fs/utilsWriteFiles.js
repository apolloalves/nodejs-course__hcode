const { promisify } = require( 'util' )

//Promisse
const writeFile = promisify(require('fs').writeFile)

const conteudo = 'Criando um arquivo utlizando promisify do módulo nativo util'

writeFile('utilArquivo.txt', conteudo)
.then(() => console.log( 'Criado com sucesso') )
.catch( err => console.log( `Deu erro ${err}`))