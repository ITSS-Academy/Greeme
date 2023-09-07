import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UserService {
  // constructor(@InjectModel(User.name) private userModel: Model<UsersDocument>){}

  // constructor(
  //   // @InjectRepository(User)
  //   // private usersRepository: Repository<User>,
  // ) {}
  private url = config_redmine.url + "users.json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<User[]|any> {
    return new Promise((resolve, reject) => {
      this.httpService.get(this.url).subscribe((res) => {
        resolve(res.data.users);
      }, (err) => {
        reject(err);
      });
    });
  }

  // async findOne(username: string): Promise<User | undefined> {
   findOne(id: string):Promise<User | any>{
    // return this.usersRepository.findOneBy({ id });
    // return this.users.find((user) => user.username === username);
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "users/" + id + ".json?include=memberships,groups&key=" + config_redmine.apiKey;
      this.httpService.get(url).subscribe((res) => {
        resolve(res.data);
      }, (err) => {
        reject(err);
      });
    });
    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
