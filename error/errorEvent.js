const { EventEmitter } = require( 'events' )
const emitter = new EventEmitter()


const validaObjeto = (a) => {
     
     typeof a !== 'object'
    
     ?emitter.emit('error', new Error('Tipo informado inválido!'))
     :console.log( 'Tipo informado é válido ')

     emitter.addListener( 'error', ( error ) => console.log(`Evento ${error}` ))
     
}
    
let dados = { name: 'HCODE', course: 'NodeJS'}
validaObjeto( dados )