import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private roleService: RolesService
    ) { }

    async createUser(dto: any) {
        let user: any = this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("USER")
        console.log(role, 'role');
        console.log(user, 'user');
        
        let data = {
            ...user,
            // role: role
        }
        
        return this.userRepository.save(data);
    }

    async updateUser(id: number, updateUserDto: any) {
        let entity: any = await this.userRepository.findOneBy({ id })
        if (!entity) {
            throw new HttpException('user not found', HttpStatus.NOT_FOUND);
        }

        await this.userRepository.update(
        {
            id
        },
        {
            ...updateUserDto,
            role: entity.role
        })

        return this.userRepository.findOne({
            where: { id }
        });
    }

    async getAllUsers() {
        const users = await this.userRepository.find();
        return users;
    }
}
