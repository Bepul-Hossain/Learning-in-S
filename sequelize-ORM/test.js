const { Sequelize, DataTypes, json } = require('sequelize');

const sequelize = new Sequelize('sharetrip', 'root', 'Bepul@3964', {
  host: 'localhost',
  dialect: 'mysql'
});

const fn = async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

fn();


const User = sequelize.define("User", {
  //Model attribute are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
  }
}, {
  tableName: "test",
  timestamps: true,
  createdAt: false,
  updatedAt: 'updateTimestamp'
  //Other model options go here

})


User.sync();

const row = User.build({firstName: "bepul", lastName: "hosssain"})


const saveFun = async()=>{
  await row.save();
}

saveFun();

const fn2 = async()=>{
  let p = await User.create({firstName: "rakib", lastName: "sheikh"})
  console.log(p.toJSON());
  return p;
}

console.log(fn2());
