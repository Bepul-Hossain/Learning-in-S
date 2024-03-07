import { Body, Controller, Inject, Post } from '@nestjs/common';
import { OrderDto } from './requests';
import { OrdersService } from './orders.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly orderService: OrdersService,
        @Inject('NOTIFICATION_SERVICE') private readonly client: ClientProxy
    ) { }
    @Post()
    async create(@Body() payload: OrderDto) {
        this.client.emit('order_created', payload);
       return this.orderService.create(payload)
    }
}

// https://www.youtube.com/watch?v=IsP0h1yWYBI&ab_channel=JobayerHossain
// postman Example
// http://localhost:3000/orders
// {
//     "customerEmail": "bepul.cse.ru@gmail.com",
//     "totalPrice": 500
// }