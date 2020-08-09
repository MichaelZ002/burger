const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Warcraft10621eff!",
    database: "burgers_db"
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected!`)
  });
  
  module.exports = connection;