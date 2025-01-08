import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from 'src/dto/create-role.dto';
import { UpdateRoleDto } from 'src/dto/update-role.dto';

@Controller('roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService){}

    @Get()
    getRoles(){
        return this.rolesService.getRoles();
    }

    @Get(':id')
    getRoleById(@Param('id') id: number){
        return this.rolesService.getRoleById(id);
    }

    @Post()
    createRole(@Body() createRoleDto: CreateRoleDto){
        return this.rolesService.createRole(createRoleDto);
    }

    @Patch(':id')
    updateRole(@Param('id') id: number, @Body() updateRolesDto: UpdateRoleDto){
        return this.rolesService.updateRole(id, updateRolesDto)
    }

    @Delete(':id')
    deleteRole(@Param('id') id: number){
        return this.rolesService.deleteRole(id);
    }
}
