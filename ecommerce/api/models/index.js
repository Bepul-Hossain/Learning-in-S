const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root','Bepul@3964',{
    host: 'localhost',
    dialect:'mysql',
    pool: {max: 5, min: 0, idle: 10000} //how many connections and from one connection to another connection taking idle time
});

sequelize.authenticate()
.then(()=>{
    console.log("Connection has been established successfully.");
})
.catch(err=>{
    console.log("Unable to connect the database: "+err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.sequelize.sync({force: false})
.then(()=>{
    console.log("Yes re-sync");
})

module.exports={
    db
}