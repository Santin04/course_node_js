const os = require('os');

//retorna um objeto onde cada item contem as informações dos nucleos do CPU(Processador)
console.log(os.cpus());

//retorna a quantidade de memória livre no seu computador, retorna em bytes
console.log(os.freemem());

//pasta raiz do pc
console.log(os.homedir());

//tipo do sistema operacional
console.log(os.type());