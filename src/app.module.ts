import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Basket } from './basket/basket.model';
import { BasketModule } from './basket/basket.module';
import { Product } from './products/product.model';
import { ProductsModule } from './products/product.module';
import { Role } from './roles/roles.model';
import { RolesModule } from './roles/roles.module';
import { UserRole } from './roles/user-roles.model';
import { User } from './users/users.model';
import {UsersModule} from './users/users.module'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'missdress',
    entities: [User, Role, UserRole, Basket, Product],
    synchronize: true,
    autoLoadEntities: true
  }),
  UsersModule,
  ProductsModule,
  RolesModule,
  BasketModule,

]})
export class AppModule {}
