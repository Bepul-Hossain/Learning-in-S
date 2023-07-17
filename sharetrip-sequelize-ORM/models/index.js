const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('mysql::memory:') // Example for sqlite
// const sequelize = new Sequelize('mysql://root:Bepul@3964@elocalhost:3306/sharetrip')

const sequelize = new Sequelize('sharetrip', 'root','Bepul@3964',{
    host: 'localhost',
    dialect:'mysql',
    pool: {max: 5, min: 0, idle: 10000} //how many connections and from one connection to another connection taking idle time
});

sequelize.authenticate()

.then(()=>{
    console.log("connected");
})
.catch(err=>{
    console.log("Error: "+err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require('./users')(sequelize, DataTypes);
db.posts = require('./posts')(sequelize, DataTypes);


db.users.hasOne(db.posts, {foreignKey: 'user_id'}); // default userId
db.posts.belongsTo(db.users, {foreignKey: 'user_id'});

db.sequelize.sync({force: false})
.then(()=>{
    console.log("Yes re-sync");
})

module.exports={
    db
}