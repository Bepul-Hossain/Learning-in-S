const express = require('express')

const {isUploadPhoto} = require('./middleware/multer')

var bodyParser = require('body-parser')

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs")


const app = express()
const port = 3000

var cors = require('cors')
app.use(cors())
const {createAuthProfile} = require('./db/createAuthProfile');
const {insertDataAuthPofileTable} = require('./db/insertDataAuthPofileTable');
const { login } = require('./db/login');

const {updateProfile} = require('./db/updateProfile')
const { deleteProfile } = require('./db/deleteProfile')
const { userProfile } = require('./db/userProfile')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Auth crud assign working')
})


app.post('/createAuthProfile', createAuthProfile);
app.post('/insertDataAuthPofileTable',isUploadPhoto, insertDataAuthPofileTable);
app.post('/login',login)

app.put('/updateProfile/:userId', updateProfile);
app.delete('/deleteProfile/:userId', deleteProfile);
app.get('/userProfile/:userId', userProfile);


const swaggerDocument = YAML.load('./swagger.yaml');

app.use(
  "/api-doc",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})