import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://mkwysqfw:SQpeL-Gy82TbdvzqXdMZHae-BTO8UNGk@lionfish.rmq.cloudamqp.com/mkwysqfw'],
      queue: 'notification_queue',
      queueOptions: {
        durable: false
      },
    },
  })
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
