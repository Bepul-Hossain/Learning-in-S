const { SESClient, CreateTemplateCommand } = require("@aws-sdk/client-ses");
require("dotenv").config();

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.Access_key,
    secretAccessKey: process.env.Secret_access_key,
  },
  region: process.env.AWS_SES_REGION,
};

const sesCLient = new SESClient(SES_CONFIG);

const run = async (templateName) => {
  const createTemplateCommand = new CreateTemplateCommand({
    //The template feature in Amazon SES is based on the Handlebars template system.

    Template: {
      TemplateName: templateName,
      HtmlPart: `<h1>Hello, {{name}}</h1>
            <p>
            Did you know Amazon has a mascot named Peccy? 
            </p>
            `,
      TextPart: `Hello {{name}}! Did you know Amazon has a mascot name Peccy? hi`,
      SubjectPart: "Amazon Tip",
    },
  });

  try {
    const res = await sesCLient.send(createTemplateCommand);
    console.log("Email template has been created!", res);
  } catch (error) {
    console.error(error);
  }
};

run("SES-Template");
