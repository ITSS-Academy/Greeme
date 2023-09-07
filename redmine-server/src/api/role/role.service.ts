import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  private urlAPI='';
  private url = config_redmine.url + "roles" +this.urlAPI+ ".json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }
  create(createRoleDto: CreateRoleDto) {
    return 'This action adds a new role';
  }

  findAll():Promise<Role|any> {
    return new Promise((resolve, reject) => {
      this.httpService.get(this.url).subscribe((res) => {
        resolve(res.data.roles);
      }, (err) => {
        reject(err);
      });
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
