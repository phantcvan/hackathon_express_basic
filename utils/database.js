const mysql = require("mysql2");

let pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "note_hackathon_2",
    password: "12345678",
});

let database = pool.promise();


module.exports = database;