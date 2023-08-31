import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Register } from "src/entities/Register";
import { RegisterType } from "src/utils/registerType";
import { Repository } from "typeorm";

@Injectable()
export class RegisterService{
    constructor(
        @InjectRepository(Register) private registerRepository: Repository<Register>
    ){
        console.log("Register service called");
        
    }

    register(registerInfo: RegisterType){
        const newRegiser = this.registerRepository.create({...registerInfo})
        return this.registerRepository.save(newRegiser);
    }
}