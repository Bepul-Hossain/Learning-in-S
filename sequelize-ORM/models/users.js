module.exports = ((sequelize, DataTypes)=>{
    const Users = sequelize.define("users",{
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
    return Users;
})