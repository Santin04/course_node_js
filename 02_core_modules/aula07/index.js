const fs = require('fs');
const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    const urlinfo = url.parse(req.url, true);
    const name = urlinfo.query.name;

    if (!name) {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        //colocando uma quebra de linha no final para toda vez que for colocado um novo nome, ir na outra linha
        const newname = name + '\r\n';

        //colocando a função que acrescenta, que é o appendFile
        fs.appendFile('arquivo.txt', newname, function(err, data) {
            res.writeHead(302, {location: '/'});
            return res.end();
        })
    }
})

server.listen(port, () => {
    console.log('Servidor rodando corretamente');
})