//nesse arquivo aqui, vamos utilizar o pool do mysql, ele serve para criar um cache e não deixar o servidor cheio de query
//assim não deixando o servidor mais pesado e lento cada vez que for realizado uma query
//você pode definir ele com um limite de 10 query, assim que for fazer a 11° ele apaga a primeira, assim deixando o servidor mais leve e rápido

//para isso você pode apagar a variavel conn e apagar o conn.connect e voltar a dar um app.listen normal
//criar outra pasta chamada db, e deixa a conn lá e depois você exporta para o index.js

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const pool = require('./db/conn');
const port = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;

    pool.query(sql, (err) => {
        if(err){
            console.log('Erro ao enviar para o banco de dados');
            return;
        }

        res.redirect('/');
    });
})

app.get('/books', (req, res) => {

    const sql = 'SELECT * FROM books';

    pool.query(sql, (err, data) => {
        if(err) {
            console.log('Erro ao puxar os dados');
            return;
        }

        const books = data;

        res.render('books', {books : books});
    });
});

app.listen(port, () => {
    console.log('Servidor rodando');
});