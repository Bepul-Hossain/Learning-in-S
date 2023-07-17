module.exports = (async (sequelize, DataTypes)=>{
    
    const AddToCart = sequelize.define("AddToCart",{
        productId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        }
   
    },{
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        tableName: 'AddToCarts'
    });
    
    await AddToCart.sync()

    return AddToCart;
})
