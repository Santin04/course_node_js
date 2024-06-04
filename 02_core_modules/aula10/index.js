//criando novas rotas 

//importando as bibliotecas necessárias
const fs = require('fs');
const http = require('http');
const url = require('url');

//crinado a porta em que vai rodar o servidor
const port = 3000;

//criando e configurando o servidor
const server = http.createServer((req, res) =>{
    const q = url.parse(req.url, true);
    //pegando o caminho do arquivo, em qual pasta e diretório está, o 1 é o indice do arquivo que queremos
    //o índice 0 normalmente contem o index.html
    const filename = q.pathname.substring(1);

    //vendo se o arquivo em que o usuário está no navegador tem .html
    if (filename.includes('html')) {
        //vendo se existe o arquivo ou se o usuário só escreveu qualquer caminho no navegador
        if (fs.existsSync(filename)){
            //caso exista, vamos ler nosso arquivo html e exibi-lo na tela
            fs.readFile(filename, function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            })
        }
        //Resumo: Tudo acima é para verificar se o caminho no navegador do usuário corresponde com algum arquivo do nosso servidor
        //caso corresponda, vamos exibi-lo para o usuário, se não vamos exibir uma tela de erro 404, que é de página não existente
        
        //caso não tenha o arquivo que foi inserido no url, vamos exibir o erro 404, que é o erro de caminho
    } else {
        fs.readFile('404.html', function(err, data){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
})

server.listen(port, (err) => {
    console.log('Servidor rodando normalmente');
})

//nesse caso ele só exibe caso o caminho que o usuário colocou corretamente no navegador, se colocou errado vai para a tela de 404
//que criamos, se rodar localmente e colocar apenas localhost:3000 vai dar na página 404, tem que colocar o index.html depois