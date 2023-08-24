import { IsNotEmpty, IsString } from "class-validator";

export class CreateShippingDto{
    @IsNotEmpty({message: "phone numuber can not be empty"})
    @IsString({message: "phone formate should be string"})
    phone:string;

    @IsString({message: "name formate should be string"})
    name: string;

    @IsNotEmpty({message: "address can not be empty"})
    @IsString({message: "address formate should be string"})
    address: string;

    @IsNotEmpty({message: "city can not be empty"})
    @IsString({message: "city formate should be string"})
    city: string;

    @IsNotEmpty({message: "postCode can not be empty"})
    @IsString({message: "postCode formate should be string"})
    postCode: string;

    @IsNotEmpty({message: "state can not be empty"})
    @IsString({message: "state formate should be string"})
    state: string;

    @IsNotEmpty({message: "country can not be empty"})
    @IsString({message: "country formate should be string"})
    country: string;


}