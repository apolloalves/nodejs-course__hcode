//write files 
//desestruturação de objetos

//procura o writefile e me entrega ele 
const { writeFile } = require( 'fs' )

writeFile('arquivo.txt', 'Criando arquivo de texto com write files', err => {
    if( err ) throw err 
    console.log( 'Arquivo criado com sucesso!' )
})