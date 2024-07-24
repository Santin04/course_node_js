//Importando esse metodo da biblioteca do sequelize, ele tem todos os tipos que as colunas do mysql pode ter
const { DataTypes } = require('sequelize');

//importando a conexão com o banco de dados, pois vamos mexer com ele nesse arquivo
const db = require('../db/conn');

//passando o nome, tipo e a configuração de cada coluna da sua tabela
//para depois ficar muito mais fácil de passar os dados para o banco
const User = db.define('User', {
    //passando as configrações da coluna name
    name: {
        //tipo da coluna, nesse caso string
        type: DataTypes.STRING,
        //alowNull, é perguntando se pode ser um valor nulo ou não
        allowNull: false
    },
    //passando as configurações da outra coluna
    occupation: {
        type: DataTypes.STRING,
        //melhor maneira de obrigar o usuário a preencher o campo, no de cima tem a brecha para se passar uma string vazia
        required: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
});

//exportando o usuário
module.exports = User;