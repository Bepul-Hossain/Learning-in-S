import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product{
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column( )
    description: string;

}