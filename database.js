const mysql = require("mysql2");

// const connection = mysql
//   .createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME,
//   })
// .promise();

let connection;

module.exports = connection;
