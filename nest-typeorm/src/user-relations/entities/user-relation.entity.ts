import { ProfEntity } from "src/profile-relations/entities/profile-relation.entity"
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm"


@Entity({name: "user-relation"})
export class UserRelationEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToOne(()=>ProfEntity)
    @JoinColumn()
    prof: ProfEntity
}
