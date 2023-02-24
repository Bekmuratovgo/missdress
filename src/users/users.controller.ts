import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UsersService } from "./users.service";


@Controller('user')
export class UsersController {
    constructor(private userService: UsersService)  {}

    @Post()
    async create (@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @Get()
    async getAll () {
        return this.userService.getAllUsers()
    }

    @Put(':id')
    async update (@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
        return this.userService.updateUser(id, updateUserDto);

    }
}