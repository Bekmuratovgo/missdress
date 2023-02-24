import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/users.model";
import { RolesController } from "./roles.controller";
import { Role } from "./roles.model";
import { RolesService } from "./roles.service";
import { UserRole } from "./user-roles.model";


@Module({
  providers: [RolesService],
  imports: [
    TypeOrmModule.forFeature([Role, User, UserRole])
  ],
  controllers: [RolesController],
  exports: [
    RolesService
  ]
})
export class RolesModule {}