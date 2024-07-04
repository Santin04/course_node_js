//nesse arquivo vamos puxar dados do banco de dados

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const port = 3000;

//configurando para usar handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//deixando arquivos staticos acessíveis
app.use(express.static('public'));

//preparando para receber um post caso tenha
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//criando a conexão com o banco de dados
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodemysql2',
    password: ''
});

//depois de configurar tudo começo a mexer com os caminhos get e post

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/books/insertbook', (req, res) => {
    const title = req.params.title;
    const pageqty = req.params.pageqty;

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;

    conn.query(sql, (err) => {
        if(err){
            console.log('Erro ao enviar para o banco de dados');
            return;
        }

        res.redirect('/');
    });
})

//vamos fazerr um get aqui quando o usuário for para tal url, e quando ele for vamos dar como res todos os books
app.get('/books', (req, res) => {
    //fazer a query que vai selecionar todos as linhas da tabela books
    //straduzindo: selecionar todos elemento de books
    //assim seleciona todos os itens da tabela, mas se for para selecionar somente um, basta usar um where id`${id}`
    const sql = 'SELECT * FROM books';

    //para fazer uma página que edita os dados, basta criar outro formulário com um action e method post, e a query seria mais ou menos assim
    //sql = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id}`
    //assim você edita uma linha da tabela, o where no fim serve para identificar qual linha você está editando

    //já para excluir basta você criar um form com apenas um botão de submit, esse form ficaria na frente do item que deseja excluir
    //esse form teria um action que realizaria a exclusão do item, passando o id pela url dinamica e teria o method POST e sua query seria assim
    //sql = `DELETE FROM books WHERE id = ${id}`

    //enviando a query para o banco de dados para ela ser executada
    conn.query(sql, (err, data) => {
        //verificando se teve algum erro na execução da query
        if(err) {
            console.log('Erro ao puxar os dados');
            return;
        }

        //definindo o conteudo que foi pego do banco de dados para dentro de uma variavel
        const books = data;

        //exibindo o arquivo handlebars chamado books e passando os dados obtidos do banco de dados para poder exibi-los
        res.render('books', {books : books});
    });
});

conn.connect((err) => {
    if(err) {
        console.log('Erro ao conetar com o banco de dados');
        return;
    }
    console.log('Conectado ao banco de dados');

    app.listen(port, () => {
        console.log('Servido rodando');
    })
})