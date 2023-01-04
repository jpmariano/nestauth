import { Controller, Get, Post, Put, Delete, Body, Req, Res, HttpStatus, Param } from '@nestjs/common';
import express, {Request, Response} from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get()
  getAllUser() {
    return [];
    //return this.appService.getHello();
  }
  
  @Post()
  postUser(@Res() res: Response, @Body() body) {
    //return `Created a new post with values of ${JSON.stringify(body)} 🚀`;
    res.status(HttpStatus.CREATED).json({
      status: 'success',
      message: `user created`,
      data: {
        body
      }
    }).send();
  }

  @Put(':id')
  putUser(@Res() res: Response, @Param('id') id: number, @Body() body) {
    res.status(HttpStatus.OK).json({
      status: 'success',
      message: `user updated`,
      data: {
        id,
        body
      }
    }).send();
    //return this.appService.getHello();
  }

  @Delete(':id')
  deleteUser(@Res() res: Response, @Param('id') id: number) {
    res.status(HttpStatus.OK).json({
      status: 'success',
      message: `user deleted`,
      data: {
        id
      }
    }).send();
    //return this.appService.getHello();
  }

  @Get(':id')
  getUser(@Param('id') id: number): string {
    return `user ${id}`;
    //return this.appService.getHello();
  }
}
