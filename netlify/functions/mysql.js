require('dotenv').config()
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "db4free.net",
    user: process.env.USER,
    password: process.env.PSW,
    database: process.env.DB,
    port: 3306
});

var res = con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    let test = con.query("SELECT * FROM stocks", function (err, result) {
        if (err) throw err;
        return result
    });
    return test
});

exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(res),
    };
};

