//chamando uma função qeu cria eventos
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//criando um novo evento chamado start
eventEmitter.on('start', () => {
    //esse evento vai imprimir no console a palavra 'durante', para mostrar que está dentro do evento
    console.log("Durante");
})

//mostrando que isso vai ser executado antes do evento
console.log('Antes');

//chamando o evento, é para aparecer no terminal durante
eventEmitter.emit('start');

//depois que sair do evento é para executar esse comando, imprimindo no console 'depois'
console.log('Depois')