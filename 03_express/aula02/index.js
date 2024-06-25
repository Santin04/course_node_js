//instalar o nodemon através do terminal e configurar o script do package.json para o npm start inicar com ele 
//o nodemon serve para toda vez que atualizar o código, não ter que ficar reiniciando o servidor
//npm install --save-dev nodemon

const express = require('express');
const app = express();
const port = 3000;

//aqui também vamos ver sobre o conceito de middleware, é basicamente algo que acontece entre o req e o res
//um exemplo é uma verificação de autenticação, que server para ver se o usuário tem permissão de login e senha para ir para aquela página

const checkAuth = function(req, res, next){
    //como ainda não temos autenticação, vamos inserir um boolean diretamente na variavel
    req.authStatus = true;

    if(req.authStatus = true){
        console.log('Usuário logado, pode continuar navegando');
        next();
    } else {
        console.log('Usuárionão está logado, faça o login');
        next();
    };
    //o next é necessário para a aplicação não ficar travada e prosseguir
};

//Aqui está criando um middleware, toda vez que o req for acionado vai chamar o middleware, fazendo a verificação
//mais para frente vamos aprender como deixa-lo somente em pontos mais especificos do site
app.use(checkAuth);

app.get('/', (req, res) => {
    res.write('Olá mundo, estou testando meu servidor que agora possui nodemon \n');
    res.write('Agora toda vez que eu atualizar é só dar f5 que a página já vai estar atualizada também');
    res.end();
});

app.listen(port, () => {
    console.log('Servidor está rodando normalmente');
});