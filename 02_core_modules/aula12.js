const path = require('path');

const caminho = '/relatorios/mateus/relatorio1.pdf';

//retorna o caminho para chegar no arquivo
console.log(path.dirname(caminho));
//retorna o nome do arquivo e qual a extensão dele
console.log(path.basename(caminho));
//retorna somente a extensão do arquivo
console.log(path.extname(caminho));