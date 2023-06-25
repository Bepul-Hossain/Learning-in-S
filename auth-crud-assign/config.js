const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bepul@3964',
  database: 'auth-crud',
  multipleStatements: true
})

module.exports = {
    connection
}