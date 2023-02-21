import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'news' })
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  products: [];
}