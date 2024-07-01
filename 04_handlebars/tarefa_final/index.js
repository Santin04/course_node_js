//importando oque vai ser usado e definindo a porta lógica
const express = require('express');
const app = express();
const port = 3000;

//configurando a aplicação para poder usar handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
});

//configurando a aplicação para deixar os arquivos css acessíevis
app.use(express.static('public'));

//terminando de configurar os handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//criando a lista de usuários, no mesmo formato como se tivesse consumindo uma api
const users = [
    {
        id: 1,
        name: 'Mateus',
        surname: 'Santin',
        age: 19,
        nation: 'Brazil',
    },
    {
        id: 2,
        name: 'Andreas',
        surname: 'Alonso',
        age: 32,
        nation: 'Spanish',
    },
    {
        id: 3,
        name: 'Jheniffer',
        surname: 'Texis',
        age: 23,
        nation: 'United states',
    }
];

//definindo que acontece no home do site
app.get('/', (req, res) => {
    res.render('home', {users: users});
});

//definindo oque acontece quando acessa o caminho de um dos produtos
app.get('/produtos/:id', (req, res) => {
    const user = users[parseInt(req.params.id) - 1];

    res.render('user_infos', {user : user});
})

//rodando o servidor na prota lógica que foi definida no começo
app.listen(port, () => {
    console.log('Servidor rodando normalmente');
});