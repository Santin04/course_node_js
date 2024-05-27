//importando a biblioteca que cria servidores web
const http = require('http');

//definindo em qual porta o servidor vai rodar
const port = 3000;

//criando o servidor
const server = http.createServer((req, res) => {
    //escrevendo uma mensagem para o cliente
    res.write('OI HTTP');
    //finalizando as resposta para o cliente
    res.end();
})

//rodando o servidor que criamos
server.listen(port, () => {
    //indicando no terminal que o servidor está rodando com sucesso
    console.log(`Servidor rodando na porta: ${port}`);
})

//OBS: para acabar com servidor rodando, basta no terminal dar o comando "ctrl" + "c" e concordar