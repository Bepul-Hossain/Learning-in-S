// const Profile = require("../models/Profile");

module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {

    success: {
      statusCode: 205,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage'
    },

    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },

  },


  fn: async function (inputs, exits) {

    // if (this.req.me) {
    //   throw {redirect:'/welcome'};
    // }

    // return {};

    console.log("==========================");
    const res =  await Profile.create({name:'Finn1', });
    console.log( this.req.body);
    console.log( inputs);
    exits.success({jj: 'kk'});
    var newUserRecord = await Profile.find()
    var [RowDataPacket] = newUserRecord;
    // console.log(newUserRecord);
    console.log("---------=============--------");
  

    return RowDataPacket;

  }


};
