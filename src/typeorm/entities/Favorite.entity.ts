import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'news'})
export class News {
    @PrimaryGeneratedColumn()
    userId: number

    @Column()
    productId: number

    @Column()
    products: []
}