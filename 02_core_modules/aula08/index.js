//OBS: Sempre executar esse arquivo com um arquivo chamado "arquivo.txt", se não você vai cair no erro

//importando a biblioteca que vai ser necessária para poder apagar o arquivo 
const fs = require('fs');

//chamando o metodo que vai excluir o arquivo, e criando a função que vai receber o erro caso tenha
fs.unlink('arquivo.txt', function(err) {
    //caso tenha algum erro, exibir o erro no console e de um return para encerrar por ali
    if (err) {
        console.log(err);
        return;
    }

    //caso não tenha dado nenhum erro
    console.log('Seu arquivo foi removido com sucesso');
})