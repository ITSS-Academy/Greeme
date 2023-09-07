import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.model';

@Injectable()
export class UserService {
  // constructor(@InjectModel(User.name) private userModel: Model<UsersDocument>){}

  constructor(
    // @InjectRepository(User)
    // private usersRepository: Repository<User>,
  ) {}

  // private users:User[] = [
  //   {
  //     userId: 1,
  //     username: 'john',
  //     password: 'changeme',
  //   },
  //   {
  //     userId: 2,
  //     username: 'maria',
  //     password: 'guess',
  //   },
  // ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<any> {
    // this.usersRepository.find().then((res) => {
    //   console.log(res);
    // });
    // return await this.usersRepository.find();
    // return this.users;
    return
  }

  // async findOne(username: string): Promise<User | undefined> {
  async findOne(username: string){
    // return this.usersRepository.findOneBy({ id });

    // return this.users.find((user) => user.username === username);
    return 'This action returns a #${id} user'
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
