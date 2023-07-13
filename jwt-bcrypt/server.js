
const express = require('express');
const app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(bodyParser.json());
  

const {register, login, secreteRoute} = require('./user');
const auth = require('./authenticaton');

const port = 3000;

app.post('/registration', register);
app.post('/login', login);
app.post('/secret-route', auth, secreteRoute);


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })

