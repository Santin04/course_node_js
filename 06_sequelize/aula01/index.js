//Vamos aprender a como usar o sequelize, ele facilita as querys, fazendo assim desenvolver mais rápido
//um contra ponto é que o código que roda por trás dele, pode acabar deixando a aplicação mais pesada, ele é mais lento que uma query normal
//com o sequelize, não é preciso instalar o mysql no terminal, e sim o sequelize
//vamos ocmeçar criando a conexão, para isso vamos alterar praticamente tudo do arquivo conn.js

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const port = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});


app.listen(port, () => {
    console.log('Servidor rodando normalmente');
});