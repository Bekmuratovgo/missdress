import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/entities/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>) {}

    async createUser (dto: CreateUserDto) {
        // const user = await this.userRepository.findOne({
        //     where: {phoneNumber: dto.phoneNumber}
        // })
        // if (user) throw new BadRequestException('num in use')
        // return await this.userRepository.save(dto)
        //  return this.userRepository.save();
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
