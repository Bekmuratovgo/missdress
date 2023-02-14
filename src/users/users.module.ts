import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User])
    // SequelizeModule.forFeature([User, Role, UserRoles]),
    // RolesModule
  ]
})
export class UsersModule {}
