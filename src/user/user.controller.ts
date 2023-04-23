import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/createUser.dto';

@Controller()
export class UserController {
  @Get('users')
  findAll(@Req() request: Request): String {
    console.log(request);
    return request.url;
  }

  @Get('users/:username')
  findOne(@Param('username') username: string): string {
    return username;
  }

  @Get('id/:id')
  findOneById(@Param('id') param: any): string {
    return param;
  }

  @Post('users')
  create(@Body() data: CreateUserDto): any {
    return data;
  }
}
