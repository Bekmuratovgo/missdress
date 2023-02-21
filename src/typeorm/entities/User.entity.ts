import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users'})
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string
    
    @Column()
    lastName: string

    @Column()
    phoneNumber: string

    @Column()
    code: string;
}