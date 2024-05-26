//importando a biblioteca que instalamos no npm
//chalk é uma biblioteca que deixa as mensagens do console mais bonitas
//OBS: PARA A BIBLIOTECA FUNCIONAR É NECESSÁRIO SALVAR O ARQUIVO COMO .cjs
const chalk = require('chalk');

//criando a variavel que vai guardar a nota do aluno
const nota = 5;

//fazendo um verificação e alterando a cor da mensagem conforme o if
if (nota >= 7){
    console.log(chalk.green('Você está aprovado'));    
} else {
    console.log(chalk.bgRed.black('Você está de recuperação'));
}