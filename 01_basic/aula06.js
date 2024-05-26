//pegando um dado que foi passado pelo terminal
//OBS: no terminal inicie o projeto assim: node aula06.js nome=Mateus
//desse jeito a variavel nome vai estar dentro do process.argv

//mostrando todos os dados que tem dentro do process.argv
console.log(process.argv);

//separando o elemento de indice 2 para outra lista chamada args
const args = process.argv.slice(2);

//exibindo a nova lista que foi separado
console.log(args);

//separando o dado da lista args após o "=", e ficando só com o indice 1 que é onde está o nome
const name = args[0].split('=')[1];

//exibindo somente o nome
console.log(name);

//OBS: para tudo isso funcionar, tem que ser inicializado da seguinte forma no terminal
//node aula06.js nome=Mateus