import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm"
import { ProfEntity } from "./ProfEntity"

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToOne(()=>ProfEntity)
    @JoinColumn()
    prof: ProfEntity

}