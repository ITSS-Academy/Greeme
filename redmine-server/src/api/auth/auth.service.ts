import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Response } from 'express';
import * as dotenv from 'dotenv';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
dotenv.config();
import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { User } from '../user/entities/user.entity';
import { env } from 'process';
import { config_redmine } from 'src/redmine';
import { ProfileService } from '../profile/profile.service';
import { CreateProjectDto } from '../project/dto/create-project.dto';
import { CreateProfileDto } from '../profile/dto/create-profile.dto';
@Injectable()
export class AuthService {

  constructor(private usersService: UserService,
    private jwtService: JwtService,
    private httpService: HttpService,
    private profileService: ProfileService
    ) { }
  async create(createAuthDto: CreateAuthDto): Promise<any> {
    try {
      return new Promise(async (resolve, reject) => {
        // let url = "http://localhost/users.json" + "?key=" + config_redmine.apiKey;
        // this.httpService.post(url, createAuthDto).subscribe((res: AxiosResponse) => {
        //   res.data.user;
        //   let profile: CreateProfileDto = {
        //     id: Date.now().toString(),
        //     uid: res.data.user.is.toString(),
        //     phone: "",
        //     description: "",
        //     address: "",
        //     avatar: "",
        //     boD: "",
        //     create_at: new Date(),
        //     update_at: new Date(),
        //   }

        //   this.profileService.create(profile).then((res) => {
            resolve(true);
        //   }).catch((err) => {
        //     reject(err);
        //   })

        // }, (err) => {
        //   reject(err);
        // });
      });
    } catch (err) {
      return {
        error: err,
      }
    }

  }

  async signIn(username, password): Promise<any> {
    try {
      return new Promise((resolve, reject) => {
        let url = "http://" + username + ":" + password + "@localhost/my/account.json"
        this.httpService.get(url).subscribe((res: AxiosResponse) => {
          config_redmine.apiKey = res.data.user.api_key;
          let user = res.data.user as User;
          const payload = { sub: user.id, username: user.login, admin: user.admin };
          resolve({ access_token: this.jwtService.sign(payload) });
        }, (err) => {
          reject(err+"");
        });
      });
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  async signInWithGoogle(auth: CreateAuthDto, response: Response): Promise<any> {
    // try {
    // //   const user = await this.usersService.findOne(auth.login);
    // //   if (!user) {
    // //     let newUser = await this.create(auth, response);
    // //     // return newUser as User;
    // //   } else {
    // //     const payload = { sub: user.userId, username: user.username };
    // //     return {
    // //       access_token: this.jwtService.sign(payload),
    // //     };
    // //   }
    // } catch (err) {
    //   throw new UnauthorizedException();
    // }
  }

  logout(response: Response) {
    // response.clearCookie('jwt');
    let request = response.req as Request;
    return response.status(200).json({
      message: 'Logout success',
    });
  }
}
