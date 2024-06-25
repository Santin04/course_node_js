//nessa aula vamos aprender como fazer para obter os dados que estão no url
//as vezes após o usuário preencher um formulário, as respostas podem passar pelo url e você pode usar disso

const express = require('express');
const app = express();
const port = 3000;

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    // ai com esse valor de id você podia fazer uma query no banco de dados, mas nesse caso só vamos exibi-lo
    console.log(`Estamos buscando o usuário com o id ${id}`);
    //OBS: nesse caso se você colocar no navegador localhost:3000/users/5
    //vai ficar rodando infinitor porém no terminal onde está rodando o servidor vai aparecer que está buscando o usuário 5
})

app.get('/', (req, res) => {
    res.send('Olá, você está na página principal da aplicação');
});

app.listen(port, () => {
    console.log('Servidor está rodando normalmente');
});

//esse tipo de código é bom para quando a aplicação tem um formulário e esse formulário está no modo GET