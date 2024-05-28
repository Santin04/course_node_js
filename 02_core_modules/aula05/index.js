//chamando as bibliotecas que vão ser utilizadas
const http = require('http');
const fs = require('fs');

//definindo a porta do servidor
const port = 3000;

//criando o servidor
const server = http.createServer((req, res) => {
    //lendo o arquivo html
    fs.readFile('mensagem.html', (err, data) => {
        //dando a resposta de acesso 200 (acesso bem sucedido) e fazendo o servidor aceitar html
        res.writeHead(200, {'Content-Type': 'text/html'});
        //exibindo o arquivo html na tela
        res.write(data);
        //finalizando as respostas
        res.end();
    })
})


//inicializando o servidor
server.listen(port, () => {
    console.log('Servidor aberto na porta ' + port);
})