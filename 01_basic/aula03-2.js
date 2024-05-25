//puxando a função do nossooutro arquivo
const func = require('./aula03-1');
//guardando a funçãod do outro arquivo em uma variavel
const soma = func.soma;
//usando a função do outro arquivo
soma(15, 20);