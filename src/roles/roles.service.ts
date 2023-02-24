import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRoleDto } from "./dto/create.role.dto";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) {}

    async createRole (dto: CreateRoleDto) {
        const role = this.roleRepository.create(dto);
        return this.roleRepository.save(role);
    }

    async getRoleByValue (value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        return role;
    }
}