import { Roles } from "../../utility/common/user-roles.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type: 'enum', enum: Roles, default: Roles.USER})
    roles: Roles;

    // @Column({type:'json'})
    // testrow: string; // json array
}

