import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./roles.model";


@Entity('user_role')
export class UserRole {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Role)
    @Column()
    roleId: number

    @ManyToOne(() => Role)
    @Column()
    userId: number
}