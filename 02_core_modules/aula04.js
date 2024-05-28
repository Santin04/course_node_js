//chamando as bibliotecas que vão ser utilizadas
const http = require('http');
const url = require('url');

//definindo a porta do servidor
const port = 3000;

//criando o servidor
const server = http.createServer((req, res) => {

    //pegando informação do url que vai ser obtido atraves dos dados do req
    const urlInfo = url.parse(req.url, true)
    //pegando o nome do url
    //Ex: https://www.meusite.com.br/cadastro?name='Mateus' (vai pegar o valor Mateus)
    const name = urlInfo.query.name;

    //acesso bem sucedido
    res.statusCode = 200;
    //deixando o servidor receber elementos html
    res.setHeader('Content-Type', 'text/html');

    //verificando se no url tem name='info'
    //se não tiver vai aparecer esse html com um formulario para você preencher o seu nome
    //OBS: está method "GET", pois ai os dados do form vai para o url e é possível obter dessa forma que estamos fazendo
    if(!name){
        //criando o formulario para poder preencher o nome
        res.end('<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name"></input><input type="submit"></input></form>');
    } else {
        //exibindo o nome caso já tenha o nome no url
        res.end(`<h1>O seu nome é ${name}</h1>`);
    }
})


//inicializando o servidor
server.listen(port, () => {
    console.log('Servidor aberto na porta ' + port);
})