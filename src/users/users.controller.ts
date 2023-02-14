import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UsersService } from "./users.service";


@Controller('user')
export class UsersController {
    constructor(private userService: UsersService)  {}

    @Post()
    async create (@Body() userDto: CreateUserDto) {
        console.log(userDto)
        return this.userService.createUser(userDto);
    }

    @Get()
    async getAll () {
        return this.userService.getAllUsers()
    }
}