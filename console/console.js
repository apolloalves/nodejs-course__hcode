console.log( 'Exbindo uma mensagem no console' )
console.error( 'Temos um problema' )

const carros = ['GM', 'Fiat', 'ford', 'renaut']

console.table( carros )

const dados = { name: 'Apollo Alves', empresa: 'HCODE'}
console.table( dados )


console.count( 'processo')
console.count( 'processo')
console.count( 'processo')

console.log( 'Resetando...')
console.countReset( 'processo')
console.count( 'processo')

console.time( 'contador')

for( let index = 0; index < 100; index++ ) {
    // console.log('-')
}
console.timeEnd( 'contador')

//console que verifica se a condição está correta
console.assert(true, 'Faça alguma coisa')
console.assert(false, 'Não funcionou')
