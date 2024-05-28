//importando a biblioteca de url
const url = require('url');
//colocando o link que queremos obter informações
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira';
//criando o objeto para obter as informações
const parseUrl = new url.URL(address);

//extraindo informações do address
console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.search);
console.log(parseUrl.searchParams);
console.log(parseUrl.searchParams.get('produtos'));