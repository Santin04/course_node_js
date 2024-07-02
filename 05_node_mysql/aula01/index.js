//nesse arquivo vamos aprender a como se conectar com um banco de dados mysql
//para instalar ele, basta usar o comando npm i mysql no terminal

//importando tudo que é necessário e definindo a porta que vai rodar a aplicação
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const port = 3000;

//configurando o handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//deixar os arquivos staticos acessíveis
app.use(express.static('public'));

//definindo o home
app.get('/', (req, res) => {
    res.render('home');
});

//criando a função que faz com que o sistema se conecte com o banco de dados
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Santin04DEV',
    password: 'nodemysql2'
});

//chamando a função que conecta com o banco de dados
conn.connect((err) => {
    if (err) {
        console.log('Erro ao tentar se conectar com o banco de dados');
    }

    console.log('Conectado com o banco de dados');

    //rodando a aplicação somente quando conseguir se conectar com o banco de dados
    app.listen(port, () => {
    console.log('Servidor rodando corretamente');
});
    
});