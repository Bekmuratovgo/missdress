import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string
    
    @Column()
    description: string
    
    @Column()
    price: number

    @Column()
    img: any
}