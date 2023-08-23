import { CategoryEntitiy } from "src/categories/entities/category.entity";
import { Roles } from "../../utility/common/user-roles.enum";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

// export enum Roles {
//     ADMIN = 'admin',
//     USER = 'user'
// }
@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column({unique: true})
    email: string;

    @Column({select: false})
    password: string;

    @Column({type: 'enum', enum: Roles, default: Roles.USER})
    roles: Roles;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp

    @OneToMany(() => CategoryEntitiy, (cat) => cat.addedBy)
    categories: CategoryEntitiy[]

    // @Column({type:'json'})
    // testrow: string; // json array
}

