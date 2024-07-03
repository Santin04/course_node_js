//nesse arquivo aqui vamos inserir dados no banco de dados atraves de códigos aqui no back end

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const port = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//vamos usar o metodo post para receber os dados dos usuários, entçao vamos configurar para obter os dados em json abaixo
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home');
});

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
});

//url que vai ser executado após enviar o formulário
app.post('/books/insertbook', (req, res) => {

    //coletando os dados do formulário e salvando dentro de variáveis
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    //escrevendo o sql que vai inserir os dados no banco de dados
    //tradução: inserir na tabela books, nos campos na ordem (title, pageqty) os valores da variável title e pageqty
    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;

    //enviando a query para o banco de dados
    conn.query(sql, (err) => {
        //verificando se deu erro ao enviar para o banco de dados
        if(err){
            console.log('Erro ao enviar para o banco de dados');
            res.status(500).send('Erro ao enviar para o banco de dados');
            return;
        }
        
        //enviando o usuário para a página home de volta se tudo deu certo
        res.redirect('/');
    });
});

conn.connect((err) => {
    if(err){
        console.log('Erro ao conectar com o banco de dados');
        return;
    };

    console.log('Conexão feita com o banco de dados');

    app.listen(port, () => {
        console.log('Aplicação rodando corretamente');
    });
});