import { ValidationPipe, ParseIntPipe, Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './users.service'; 
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UserService) {}
    //'/users' endpoint
    @Get()
    getAllUsers(){
        return this.userService.getAllUsers();
    }

        // 'users/:id' endpoint - retreives user by id.
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number ){
        return this.userService.getUser(id);
    }


    // 'Post/user' endpoint  - Creates a new user.
    @Post()
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return this.userService.creatUser(createUserDto);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id : number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.userService.updateUser(id,updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id: number ){
        return this.userService.deleteUser(id);
    }
}