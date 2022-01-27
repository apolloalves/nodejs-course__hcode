import {EventEmitter} from 'events'


class Evento extends EventEmitter{}
const meuEvento = new Evento()

//subscriber /assintante
meuEvento.on('segurança', (x, y) => {
    console.log(`Executando o evento, 'segurança:' ${x} ${y}`)
})

//publisher - emissor
meuEvento.emit('segurança', 'userAdmin', 'alterou Salário')

meuEvento.on('encerrar', ( dados ) => {
    console.log('Assinantes', dados )
})


meuEvento.emit('encerrar', 'Encerrando a execução da importação dos dados!')