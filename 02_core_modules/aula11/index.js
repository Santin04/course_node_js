//importando a biblioteca necessária para podermos ver os stats do arquivo
const fs = require('fs');

//usando o metdo que exibe os stats
fs.stat('arquivo.txt', (err, stats) => {
    //exibindo o erro caso tenha algum
    if(err){
        console.log(err);
        return;
    }
    
    //mostrando os stats do arquivo no console
    console.log(stats);
    //retorna true ou false se isso é um arquivo existente ou não
    console.log(stats.isFile());
    //retonar true ou false se isso é um diretório(pasta de arquivos) ou não
    console.log(stats.isDirectory());
    //retorna se é ou não um link simbolico(um atalho para outro arquivo)
    console.log(stats.isSymbolicLink());
    //retorna o dia e horário em que foi criado o arquivo
    console.log(stats.ctime);
    //retorna o tamanho do arquivo
    console.log(stats.size);
})