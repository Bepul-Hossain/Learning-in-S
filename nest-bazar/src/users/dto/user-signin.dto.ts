import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserSignInDto{

    @IsNotEmpty({message: 'email can not be empty'})
    @IsEmail({},{message: 'please provide a valid email'})
    email: string;

    @IsNotEmpty({message: 'password can not be empty'})
    @MinLength(5, {message: 'password should be minimum 5 character'})
    password: string;
}