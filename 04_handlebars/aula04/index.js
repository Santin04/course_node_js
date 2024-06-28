//nesse arquivo aqui vamos aprender a usar o partials do handlebars, ele server para deixar estruturas pré prontas, e sempre que desejar usar, é só chama-la
const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine());

//configurando o caminho da onde está o partials do nosso projeto para assim podermos usa-lo
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
});

//em seguida temos que trocar o segundo parametro que tinha antes que era 'exphbs.engine()' para o parametro atual 'hbs.engine'
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const user = {
        name: 'Mateus',
        surname: 'Santin'
    };

    const palavra = 'palavra teste';

    const auth = false;

    res.render('home', { user: user, palavra, auth });
});

app.get('/dashboard', (req, res) => {
    const itens = ['item01', 'item02', 'item03'];

    res.render('dashboard', {itens: itens});
});

app.get('/blog', (req, res) => {
    //crindo a lista de arrays, como se fosse um json de produtos de uma loja, para assim usar o partials para definir o layout de todos para serem iguais
    //e junto com o partials, vamos usar o each para assim fazer de todos os blogs de uma vez
    const all_blogs = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Teste01',
            comments: 2
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Teste02',
            comments: 4
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Teste03',
            comments: 6
        }
    ];

    res.render('blog', {all_blogs: all_blogs});
})

app.listen(port, () => {
    console.log('Aplicação rodando normalmente');
});