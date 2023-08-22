import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserSignUpDto{
    @IsNotEmpty({message: 'name can not be null'})
    @IsString({message: 'name should be string'})
    name: string;

    @IsNotEmpty({message: 'email can not be empty'})
    @IsString({message: 'please provide a valid email'})
    email: string;

    @IsNotEmpty({message: 'password can not be empty'})
    @MinLength(5, {message: 'password should be minimum 5 character'})
    password: string;
}