console.log( `Nome do Arquivo:`, __filename )
console.log( `Diretório do Arquivos:`,__dirname)
console.log( `Paramêtros de execucão`, process.argv)
console.log( `Ambiente do Servidor`, process.plataform)

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