const express = require('express');
const app = express();
const port = 8081

var useCtrl = require('./controllers/userController');

require('./models/index')

app.get('/',(req, res)=>{
    res.send("Home page");
})


app.post('/add', useCtrl.addUser)

app.get('/users', useCtrl.findAllUsers)
app.delete('/delete/:id', useCtrl.deleteOneUser);
app.put('/updated/:id', useCtrl.updatedOneUser);
app.post('/setter', useCtrl.setterCntr);
app.post('/addPost', useCtrl.addPost);
app.get('/rawQuery', useCtrl.rawQuery);

app.get('/oneToOne', useCtrl.oneToOne);
app.get('/belongsTo', useCtrl.belongsTo);

app.listen(port,()=>{
    console.log("App is listening at http://localhost:"+port);
})