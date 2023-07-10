module.exports = ((sequelize, DataTypes)=>{
    const Auth = sequelize.define("Auth",{
        name: {
            type: DataTypes.STRING,
            set(value) {
                this.setDataValue('name',value+" BD user");
              }
        },
        email:{
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com'
        },
        gender:{
            type: DataTypes.STRING
        }
    },{
        timestamps: false
    });
    return Auth;
})


// const createAuthTable = async(req, res)=>{

//     const sql = `
//         DROP TABLE IF EXISTS Auth;

//         CREATE TABLE Auth
//         (
//         Email int not null,
//         Pass varchar(255) not null,
//         Token varchar(255) DEFAULT null,
//         ExpiredDate TIMESTAMP DEFAULT "2001-07-05 17:03:15",
//         UserId int not null AUTO_INCREMENT,

//         PRIMARY KEY(UserId)
//         );`

//         const [results, metadata] = await db.sequelize.query(sql);
//             console.log(results);
//             console.log(metadata);
//         if(results){
//             res.send("ok")
//         }
// }

// module.exports={
//     createAuthTable
// }