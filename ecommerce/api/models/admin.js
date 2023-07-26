module.exports = (async (sequelize, DataTypes)=>{
    
    const Admin = sequelize.define("Admin",{
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
   
    },{
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        tableName: 'Admin'
    });
    
    await Admin.sync()

    return Admin;
})
