module.exports = (async (sequelize, DataTypes)=>{
    
    const Product = sequelize.define("Product",{
        productId: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        tableName: 'Products'
    });
    
    await Product.sync()

    return Product;
})
