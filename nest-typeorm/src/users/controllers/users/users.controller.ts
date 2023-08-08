import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}
    @Get()
    getUsers(){
       return this.userService.findUsers();
    }

    @Post()
    createUsers(@Body() createUSerDto: CreateUserDto) {
       return this.userService.createUser(createUSerDto);
    }

    @Put(':id')
    async updateById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto){
        
        return await this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteById(@Param('id', ParseIntPipe) id:number){
        
        return await this.userService.deleteUser(id)
    }
}


