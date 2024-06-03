//importando a biblioteca
const fs = require('fs');

//usando o metodo rename, passando primeiro o nome antigo, depois o novo nome e o tratamento de erro
fs.rename("arquivo.txt", "novonome.txt", function(err){
    //exibindo qual o erro caso de algum erro
    if (err) {
        console.log(err);
        return;
    }

    //exibindo uma mensagem que o código de tudo certo
    console.log('Arquivo renomeado com sucesso');
})