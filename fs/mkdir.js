const fs = require( 'fs' )
const assets = ['css', 'js', 'libs', 'imgs', 'fonts']


const makeDir = (( dir => {

    dir.forEach( item => {
        
        fs.mkdir(`Projeto/assets/${item}`, {recursive: true}, (err) => {
            if( err ) throw err
            console.log( `Diretórios criados com sucesso: ${item}`)
        })
    })

})( assets ) )


