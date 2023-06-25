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
  database: 'auth-crud'
})




let queryPromise = (params)=>{
  return new Promise((resolve, reject)=>{
    connection.query(params, (err, result)=>{
      if(err){
         reject(err);
      }
      resolve(result);
    });
  });
}



app.post('/createAuthProfile', (req, res)=>{

    const createAuthQuery = `CREATE TABLE Auth (
        email varchar(255),
        pass varchar(255),
        PRIMARY KEY (email)
      );`

    const createProfileQuery = `CREATE TABLE Profiles (
      email varchar(255),
      first_name varchar(255),
      last_name varchar(255),
      Age int,PRIMARY KEY (email)
    );`

    queryPromise(createAuthQuery)
    .then((result)=>{
      console.log("result: ", result);
      return queryPromise(createProfileQuery);
    })
    .then((result)=>{
      console.log("result 2: "+result);
      res.send({"result ": result})
    })
    .catch((err)=>{
      res.send(err);
    })  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})