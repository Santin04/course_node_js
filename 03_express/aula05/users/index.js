const express = require('express');
const router = express.Router();
const path = require('path');
//passando o caminho correto da página pages de acordo com a localização desse arquivo
const basepath = path.join(__dirname, '../pages')

//colocando aqui todas as rotas que estavam ligado com o users
//trocar tudo que era app para router
//tirar o /users do começo de todas as rotas, pois lá no index.js principal, já tem um middleware que configura isso
router.get('/add', (req, res) => {
    res.sendFile(`${basepath}/usersform.html`);
});

router.post('/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`Seu nome é ${name} e você tem ${age} anos`);
}); 

//exportando o router para podermos usar ele em outros arquivos
module.exports = router;