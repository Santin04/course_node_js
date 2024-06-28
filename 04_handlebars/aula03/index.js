const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const user = {
        name: 'Mateus',
        surname: 'Santin'
    };

    const palavra = 'palavra teste';

    //simulando como se fosse uma variavel que retorna true ou false se o usuário está autenticado para essa página
    //basta trocar o valor de true para false ou a contrario que você vai ver dois tipos de html diferente no localhost
    const auth = false;

    res.render('home', { user: user, palavra, auth });
});

app.get('/dashboard', (req, res) => {
    //lembrando que não é preciso passar o caminho todo, ele já entende automaticamente que está buscando um arquivo do views
    //e também não precisa passar a extensão, ele já entende automaticamente que é um handlebars
    res.render('dashboard');
});

app.listen(port, () => {
    console.log('Aplicação rodando normalmente');
});