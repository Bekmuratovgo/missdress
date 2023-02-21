import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'role'})
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    value: string;
    
    @Column()
    description: string;

    // @BelongsToMany(() => User, () => UserRoles)
    // users: User[]
}