const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World')
})


const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bepul@3964',
  database: 'auth-crud',
  multipleStatements: true
})


app.post('/createAuthProfile', (req, res)=>{

     const createAuthAndProfileQuery = `
      DROP TABLE IF EXISTS Auth;
      CREATE TABLE Auth (
        email varchar(255),
        pass varchar(255),
        PRIMARY KEY (email)
      );

      
      DROP TABLE IF EXISTS Profiles;
      CREATE TABLE Profiles (
        email varchar(255),
        first_name varchar(255),
        last_name varchar(255),
        Age int,PRIMARY KEY (email)
      );`

      connection.query(createAuthAndProfileQuery, (err, result)=>{
        if(err) {
          res.send(err)
        };
        res.send({result});
      });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})