//.gitignore para ignorar o node_modules
//importando a biblioteca que ajuda visualizar que foi instalada atraves do npm install
const minimist = require('minimist');

//pegar o valor que foi passado atráves do terminal ao iniciar o arquivo
const args = minimist(process.argv.slice(2));

//mostra oque o usuário passou ao iniciar o projeto
console.log(args);

//salvando somente o dado que o usuario passou, sem a chave dele
const nome = args['_'][0].split('=')[1];

//exibindo o dado que o usuario passou 
console.log(nome);

//OBS: executar o arquivo pelo terminal da seguinte forma: node index.js nome=Mateus