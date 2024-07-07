const mysql = require('mysql');

const conn = mysql.createPool({
    connectionLimit: 10,    
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
});

module.exports = conn;