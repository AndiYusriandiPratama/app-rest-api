var mysql = require("mysql");

// buat connection database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbrestapi",
});

// kondisi jika true or false connection
conn.connect((err) => {
  if (err) throw err;
  console.log("MySql Connection");
});

module.exports = conn;
