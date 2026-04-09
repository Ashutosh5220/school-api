const mysql = require("mysql2");

const db = mysql.createConnection(process.env.mysql://root:MsnVJkQTIBVTqZbOAoGHImiNVFKULsWw@nozomi.proxy.rlwy.net:46680/railway);

db.connect((err) => {
  if (err) {
    console.log("DB connection failed ❌", err);
  } else {
    console.log("DB connected ✅");
  }
});