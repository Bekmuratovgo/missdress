import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'order'})
export class Order {
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
}