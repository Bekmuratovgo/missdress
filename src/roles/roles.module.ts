import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/typeorm/entities/Role.entity';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
