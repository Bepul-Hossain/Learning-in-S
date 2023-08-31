import { Module } from "@nestjs/common";
import { RegisterService } from "./registers.service";
import { RegistersController } from "./registers.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Register } from "src/entities/Register";

@Module({
    imports:[TypeOrmModule.forFeature([Register])],
    controllers:[RegistersController],
    providers:[RegisterService]
})

export class RegisterModule{
}