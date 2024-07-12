const { Sequelize } = require('sequelize')

//primeiro você passa o nome do database, depois o user root, depois a senha e por último abre chaves para definir algumas configs
const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//vamos tentar conectar com o banco de dados, caso de errado vai exibir aquele console.log
try {

    sequelize.authenticate();
    console.log('conectado com o banco de dados');

} catch(err){
    console.log('Não foi possível conectar ao banco de dados');
};

//exportando o sequelize para podermos usar em outros arquivos da nossa aplicação
module.exports = sequelize;