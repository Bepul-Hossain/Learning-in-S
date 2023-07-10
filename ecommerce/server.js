const express = require('express')
const app = express()
const port = 3001;
const bodyParser = require('body-parser')

const authCtr= require('./api/controllers/auth/index')

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/signUp', authCtr.signUp);
app.post('/login', authCtr.login);

require('./api/models/index');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

