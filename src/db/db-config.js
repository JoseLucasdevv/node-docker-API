require("dotenv").config();

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.HOST_DB,
  database: process.env.DATABASE_NAME,
  user: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  port: 3306,

  connectionLimit: 100,
});

module.exports = db;
