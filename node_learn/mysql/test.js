var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'meter'
});

connection.connect();

connection.query('SELECT * FROM `meterdatabase`;', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[1]);
});
connection.end()