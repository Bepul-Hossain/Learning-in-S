module.exports = {


  friendlyName: 'Hello',


  description: 'Hello something.',



  inputs: {
    template: {
      description: 'The name of another email template to use as an optional override.',
      type: 'string',
      defaultsTo: 'reminder-to-confirm-email'
    }
  },

  fn: async function (inputs, exits) {
    
    await User.stream({
      emailStatus: 'pending',
      emailConfirmationReminderAlreadySent: false,
      createdAt: { '>': Date.now() - 1000*60*60*24*3 }
    })
    .eachRecord(async (user, proceed)=>{
      await sails.helpers.sendTemplateEmail.with({
        template: inputs.template,
        templateData: {
          user: user
        },
        to: user.emailAddress
      });
      return proceed();
    });//∞

    return exits.success();

  }


};

