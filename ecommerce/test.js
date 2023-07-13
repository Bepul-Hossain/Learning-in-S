const express = require('express')
const app = express()
const port = 3001;
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello bangladesh')
})
//////////////JOI///////////////

var Joi = require('joi');




// const validationMiddleWare = (req, res, next)=>{
//     const schema = Joi.object().keys({
//         email: Joi.string().required(),
//         password: Joi.string().required()
//     })
//     // const schema = Joi.object().keys({
//     //     email: Joi.string().required(),
//     //     password: Joi.string().required()
//     // }).unknown(true);

//     //const response = schema.validate(req.body, {abortEarly: false})
//     const response = schema.validate(req.body);
//     if(response.error){
//        return res.status(200).json({error: response.error});
//     }else{
//         next();
//     }
// }

const validationMiddleWare = (req, res, next)=>{
    const schema= Joi.object({
        userName: Joi.string()
            .alphanum()
            .min(3)
            .max(7)
            .required()
    })

   const response= schema.validate({userName: "bepul"});
   console.log(response);

   next();

}


app.post("/add-user", validationMiddleWare, async (req, res)=>{
    let result = { 
        id: 12,
        name: "test demo"
    }
    res.status(200).json(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

