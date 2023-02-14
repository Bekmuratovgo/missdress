import { Column, Entity } from "typeorm";

@Entity({ name: 'role'})
export class Role {
    @Column()
    id: number;
    
    @Column()
    value: string;
    
    @Column()
    description: string;

    // @BelongsToMany(() => User, () => UserRoles)
    // users: User[]
}