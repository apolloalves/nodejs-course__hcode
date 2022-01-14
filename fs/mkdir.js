//import módule fs
const fs = require( 'fs' ) 
const assets = [ 'css', 'js', 'imgs', 'fonts', 'libs' ]

const make = (( dir ) => {

        dir.forEach( ( item ) => {
            fs.mkdir(`projeto/${item}`,{recursive:true}, ( err ) => {
                if(err) throw err 
                console.log( `Diretórios criados com sucesso: ${ item }`)
        })
    })

})( assets )



