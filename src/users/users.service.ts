import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import {NotFoundException} from '@nestjs/common'

@Injectable()
export class UserService {

    private users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
    ]

    getAllUsers(){
        return this.users;
    }

    getUser(id: number){
     const user = this.users.find(user=> user.id === id);
     if (!user){
        throw new NotFoundException('User Not Found')
     } 
     return user;  
    } 

    creatUser(createUserDto: CreateUserDto){
        const highestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = { id: highestId[0].id + 1, 
        ...createUserDto}
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id: number, updateUserDto: UpdateUserDto ){
     
      this.users = this.users.map(user => {
         if (user.id ===  id){
            return {...user, ...updateUserDto}
         }
         return user;
     }) 
     return this.getUser(id);
    }

    deleteUser(id: number){
        const removedUser = this.getUser(id);
        if (removedUser){
            this.users = this.users.filter(user => user.id !== id)
        }
        return removedUser;
    }
}
