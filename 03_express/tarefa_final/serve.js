const express = require('express');
const app = express();
const port = 5000;

//deixando acessível todos os meus arquivos statics que estão dentro da minha pasta public
app.use(express.static('public'));

const bg = require('./bg');

app.use('/bg', bg);

app.get('/', (req, res) => {
    res.send('Você está na página inicial do site');
});

app.listen(port, () => {
    console.log('O servidor está rodando normalmente');
});

