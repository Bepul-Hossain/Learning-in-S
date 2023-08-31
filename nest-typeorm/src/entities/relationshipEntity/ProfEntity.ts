import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class ProfEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string
}