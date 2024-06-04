// COMANDO: npm install nome_biblioteca ou npm i nome_biblioteca
//     Com esse comando você consegue instalar uma biblioteca que deseja usar no seu projeto
//     É gerado na pasta do seu arquivo, uma pasta chamada node_modules, onde tem todos os metodos da biblioteca qeu foi instalada, assim você conseguindo usar no seu projeto
//     A pasta node_modules nunca é enviada para o github, sempre que vai compartilhar seu projeto, você não envia ela, pois ocupa muito espaço
//     Sempre que for rodar um projeto em outra máquina que está sem o node_modules no seu projeto, basta dar o comando npm install que ele vai instalar todas dependencias

//importando a biblioteca que instalamos
const lodash = require('lodash');

//criando dois arrays
const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

//usando o metodo do lodash que me mostra a diferença de dois arrays
const diff = lodash.difference(a, b);

//exibindo no terminal a diferença dos dois
console.log(diff);

//DICA: www.npmjs.com
//     É um site onde tem todos as bibliotecas que você pode instalar com o npm, além disso também tem para que elas servem e como usar elas
//     É um bom lugar para você descobrir bibliotecas novas e que sejam uteis para seu projeto

//COMANDO: npm install nome_biblioteca --save-dev
//     da para você fazer a instalação de bibliotecas que são usadas apenas no momento do desenvolvimento, e não na hora que o site estiver no ar
//     Exemplo: Nodemon, que é usado apenas para não ter que reiniciar o servidor toda hora que tiver uma atualização

//COMANDO: npm update
//     Com esse comando você atualzia para a última versão todas as bibliotecas que estão instaladas no seu projeto

//COMANDO: npm update nome_biblioteca
//     Já esse comando vai atualizar apenas uma biblioteca que do seu projeto, diferente do de cima que atualiza todas

//CÓDIGO: "start": "node index.js"
//     Esse código é usado dentro do "scripts" que fica no arquivo package.json, ele serve serve para atalho do comando de rodar seu código
//     Nesse exemplo de cima, quando você colocar no seu terminal npm start, vai ser como se você estivesse escrevendo npm index.js e vai rodar seu código normalmente

//COMANDO: npm install nome_biblioteca -g
//     Nesse caso você vai estar instalando uma biblioteca, porém, não somente no seu projeto e sim em toda sua máquina, assim indo para todos projetos que você tem
//     Não recomendo fazer isso, pois você perde um pouco do controle e do entendimento do que tem certinho em cada projeto

//COMANDO: npm uninstall nome_biblioteca
//     Esse comando vai fazer com que você desinstale alguma biblioteca do seu projeto, é bom sempre tirar bibliotecas que você achou que ia usar e acabou não usando, asism não sobrecarrega o projeto
