console.log('modulo-01.js is cache! ') 

const oculta  = () => console.log( 'Executando função oculta' )
const executa = () => console.log( 'Executando a função executa' )
module.exports.welcome = 'Bem vindo ao módulo-01.js '

// Módulo REPL
// EX: DESESTRUTURAÇÃO
module.exports.data = ( name, lastname ) =>  console.log( `Dados do usuário: ${name} ${lastname}` )

const { oculta, executa, welcome  } = require( './modulo-01' )
const { data } = require('./modulo-01')