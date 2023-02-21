import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './typeorm/entities/User.entity';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './typeorm/entities/Role.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0550tema',
      database: 'missdress',
      entities: [Users, Role],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule, AuthModule, RolesModule
  ],
  controllers: [],
})
export class AppModule {}
