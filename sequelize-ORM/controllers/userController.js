var { db } = require('../models/index');
const {  DataTypes, QueryTypes } = require('sequelize');
const Users = db.users;
const Posts = db.posts;

//create user

var addUser = async (req, resp)=>{
    console.log("=========");
    // const {dataValues} =await Users.create();
    // console.log(dataValues);
    
    // let obj = new Users;

    // // console.log(await obj);
    // function printPrototype(obj, i) {
    //     var n = Number(i || 0);
    //     var indent = Array(2 + n).join("-");
    
    //     for(var key in obj) {

    //         if(obj.hasOwnProperty(key)) {
    //             console.log(indent, key, ": ", obj[key]);
    //         }
    //     }
    
    //     if(obj) {
    //         if(Object.getPrototypeOf) {
    //             printPrototype(Object.getPrototypeOf(obj), n + 1);
    //         } else if(obj.__proto__) {
    //             printPrototype(obj.__proto__, n + 1);
    //         }
    //     }
    // }

    // printPrototype(Users);
    // // console.log(Users);


    let data = await Users.create({name: 'TestNEW', email:'test2@gmail.com', gender:'male'})
    // console.log(data.destroy());

    resp.status(200).json(data)
}

// get all users

var findAllUsers = async (req, resp) => {

    let allUsers = await Users.findAll({
        where:{
            id: 3
        }
    });

    let response = {
        data: allUsers
    }

    resp.status(200).json(response)

}

// delete one user

var deleteOneUser = async (req, res)=>{

    let {id} = req.query

    await Users.destroy({
        where:{
            id:id
        }
    })

    res.status(200).json("Delete id: "+id);
}

// update one user

var updatedOneUser = async (req, res)=>{
    
    let {id} = req.params

    await Users.update({ name: "updated name2" },{
        where:{
            id:id
        }
    })

     res.status(200).json("Updated id: "+id);
}


// setter getter 

var setterCntr = async (req, res)=>{
    
    let {value} = req.query;
    console.log(value);
    let data = await Users.create(
        {
            name: value, 
            email:'test2@gmail.com', 
            gender:'male'
        })
        

    res.status(200).json(data)
}

// raw query

var rawQuery =  async (req, res)=>{
    const users = await db.sequelize.query("Select * from users",{
        type: QueryTypes.SELECT
    })

    let response = {
        data: 'Raw Query ', 
        record:users
    }

    res.status(200).json(response)
}

// Add posts in the posts table
var addPost = async (req, res)=>{

    let data = await Posts.create({name: 'Nahid', title:'Java lover', content:'Pair DSA', user_id: 3})

    res.status(200).json(data);
}


// One to one relations

var oneToOne = async (req, res)=>{

    let data = await Users.findAll({
        include: Posts,
        where: {id: 3}
    })

    res.status(200).json(data);
}


// belongsTo 

var belongsTo = async (req, res)=>{

    let data = await Posts.findAll({
        // attributes: ['title', 'name'],
        include: [
            {model: Users}
        ],
        // where: {id: 3}
    })

    res.status(200).json(data);
}


module.exports={
    addUser,
    findAllUsers,
    deleteOneUser,
    updatedOneUser,
    setterCntr,
    rawQuery,
    oneToOne,
    addPost,
    belongsTo
}