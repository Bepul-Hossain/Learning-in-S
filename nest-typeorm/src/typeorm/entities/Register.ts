import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'registers'})
export class Register{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    pass: string;

}