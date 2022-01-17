const path = require('path')
console.log(path.basename('/home/apollo__nicolly/NodeJS/archive.html'))

//Normalizando a url 
console.log('normalize',path.normalize('//home/apollo__nicolly/NodeJS/archive.html/..'))

console.log('join path', path.join('/teste', 'teste2','teste3/teste4','dir2' ))
console.log('resolve', path.resolve('path.js'))

//EXTNAME 
console.log('extension', path.extname('path.js'))

