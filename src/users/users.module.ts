import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "src/roles/roles.model";
import { RolesModule } from "src/roles/roles.module";
import { UserRole } from "src/roles/user-roles.model";
import { UsersController } from "./users.controller";
import { User } from "./users.model";
import { UsersService } from "./users.service";


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, Role, UserRole]),
    RolesModule
  ]
})
export class UsersModule {}
