import { AMQPClient } from "@cloudamqp/amqp-client";
import {} from "dotenv/config";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

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

async function startConsumer() {
  //Setup a connection to the RabbitMQ server
  const cloudAMQPURL = process.env.CLOUDAMQP_URL;
  const connection = new AMQPClient(cloudAMQPURL);
  await connection.connect();
  const channel = await connection.channel();

  console.log("[✅] Connection over channel established");

  const q = await channel.queue("email.notifications");

  let counter = 0;

  const consumer = await q.subscribe({ noAck: false }, async (msg) => {
    try {
      console.log(`[📤] Message received (${++counter})`, msg.bodyToString());
      await sendEmail("bepul.webdev@gmail.com", "Hello bepul hossain");
      msg.ack();
    } catch (error) {
      console.error(error);
    }
  });

  //When the process is terminated, close the connection
  process.on("SIGINT", () => {
    channel.close();
    connection.close();
    console.log("[❎] Connection closed");
    process.exit(0);
  });
}

startConsumer().catch(console.error);
