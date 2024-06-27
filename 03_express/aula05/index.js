//nesse aqui vamos aprender a usar o router, para facilitar o uso das rotas e deixar o código mais organizado
//nessa aula aqui também vou aproveitar e colocar uma linha de código que deixa os arquivos statics acessíveis (css, js
//arquivos html também são statics, porém é recomendado deixar eles em uma pasta fora do public, pois assim você tem um controle melhor de quem pode acessaar
const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basepath = path.join(__dirname, 'pages')

//agora vamos importar todas as rotas do users que está no outro arquivo
const users = require('./users');

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

//criar isso para sempre que a rota tiver users, mostrar que o method get e post está dentro da variavel users que represetando o outro arquivo
//ou seja, aqui diz que sempre que na rota vier com users, vai mandar para o outro arquivo
app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Essa aqui é a página inicial');
});

//para mostrar o exemplo eu peguei o arquivo index.js da aula anterior
//em seguida vou tirar todos as rotas que tem o users e enviar para outro arquivo index.js que vai estar dentro da pasta users
//todos os get e post que estavam aqui com a rota do users, já estão no outro arquivo

app.listen(port, () => {
    console.log('Servidor está rodando normalmente');
});