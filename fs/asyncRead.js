const fs = require('fs').promises


async function read() {
    const data = await fs.readFile( 'texto.txt', 'binary' )
    return new Buffer.from (data )
}