import { Basket } from "src/basket/basket.model";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createDate: Date;

    @Column()
    title: string
    
    @Column()
    description: string

    @Column()
    price: number
    
    @Column()
    oldPrice: number
   
    @Column()
    size: string
    
    @Column()
    rating: number

    @OneToMany(() => Basket, (basket)=> basket.products_)
    basket: Basket[]
}