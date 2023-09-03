module.exports = {


  friendlyName: 'View faq',


  description: 'Display "FAQ" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/faq'
    }

  },


  fn: async function () {
    console.log("how arey ==============>============== ");
    // Respond with view.
    return {};

  }


};
