//a aula passada foi caso a aplicação use um formulário com o method get, agora essa vai ser caso seja com o POST
const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basepath = path.join(__dirname, 'pages')

//para ler oque foi passado através do formulário com o method post, é necessário criar dois middleware
//lendo o body
app.use(
    express.urlencoded({
        extended: true,
    })
);

//esse segundo middleware, tranforma todo o body em um json, assim sendo possível a leitura
app.use(express.json());

app.get('/', (req, res) => {
    
});

//passando a rota de onde vai estar o formulário que o usuário vai responder
app.get('/users/add', (req, res) => {
    res.sendFile(`${basepath}/usersform.html`);
});

//lendo os dados que o usuário enviou
app.post('/users/save', (req, res) => {
    //exibindo o json que criamos através do use(middleware)
    console.log(req.body);

    //salvand os dados do json dentro de variaveis
    const name = req.body.name;
    const age = req.body.age;

    //exibindo os valores no terminal
    console.log(`Seu nome é ${name} e você tem ${age} anos`);
}); 

app.listen(port, () => {
    console.log('Servidor está rodando normalmente');
});