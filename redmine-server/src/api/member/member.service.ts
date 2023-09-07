import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MemberService {
  private url = config_redmine.url + "memberships.json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }

  create(createMemberDto: CreateMemberDto, idProject: string): Promise<Member | any> {
    let url = config_redmine.url + "projects/" + idProject + "/memberships.json" + "?key=" + config_redmine.apiKey;
    let newMembership = {
      membership: {
        user_id: createMemberDto.user_id,
        role_ids: []
      }
    }

    createMemberDto.role_ids.forEach(element => {
      newMembership.membership.role_ids.push(element);
    });

    return new Promise((resolve, reject) => {
      this.httpService.post(url, newMembership).subscribe((res) => {
      resolve(res.data.membership);
      }, (err) => {
        reject(err);
      });
    });
  }

  findAll(idProject: string): Promise<Member[] | any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "projects/" + idProject + "/memberships.json" + "?key=" + config_redmine.apiKey;
      this.httpService.get(url).subscribe((res) => {
        resolve(res.data.memberships);
      }, (err) => {
        reject(err);
      });
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: string, updateMemberDto: UpdateMemberDto):Promise<any> {
    this.url = config_redmine.url + "memberships" + "/" + id + ".json" + "?key=" + config_redmine.apiKey;
    let newMembership = {
      membership: {
        role_ids: []
      }
    }

    updateMemberDto.role_ids.forEach(element => {
      newMembership.membership.role_ids.push(element);
    });

    return new Promise((resolve, reject) => {
      this.httpService.put(this.url, newMembership).subscribe((res) => {
        resolve(true);
      }, (err) => {
        reject(err);
      });
    });

  }

  remove(id: number):Promise<any> {
    this.url = config_redmine.url + "memberships" + "/" + id + ".json" + "?key=" + config_redmine.apiKey;
    return new Promise((resolve, reject) => {
      this.httpService.delete(this.url).subscribe((res) => {
        resolve(true);
      }, (err) => {
        reject(err);
      });
    });
  }
}
