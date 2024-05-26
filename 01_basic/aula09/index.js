//criando variaveis de diversos tipos
const x = 10;
const y = 'conversa';
const z = [1, 2];

//exibindo no console os valores das variaveis
console.log(x, y, z);

//contagem de quantas vezes aquele dado apareceu no console
console.count(y);
console.count(y);
console.count(y);
//quando troca o valor que exibe no console, ele gera uma nova contagem
console.count(z);
//aqui como já teve 3 antes ele continua no valor 4
console.count(y);

//passando o valor depois da string
console.log('oi, %s, tchau', y);
//desse jeito o %s, indica que ali vai ter uma variavel tipo string, e é só passar a variavel depois da virgula

//limpa o console
console.clear();