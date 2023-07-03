const express = require('express')

const {isUploadPhoto} = require('./middleware/multer')

var bodyParser = require('body-parser')

const app = express()
const port = 3000

const {createAuthProfile} = require('./db/createAuthProfile');
const {insertDataAuthPofileTable} = require('./db/insertDataAuthPofileTable');
const { login } = require('./db/login')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Auth crud assign working')
})


app.post('/createAuthProfile', createAuthProfile);
app.post('/insertDataAuthPofileTable', isUploadPhoto, insertDataAuthPofileTable);

app.get('/login',login)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})