import { Injectable } from '@nestjs/common';
import { CreateIssueStatusDto } from './dto/create-issue_status.dto';
import { UpdateIssueStatusDto } from './dto/update-issue_status.dto';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class IssueStatusService {
  private urlAPI='';
  private url = config_redmine.url + "issue_statuses" +this.urlAPI+ ".json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }


  create(createIssueStatusDto: CreateIssueStatusDto) {
    return 'This action adds a new issueStatus';
  }

  findAll():Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService.get(this.url).subscribe((res: any) => {
        resolve(res.data.issue_statuses);
      }, (err) => {
        reject(err);
      });
    });

  }

  findOne(id: number) {
    return `This action returns a #${id} issueStatus`;
  }

  update(id: number, updateIssueStatusDto: UpdateIssueStatusDto) {
    return `This action updates a #${id} issueStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} issueStatus`;
  }
}
