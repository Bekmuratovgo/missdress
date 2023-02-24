import { Basket } from "src/basket/basket.model";
import { Role } from "src/roles/roles.model";
import { UserRole } from "src/roles/user-roles.model";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Role, () => UserRole)
    role: Role[];

    @OneToOne(() => Basket, (basket) => basket.user_)
    basket: Basket
}