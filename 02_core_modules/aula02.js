//importando a biblioteca que cria servidores web
const http = require('http');

//definindo em qual porta o servidor vai rodar
const port = 3000;

//criando o servidor
const server = http.createServer((req, res) => {
    //significa que a conexão foi bem sucedida
    res.statusCode = 200 
    //fazendo com que nosso programa fique apto para receber html
    res.setHeader('contenty-Type', 'text/html');
    //exibindo uma mensagem na tela
    res.end('<h1>Oi, estou aqui</h1>')
})

//rodando o servidor que criamos
server.listen(port, () => {
    //indicando no terminal que o servidor está rodando com sucesso
    console.log(`Servidor rodando na porta: ${port}`);
})