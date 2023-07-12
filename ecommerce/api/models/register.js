module.exports = (async (sequelize, DataTypes)=>{
    
    const Register = sequelize.define("Register",{
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true
        }
   
    },{
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        tableName: 'Registers'
    });
    
    await Register.sync()

    return Register;
})
