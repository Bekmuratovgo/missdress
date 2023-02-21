import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/typeorm/entities/Role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role) private roleRepo: Repository<Role>){}
    async find() {
        return this.roleRepo.find();
    }
}
