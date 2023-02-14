import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsersModule} from './users/users.module'
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    // host: process.env.POSTGRES_HOST,
    // port: +process.env.POSTGRES_PORT,
    // username: process.env.POSTGRES_USER,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DB,
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'missdress',
    entities: [],
    synchronize: true,
    autoLoadEntities: true
  }),
  UsersModule
]})
export class AppModule {}
