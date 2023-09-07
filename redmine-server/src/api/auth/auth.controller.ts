import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/register')
  async create(@Body() createAuthDto: CreateAuthDto): Promise<any> {
    return await this.authService.create(createAuthDto);
  }

  @Post('login')
  signIn(@Body() signInDto: any):Promise<any> {
    // if (google) {
    //   // return this.authService.signInWithGoogle(signInDto, response);
    //   console.log("google");
    // }else{
      return this.authService.signIn(signInDto.username, signInDto.password);
    // }
  }

  // @UseGuards(AuthGuard)
  // @Get('login')
  // login(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.login(createAuthDto);
  // }

  @Get('logout')
  logout(@Res() response: Response) {
    return this.authService.logout(response);
  }
}
