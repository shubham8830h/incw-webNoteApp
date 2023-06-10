const mySql = require("mysql2");
require("dotenv").config();

const connectToDB = mySql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connectToDB.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("My Sql DataBase Connected.....");
  }
});

module.exports = connectToDB;
