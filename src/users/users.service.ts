import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async createUser (dto: CreateUserDto) {
        const user = this.userRepository.create(dto);
        return this.userRepository.save(user);
        // const role = await this.roleService.getRoleByValue("USER")
        // await user.$set('roles', [role.id])
    }
    
    async updateUser (dto: CreateUserDto) {
        // const user = await this.userRepository.create(dto);
        // const role = await this.roleService.getRoleByValue("USER")
        // await user.$set('roles', [role.id])
        // return user;
    }

    async getAllUsers () {
        const users = await this.userRepository.find();
        return users;
    }
}
