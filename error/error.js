const executeToo = () => {
    throw new Error('Ah não , deu erro! Não é possível na minha maquina funciona!')
}

const init = ()  => {
    try{
        executeToo()
    }
    catch(e) {
        console.log(`Temos um problema ${e}`)
    }
}

init()
console.log('ufa passei por ele!')