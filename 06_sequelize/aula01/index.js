//Vamos aprender a como usar o sequelize, ele facilita as querys, fazendo assim desenvolver mais rápido
//um contra ponto é que o código que roda por trás dele, pode acabar deixando a aplicação mais pesada, ele é mais lento que uma query normal
//com o sequelize, não é preciso instalar o mysql no terminal, e sim o sequelize
//vamos começar criando a conexão, para isso vamos alterar praticamente tudo do arquivo conn.js
//em seguida criar uma pasta no repositório, chamada models e criar o User.js

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
//exportando o User que criamos para usar o sequelize
const User = require('./models/User')
const port = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

//rodando o servidor utilizando o sequelize
//ao iniciar o servidor, se ele não encontrar a tabela e as colunas, ele vai criar e não precisa nem chamar o User
//só de ter exportado ele para dentro do código ele já vai fazer isso
conn.sync().then(() => {
    app.listen(port);
}).catch(err =>  console.log(err));

//só de rodar ele criou no banco uma tabela com o nome que passamos e criou as colunas que passamos + a coluna id como
//índice primário, e uma coluna de data de registro de data de atualização