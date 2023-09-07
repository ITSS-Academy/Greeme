import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class IssueService {
  private urlAPI='';
  private url = config_redmine.url + "groups" +this.urlAPI+ ".json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }
  create(createIssueDto: CreateIssueDto) {
    return 'This action adds a new issue';
  }

  findAll() {
    return `This action returns all issue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} issue`;
  }

  update(id: number, updateIssueDto: UpdateIssueDto) {
    return `This action updates a #${id} issue`;
  }

  remove(id: number) {
    return `This action removes a #${id} issue`;
  }
}
