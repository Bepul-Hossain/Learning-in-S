import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../entities/User'
import { Repository } from 'typeorm';
import { CreateUserParams, CreateUserProfileParam, UpdateUserParams } from 'src/utils/types';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
import { Profile } from 'src/entities/Profile';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>
    ){

    }

    findUsers(){
        return this.userRepository.find({relations:['profile']});
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


    async createUserProfile(id: number, createUserProfileDetails: CreateUserProfileParam){
        const user = await this.userRepository.findOneBy({id});

        if(!user){
            throw new HttpException("User not found", HttpStatus.BAD_REQUEST)
        }

        const newProfile = this.profileRepository.create(createUserProfileDetails);
        console.log(newProfile);
        
        const savedProfile = await this.profileRepository.save(newProfile);

        user.profile = savedProfile;
        return this.profileRepository.save(user)
    }
}
