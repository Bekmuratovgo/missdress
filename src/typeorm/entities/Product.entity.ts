import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
    
    @Column()
    description: string
}