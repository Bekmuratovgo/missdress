import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/typeorm/entities/User.entity";
import { UsersController } from "src/users/users.controller";
import { UsersModule } from "src/users/users.module";
import { UsersService } from "src/users/users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [TypeOrmModule.forFeature([Users]),UsersModule],
    controllers: [AuthController],
    providers: [UsersService, AuthService],
})
export class AuthModule {}