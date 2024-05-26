//.gitignore para ignorar o node_modules
//importando a biblioteca que ajuda visualizar que foi instalada atraves do npm install
const minimist = require('minimist');

//importando a função soma do nosso outro arquivo da pasta
const soma = require('./soma').soma;

const args = minimist(process.argv.splice(2))['_'];
const a = parseInt(args[0].split('=')[1]);
const b = parseInt(args[1].split('=')[1]);
soma(a, b);
