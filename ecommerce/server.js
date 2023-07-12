const express = require('express')
const app = express()
const port = 3001;
const bodyParser = require('body-parser')
const routes = require('./api/routes');

const authCtr = require('./api/controllers/auth/insertData');
const { createAuthTableCtr } = require('./api/controllers/auth/createAuthTable')

app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/createAuthTable', createAuthTableCtr)
app.post('/insertData', authCtr.insertData);

//add testroutes
app.use('', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

