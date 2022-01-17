// const opn = require( 'opn' )
const http = require( 'http' )
const { readFile } = require('fs')

const host = '127.0.0.1'
const port = '5500'
const url = `http://${host}:${port}`


let conteudo = ''

readFile('index.html', ( err, data ) => {
    if( err ) throw err 
    conteudo = data
})

const server = http.createServer(( req, res ) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end( conteudo )
   
})

server.listen(host, port, () => {
    console.log(`Servidor rodando em ${url}`)
})

opn( url, {app: 'firefox'} )
// 