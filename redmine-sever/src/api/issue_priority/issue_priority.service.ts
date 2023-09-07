import { Injectable } from '@nestjs/common';
import { CreateIssuePriorityDto } from './dto/create-issue_priority.dto';
import { UpdateIssuePriorityDto } from './dto/update-issue_priority.dto';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';
import { IssuePriority } from './entities/issue_priority.entity';

@Injectable()
export class IssuePriorityService {

  private urlAPI='';
  private url = config_redmine.url + "enumerations/issue_priorities" +this.urlAPI+ ".json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }
  
  create(createIssuePriorityDto: CreateIssuePriorityDto) {
    return 'This action adds a new issuePriority';
  }

  findAll():Promise<IssuePriority[]  |any> {
    return new Promise((resolve, reject) => {
      this.httpService.get(this.url).subscribe((res: any) => {
        resolve(res.data.issue_priorities);
      }, (err) => {
        reject(err);
      });
    }
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} issuePriority`;
  }

  update(id: number, updateIssuePriorityDto: UpdateIssuePriorityDto) {
    return `This action updates a #${id} issuePriority`;
  }

  remove(id: number) {
    return `This action removes a #${id} issuePriority`;
  }
}
