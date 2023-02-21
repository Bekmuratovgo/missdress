import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UsersService } from "./users.service";
import { AuthService } from "src/auth/auth.service";


@Controller('user')
export class UsersController {
    constructor(private userService: UsersService, private authService: AuthService)  {}
}