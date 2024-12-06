const { SESClient, SendTemplatedEmailCommand } = require("@aws-sdk/client-ses");
require("dotenv").config();

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.Access_key,
    secretAccessKey: process.env.Secret_access_key,
  },
  region: process.env.AWS_SES_REGION,
};

//Create ses service object
const sesCLient = new SESClient(SES_CONFIG);

const sendMail = async (templateName, recipientEmail) => {
  const sendTemplatedEmailCommand = new SendTemplatedEmailCommand({
    //Here's an example of how a template would be replaced with user data:
    // Template: <h1> Hello {{context.firstName}}, <h1><p>Don't forget about the party gifts!</p></h1>
    //Destination: <h1>Hello Bilbo, </h1> <p>Don't forget about the party gifts!</p>
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Source: process.env.AWS_SES_SENDER,
    Template: templateName,
    TemplateData: JSON.stringify({ name: "Web wizard" }),
  });

  try {
    const res = await sesCLient.send(sendTemplatedEmailCommand);
    console.log("Email with SES template has been sent!", res);
  } catch (error) {
    console.error(error);
  }
};

sendMail("SES-Template", "bepul.webdev@gmail.com");
