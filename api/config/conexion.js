const mysql = require('mysql2/promise');

// create the connection to database
const connection = mysql.createConnection({
  host: '192.168.1.102',
  port: 3311,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: 'usuarios_db'
});

module.exports = connection;