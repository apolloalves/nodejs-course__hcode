const file = require( 'fs' )

file.readdir('../', ( err, data ) => {
    if( err ) throw err
    data.forEach( files => console.log(__dirname + '\\' + files ))

})