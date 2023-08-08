import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm/entities/User'
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ){

    }

    findUsers(){
        return this.userRepository.find();
    }

    createUser(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({...userDetails, createdAt: new Date()});
        return this.userRepository.save(newUser);
    }

    updateUser(id:number, updateUserDetails: UpdateUserParams){
       return this.userRepository.update({id}, {...updateUserDetails})
    }

    deleteUser(id: number){
        return this.userRepository.delete(id)
    }
}
