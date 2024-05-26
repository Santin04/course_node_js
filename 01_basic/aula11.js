//importando e configurando a biblioteca que permite fazer perguntas para o usuário dentro do terminal
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

//fazendo a pergunta de qual a linguagem preferida do usuário
readline.question('Qual a sua linguagem preferida? ', (linguagem) => {
    //exibindo para o usuário qual a linguagem preferida dele
    console.log('A sua linguagem preferida é ' + linguagem);
    //fechando o questeonário
    readline.close();
})