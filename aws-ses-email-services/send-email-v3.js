const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
require("dotenv").config();

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.Access_key,
    secretAccessKey: process.env.Secret_access_key,
  },
  region: process.env.AWS_SES_REGION,
};

const sesCLient = new SESClient(SES_CONFIG);

const sendEmail = async (recipientEmail, name) => {
  let params = {
    Source: process.env.AWS_SES_SENDER,
    Destination: {
      ToAddresses: [recipientEmail],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: "<h1>THis is the body of my email</h1>",
        },
        Text: {
          Charset: "UTF-8",
          Data: "This is the body of my email text version",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Hello, ${name}`,
      },
    },
  };

  try {
    const sendEmailCommand = new SendEmailCommand(params);
    const res = await sesCLient.send(sendEmailCommand);
    console.log("Email has been sent!", res);
  } catch (error) {
    console.error(error);
  }
};

sendEmail("bepul.webdev@gmail.com", "Hello bepul");
