// importação por desestruturação
const { executa, oculta  } = require( './modulo-01-refact' ) 
oculta()
executa()


// importação por OBJ
const module01 = require('./modulo-01-refact')
module01.executa()
module01.oculta()
