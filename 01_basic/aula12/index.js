//importando a biblioteca que foi feito o download no npm
//essa biblioteca também permite com que o usuário envie resposta para perguntas atraves do terminal
const inquirer = require('inquirer');

//iniciando as perguntas
inquirer.prompt([
    //criando o nome das perguntas e qual as mensagens das perguntas
    {
        name: 'p1',
        message: 'Qual a primeira nota? '
    },{
        name: 'p2',
        message: 'Qual a segunda nota? '
    }
//a próxima linha executa após receber as respostas, salvando as respostas no answers e as exibindo
]).then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
    console.log('A média é: ' + media);
}).catch((err) => {
    //e essa linha do catch, faz com que caso o then() tenha dado algum erro, vir para esse bloco de código
    console.log(err)
})