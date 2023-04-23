import { Controller, Get , Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class UserController {

  @Get('users')
  findAll(@Req() request: Request): String {
    console.log(request);
    return request.url;
  }

  @Get('users/:username')
  findOne(@Param("username") username:string): string {
    return username;
  }

  @Get('id/:id')
  findOneById(@Param("id") param:any): string {
    return param;
  }




}
