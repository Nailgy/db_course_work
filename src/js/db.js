const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nailgy',
  password: 'nailgy123',
  database: 'imbaza',
});

module.exports = connection;