import { Product } from "src/products/product.model";
import { User } from "src/users/users.model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'basket'})
export class Basket {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Product)
    products_: Product;
    
    @ManyToOne(() => User, (user) => user.basket)
    @JoinColumn() //owner
    user_: User;
    
    @Column()
    amount: number;
    
    @Column()
    total_price: number;
}