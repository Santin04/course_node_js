//Primeiro é necessário iniciar o projeto com o npm init -y
//em seguida para poder usar o express, é só digitar o comando npm i express

//importando o expresse
const express = require('express');
const app = express();
//definindo a porta em que o servidor vai rodar
const port = 3000;

const path = require('path');
//ele está pegando a pasta atual que estamos (aual01) e entrando na pasta public
const basePath = path.join(__dirname, 'public');

//você está pegando o caminho principal da sua página web e colhetando a req e res
app.get('/', (req, res) => {
    //quando o usuário manda um dado, sempre esse dado vai para cá atráves do req
    //o que o usuário vai ver após enviar o dado, é oque vamos passar no res

    //como acima não estamos pegando nenhum dado do usuário, a res de exemplo abaixo vai ir direto
    // res.send('Olá Mundo!');

    //abaixo é um exemplo de enviando para o usuario um arquivo html, assim ele podendo ver o site normalmente
    res.sendFile(`${basePath}/index.html`);
});

//fazendo com que o servidor rode, passando a porta como uma variavel
app.listen(port, () => {
    console.log('O servidor está rodando normalmente');
});