//para instalar o hendlebars, utilizamos o código npm i express-handlebars
const express = require('express');
const app = express();
const port = 3000;

//importando o handlebars e definindo ele dentro da aplicação (app)
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
//esse acima é setup inicial para podermos usar o handlebars

app.get('/', (req, res) => {
    //ao passar render 'home', ele vai renderizar a view home
    res.render('home');
    //o arquivo home está dentro da pasta views, porém não precisa passar o nome da pasta, ele já entende internamente
    //também não é necessário passar a extensão do arquivo, que seria home.handlebars, ele já entende qual é a extensão sozinho
});

app.listen(port, () => {
    console.log('Aplicação rodando normalmente');
});

//criar a pasta views dentro do projeto, é a pasta onde vai ficar os html com handlebars, esse é o nome mais comum usado
//dentro da pasta views, criar a pasta layouts, que é onde fica o html padrão que vai ser usado, nesse projeto tem como exemplo
//no layout deixei apenas a estrutura do head configurado e dai no home eu coloquei os elementos que eu quero que apareça, um já se conectou com o outro