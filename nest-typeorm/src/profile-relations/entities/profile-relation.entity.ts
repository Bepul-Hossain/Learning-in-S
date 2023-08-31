import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: "profile-relation"})
export class ProfEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string
}