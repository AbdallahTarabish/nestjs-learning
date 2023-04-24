import { Body, Controller, Get, Param, Post, Req ,Patch , Delete} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { UserEntity } from './user.entity';

@Controller()
export class UserController {

  private readonly users: UserEntity[] =  [] ;
  @Get('users')
  findAll(@Req() request: Request): UserEntity[] {
    return this.users;
  }

  @Get('users/:username')
  findOne(@Param('username') username: string): UserEntity {
    return this.users.find(user => user.username === username);
  }

  @Get('id/:id')
  findOneById(@Param('id') param: any): string {
    return param;
  }

  @Post('users')
  create(@Body() data: CreateUserDto): any {
    this.users.push({...data , id:this.users.length+1});
    return data;
  }

  @Patch("users/:id")
  update(@Param() id :number  , @Body() data:UpdateUserDto):any{
    let index= this.users.findIndex(user => user.id === id);
    this.users[index]={...this.users[index],...data}
    return this.users[index];
  }

  @Delete("users/:id")
  remove(@Param("id") id:number):any{
    let index = this.users.findIndex(user => user.id === id);
    this.users.splice(index,1);
    return this.users;
    // or
   // this.users.filter((user)=>user.id !== id)
  }
}
