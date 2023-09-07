import { Injectable } from '@nestjs/common';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class VersionService {

  // private urlAPI='';
  // private url = config_redmine.url + "groups" +this.urlAPI+ ".json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }

  
  create(createVersionDto: CreateVersionDto) {
    return 'This action adds a new version';
  }

  findAll(idProject:string):Promise<any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "projects/" + idProject + "/versions.json" + "?key=" + config_redmine.apiKey;
      this.httpService.get(url).subscribe((res) => {
        resolve(res.data.versions);
      }, (err) => {
        reject(err);
      });
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} version`;
  }

  update(id: number, updateVersionDto: UpdateVersionDto) {
    return `This action updates a #${id} version`;
  }

  remove(id: number) {
    return `This action removes a #${id} version`;
  }
}
