//criando uma variavel constante (não pode ser alterada) com um valor
const x = 10;

//tentando fazer um comando, vai realizando tudo que está dentro do try, caso algo de erro
//para de executar oque está dentro do try e vai executar oque está dentro do catch
try {
    //tentando mudar o valor de uma constante, oque é para dar um erro, ou seja, sair do bloco do try
    x = 2;
    //esse console.log só vai ser exibido caso o comando de cima não de nenhum erro
    console.log('Nenhum erro');
} catch(err) {
    //caso algo do bloco de comando try de algum erro, vai executar oque está nesse bloco de comando
    //exibindo o erro
    console.log('Erro: ' + err);
}