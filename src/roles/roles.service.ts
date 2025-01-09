import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from 'src/dto/create-role.dto';
import { UpdateRoleDto } from 'src/dto/update-role.dto';
import { Role } from './entities/roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {

  constructor(
  @InjectRepository(Role)
    private readonly roleRepository: Repository<Role> ){}

    

    getRoles(){
        return this.roleRepository.find();
 
   }

   async getRoleById(id: number){
    return await this.roleRepository.findOne({where: {id}}) ;
   }


   async createRole(createRoleDto: CreateRoleDto){
    const role = this.roleRepository.create(createRoleDto)
    return await this.roleRepository.save(role) ;
   }

   updateRole(id: number, updateRoleDto: UpdateRoleDto){

    return;
}

deleteRole(id: number){
    return ;
}
}
