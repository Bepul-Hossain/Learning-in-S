const { Sequelize } = require('sequelize');

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