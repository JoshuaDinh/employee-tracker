const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: "5000",
  password: "Joshua123",
  database: "employeeSystem",
});

module.exports = db;
