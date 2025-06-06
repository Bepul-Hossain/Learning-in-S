import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "NOTIFICATION_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://mkwysqfw:SQpeL-Gy82TbdvzqXdMZHae-BTO8UNGk@lionfish.rmq.cloudamqp.com/mkwysqfw'],
          queue: 'notification_queue',
          queueOptions: {
            durable: false
          },
        }
      }
    ])
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule { }
