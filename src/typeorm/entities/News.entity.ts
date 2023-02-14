import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'news'})
export class News {
    @PrimaryGeneratedColumn()
    creatorId: number

    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    password: string
}