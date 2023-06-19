const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bepul@3964',
    database: 'sharetrip'
})

console.log("================================================");
connection.connect()
connection.query(`UPDATE sharetrip.CUSTOMERS
        SET ADDRESS='Kishor'
        WHERE ID=101;
        `, (err, rows, fields) => {
        if (err) throw err
        
    })
  
  connection.end()