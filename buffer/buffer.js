// Buffer permite manipular informações no formato binário.
const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso completo de NodeJS')
const buf__string = Buffer.from('Carregando um string', 'utf-8')

console.log(Buffer.isBuffer(buf__string))
console.log(buf__string.toString('utf-8', 0, 10))