//importando a biblioteca que mexe com arquivos
const fs = require('fs');

console.log('inicio');

fs.writeFileSync('texto.txt', 'Escrevendo na função sincrona');

console.log('fim');

//OBS: nesse caso, como está Sync aquele metodo, o código também vai ser lido da esquerda para direita
//e de cima para baixo, porém quando chegar em algum comando que demanda mais tempo para ser executado
//ou carregado, ele não vai carregar e ao mesmo tempo seguir em frente, ele vai ficar parado aguardando acabar
//e somente quando acabar de executar o comando ele vai passar para a próxima linha