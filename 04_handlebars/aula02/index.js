//aqui vamos aprender como usar variaveis dentro dos nossos handlebars
const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    //vamos criar um objeto como se fosse dados que foi puxado do banco de dados
    const user = {
        name: 'Mateus',
        surname: 'Santin'
    }

    //criando uma variavel de exemplo para usar no handlebars
    const palavra = 'palavra teste'

    //passar a chave e o valor da variavel que você quer passar para o front end
    res.render('home', { user: user, palavra });
});

app.listen(port, () => {
    console.log('Aplicação rodando normalmente');
});