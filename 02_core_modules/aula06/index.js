//importando as bibliotecas que vão ser usadas
const http = require('http');
const fs = require('fs');
const url = require('url');

//definindo a porta em do pc em que o servidor vai rodar
const port = 3000;

//criando o servidor
const server = http.createServer((req, res) => {

    //pegando o url da página
    const urlinfo = url.parse(req.url, true);
    //bucando uma chave dentro do url para podermos obter o valor dela
    const name = urlinfo.query.name;

    //se não acharmos a chave name no url, enviar o html que pede para o usuário inserir
    if (!name) {
        //lendo o arquivo html para rodar na tela do navegador
        fs.readFile('index.html', function(err, data) {
            //fazendo com que aceite textos html
            res.writeHead(200, {'Content_Type': 'text/html'});
            //enviando o texto html para o servidor
            res.write(data);
            //finalizando os envios de respostas para o usuário
            return res.end();
        })
    //Mas caso ache a chave key com o valor dela no url, exibir esse bloco de comando
    } else {
        //passando o código de redirecionar e mandando atraves do location para onde vai mandar o usuário
        //nesse caso está mandando para a mesma tela normal
        res.writeHead(302, {location: '/'});
        //finalizando os envios de respostas para o usuário
        return res.end();
    }
})

//iniciando o servidor que criamos
server.listen(port, () => {
    //exibindo uma mensagem dizendo que está rodando corretamente
    console.log('Servidor rodando normalmente')
})