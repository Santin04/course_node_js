//criando um arquivo assincrono
//importando uma biblioteca para mexer com arquivos
const fs = require('fs');

//mostrando a ordem que os consoles vão ser exibidos
console.log('inicio');

//nesse metodo do fs, você passa o nome do arquivo que vai criar e o texto que vai colocar dentro dele
fs.writeFile('texto.txt', 'Escrevendo pela função assincrona', function (err) {
    //função que vai fazer apoós criar o arquivo
    setTimeout(function () {
        console.log('Arquivo criado!');
    }, 1000);
})

//mostrando a ordem que os consoles vão ser exibidos
console.log('fim');

//OBS: nesse caso, como não é sincrono, ele executa o código na ordem de cima para baixo da esquerda para direita
//porém, quando chega em um código que exibe um pouco mais de tempo para ser executa e carregado, ele não espera
//a conclusão, continua carregando e continua as próximas linhas do código