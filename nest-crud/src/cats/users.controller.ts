import { Controller, Get, Param, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('users')
export class UsersController{
    constructor(){
        console.log("req object called");
    }

    @Get()
    allUser(@Req() req: Request):string{
        console.log(req);
        
        return "All users req object"
    }

    @Get(':id')
    user(@Param() params: any):string{
        
        console.log(params);
        
        return "single user and id is "+ params.id
    }
}