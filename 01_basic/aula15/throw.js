//criando uma variavel com uma string dentro
//caso você tire as aspas do número 10, o código vai parar de dar erro
const x = '10';

//checar se x é um número ou não
if (!Number.isInteger(x)){
    //se o x não for um inteiro, vai retornar esse novo erro que foi criado
    //o erro criado, assim como outros erros, ele para o código ou seja só vai dar aquele console.log()
    //no fim do código se a variavel x for um número inteiro
    throw new Error('O valor de x não é um inteiro');
}

console.log('continuando o código');