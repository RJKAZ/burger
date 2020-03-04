const mysql = require('mysql');

// load enviroment variables
require('dotenv').config();

// create connection to DB

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
});

module.exports = connection;