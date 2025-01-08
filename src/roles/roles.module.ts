import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Repository } from 'typeorm';
import { Role } from './entities/roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  exports: [RolesService],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
