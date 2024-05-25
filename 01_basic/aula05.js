// importando o mudolo path
const path = require('path');
//usando um metodo do modulo path que diz qual a extensão do arquivo
const extension = path.extname('arquivo.pdf');
//exibe a extensão do arquivo, nesse caso .pdf, mas pode ser qualquer uma (.exe, .ifv, etc)
console.log(extension);