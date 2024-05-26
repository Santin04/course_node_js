const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o seu nome? '
    }, {
        name: 'idade',
        message: 'Qual a sua idade? '
    }
]).then((values) => {
    try {
        const nome = values.nome;
        const idade = parseInt(values.idade);
        if(isNaN(idade)){
            throw new Error('Esse valor que você passou não é um número inteiro')
        }
        console.log(chalk.bgYellow.black(`Seu nome é ${nome} e você tem ${idade} anos`))
    } catch(err){
        console.log(chalk.bgRed('Erro: ' + err));
    }
}).catch((err) => {
    console.log(chalk.bgRed('Erro: ' + err));
})