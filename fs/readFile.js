const fs = require( 'fs' )

//Não bloqueante
fs.readFile('text.txt', ( err, data ) => {
    if( err ) throw err 
    // console.log( data.toString())
})

//Bloqueante
const text = fs.readFileSync( 'text.txt' )
console.log(`texto: ${ text }`)