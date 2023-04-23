import { Body, Controller, Get, Param, Post, Req ,Patch} from '@nestjs/common';
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
    this.users.push(data);
    return data;
  }

  @Patch("users/:id")
  update(@Param() id :number  , @Body() data:UpdateUserDto):any{
    this.users[id] = data;
    return data;
  }
}
