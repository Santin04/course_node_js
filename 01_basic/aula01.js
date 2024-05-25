//primeira maneira de importar algum modulo ou biblioteca
const fs = require('fs');

//lenod um arquivo de txt
fs.readFile('arquivotxt.txt', 'utf-8', (err, data) => {
    if(data){
        console.log(data);
    } else {
        console.log(err);
    }
})