import { User } from "src/users/users.model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./user-roles.model";

@Entity({ name: 'role'})
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    value: string;
    
    @Column()
    description: string;

    @OneToMany(() => User, () => UserRole)
    users: User[]
}