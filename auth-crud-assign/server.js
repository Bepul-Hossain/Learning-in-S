const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

const db = require('./db/index');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World')
})


app.post('/createAuthProfile', db.createAuthProfile);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})