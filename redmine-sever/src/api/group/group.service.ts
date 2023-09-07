import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class GroupService {
  private urlAPI='';
  private url = config_redmine.url + "groups" +this.urlAPI+ ".json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }

  create(createGroupDto: CreateGroupDto) {
    return 'This action adds a new group';
  }

  findAll() :Promise<Group|any>{
    return new Promise((resolve, reject) => {
      this.httpService.get(this.url).subscribe((res: AxiosResponse) => {
        resolve(res.data.groups);
      }, (err) => {
        reject(err);
      });
    });
    
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
