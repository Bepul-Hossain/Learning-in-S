import { Body, Controller, Post } from "@nestjs/common";
import { RegisterDto } from "./registers.dto";
import { RegisterService } from "./registers.service";

@Controller('register')
export class RegistersController {
    constructor(private registerService:RegisterService){}
    
    @Post()
    register(@Body() registerInfo:RegisterDto){
        return this.registerService.register(registerInfo)
    }

}