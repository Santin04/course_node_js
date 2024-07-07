//dessa vez vamos aprender a alterar um pouco a forma que criamos nossas querys, para assim evitar sql injection
//vamos alterar lá no momento em que temos o post do formulário, pois é quando entra dados do usuário e não podemos confiar
//sempre que for fazer uma query com um dado que o usuário passou, fazer da forma que está de exemplo, independente se for get ou post

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const pool = require('./db/conn');
const port = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    //em vez de passar o nome da coluna, coloque dois ? e em vez de passar o dado coloque um ?
    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`;
    //em seguida você cria uma lista com os dados que estariam dentro da query, coloque na ordem dos ?
    const data = ['title', 'pageqty', title, pageqty];

    //e quando você for enviar a query, tem que passar essa const junto, em vez de passar somente a query
    pool.query(sql, data, (err) => {
        if(err){
            console.log('Erro ao enviar os dados para o banco de dados');
            return;
        };

        res.redirect('/');
    });
});

app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books';

    pool.query(sql, (err, data) => {
        if(err){
            console.log('Erro ao puxar todos os livros do banco de dados');
            return;
        };

        const books = data;

        res.render('books', {books: books});
    });
});

app.listen(port, () => {
    console.log('Servidor rodando normalmente');
});