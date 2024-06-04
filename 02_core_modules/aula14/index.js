//importando as bibliotecas necessárias
const fs = require('fs');

//verificando se existe o diretório com o nome "minhaPasta"
if(!fs.existsSync('./minhaPasta')){
    console.log('Essa pasta não existe');
}

//criando o diretório "minhaPasta"
fs.mkdirSync('minhaPasta');

//verificando se existe o diretório "minhaPasta" novamente
if(fs.existsSync('./minhaPasta')){
    console.log('Agora essa pasta existe');
}