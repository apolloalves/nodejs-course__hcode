
require('./subdirectory/sub')
console.log('------------------------------')
console.log( `Nome do Arquivo:`, __filename )
console.log( `Diretório do Arquivos:`,__dirname) //executa qual é a origem do arquivo
console.log( `Diretóario em que foi invocado`, process.cwd()) // sempre vai processar de onde esta chamando
console.log( `Sistema Operacional:`, process.env.OS)
console.log( `Usuário do SO::`, process.env.USERNAME)
console.log( `Nome do server`, process.env.COMPUTERNAME)

switch(process.argv[2]) {
    case '-a':
            console.log("Execute rotina principal")
            break;
    case '-1':
            console.log("Execute a instalação")
    case '-q':
            console.log("Encerrando Aplicação")
            process.exit()
            break;
    default : 
            console.log('Parâmetro inválido')
}