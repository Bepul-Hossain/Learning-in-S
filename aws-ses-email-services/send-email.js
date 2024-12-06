const AWS = require("aws-sdk");
require("dotenv").config();

const AWS_CONFIG = {
  accessKeyId: process.env.Access_key,
  secretAccessKey: process.env.Secret_access_key,
  region: process.env.AWS_SES_REGION,
};

console.log(AWS_CONFIG);

const awsSes = new AWS.SES(AWS_CONFIG);

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
    const res = await awsSes.sendEmail(params).promise();
    console.log("Email has been sent!", res);
  } catch (error) {
    console.log(error);
  }
};

sendEmail("bepul.webdev@gmail.com", "Hello bepul");
