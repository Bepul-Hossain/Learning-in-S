module.exports=(sequelize, DataTypes)=>{
    const Posts = sequelize.define('posts', {
        // Model attributes are defined here
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id:DataTypes.INTEGER
      }, {
        // Other model options go here
        createdAt: 'create_at',
        updatedAt: 'modified_at'
      });
      return Posts;
}