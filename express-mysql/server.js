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


//return all data from table
const getQuery = `SELECT * FROM CUSTOMERS;`

app.get('/', (req, res) => {
  connection.query(getQuery,
    (err, rows, fields) => {
      if (err) throw err

      let json = JSON.stringify(rows);
      console.log(json);
      res.send(json)
    })
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


//insert one data and return all data from table

app.post('/insertData', (req, res)=>{
  const { NAME, AGE, ADDRESS, SALARY } = req.body;

  const insertQuery = `INSERT INTO CUSTOMERS(NAME, AGE, ADDRESS, SALARY) VALUES ('${NAME}', ${AGE}, '${ADDRESS}', ${SALARY});`;


  queryPromise(insertQuery)
  .then((result)=>{
    console.log("1st result: ", result);
    
    
    return queryPromise(getQuery)
  })
  .then((result)=>{
    console.log("2nd result: ", result);
    res.send(result);
  })
  .catch((err)=>{
    res.send(err);
  })
})

//update one row and return updated table
let myUpdatePromise = (params)=>{
  return new Promise((resolve, reject)=>{
    connection.query(params, (err, result)=> {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })
}

app.put('/updateData', (req, res)=>{
  const {ID, SALARY} = req.body;
  const updateQuery = `UPDATE CUSTOMERS 
                        SET 
                          SALARY = ${SALARY}
                        WHERE 
                          ID=${ID};`;

  myUpdatePromise(updateQuery)
  .then((result)=>{

    console.log("1st updated query : ");
    console.log({result});
    return myUpdatePromise(getQuery);
  })
  .then((result)=>{

    console.log({result});
    res.send({result});
  })
  .catch((err)=>{
    res.send(err);
  })

})


//Delete one row and return updated table
let myDeletePromise = (params)=>{
  return new Promise((resolve, reject)=>{
    connection.query(params, (err, result)=> {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  })
}

app.delete('/deletedId',(req, res)=>{
  const {ID} = req.body;
  const deleteQuery = `DELETE FROM CUSTOMERS 
                        WHERE 
                          ID=${ID};`;

                          console.log(deleteQuery);
  myDeletePromise(deleteQuery)
  .then((result)=>{

    console.log("1st deleted query : ");
    console.log({result});
    return myDeletePromise(getQuery);
  })
  .then((result)=>{

    console.log({result});
    res.send({result});
  })
  .catch((err)=>{
    res.send(err);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})