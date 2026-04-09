const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ashu202002",
  database: "schooldb"
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Failed", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = db;