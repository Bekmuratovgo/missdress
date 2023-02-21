import { Body, Controller, Get, Post } from "@nestjs/common";
import { CodeDto } from "src/users/dto/code.dto";
import { CreateUserDto } from "src/users/dto/create.user.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(readonly authService: AuthService){}
    @Post('signup')
    async create (@Body() userDto: CreateUserDto, codeDto: CodeDto) {
        return this.authService.signup(userDto);
    }

    @Post('verifycode')
    async verify (@Body() createDto: CreateUserDto) {
        return this.authService.verify(createDto);
    }
    
    @Get()
    async getAll() {
        
    }
    // @Post('signup')
    // async signup(@Body() userDto: CreateUserDto) {
    //     console.log(userDto)
    //     return this.authService.signup(userDto);
    // }

    @Post('signin')
    async signin(@Body() userDto: CreateUserDto) {
        return this.authService.signin(userDto)
    }
}