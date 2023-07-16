const express = require('express')
const app = express()
const port = 3001;
const bodyParser = require('body-parser');

const routes = require('./api/routes');


app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

