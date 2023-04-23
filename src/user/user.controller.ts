import { Controller, Get , Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class UserController {

  @Get('users')
  findAll(@Req() request: Request): String {
    console.log(request);
    return request.url;
  }

  @Get('users/:id')
  findOne(@Req() request:Request): string {
    return request.params.id;
  }



}
