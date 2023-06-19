const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bepul@3964',
  database: 'sharetrip'
})

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Database connected");
// })



const getQuery = `SELECT * FROM CUSTOMERS;`

app.get('/', (req, res) => {

  connection.query(getQuery,
    (err, rows, fields) => {
      if (err) throw err

      let json = JSON.stringify(rows);
      console.log(json);
      res.send(json)
    })
  // connection.end()

})


// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = `INSERT INTO CUSTOMERS(ID, NAME, AGE, ADDRESS, SALARY) VALUES (110, 'Abdullah', 26, "Dhaka", 50000);`
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });

// });


app.post('/insertData', async (req, res) => {

  const { ID, NAME, AGE, ADDRESS, SALARY } = req.body

  console.log(req.body);
  const insertQuery = `INSERT INTO CUSTOMERS(ID, NAME, AGE, ADDRESS, SALARY) VALUES (${ID}, '${NAME}', ${AGE}, '${ADDRESS}', ${SALARY});`;

  queryPromise(insertQuery)
    .then((result) => {
      console.log("First", { result });
      return queryPromise(getQuery)
    })
    .then(result => {
      console.log("Second ", { result });
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });



});

function queryPromise(params) {
  console.log({params});
  return new Promise((resolse, reject) => {
    connection.query(params, (err, result) => {
      if (err) {
        reject(err);
      }
      resolse(result);
    });
  })
}

// POST https://example.com/login
//
//      {
//        "email": "user@example.com",
//        "password": "helloworld"
//      }

// app.post('/login', (req, res) => {
//   try {
//     console.log(req.body)
//     res.send("Ok")
//   } catch (error) {
//     console.log(error)
//     res.send("Bad request")
//   }
// })




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})