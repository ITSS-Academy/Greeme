import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';
import { Issue } from './entities/issue.entity';
@Injectable()
export class IssueService {

  private url = config_redmine.url + "issues.json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }
  create(createIssueDto: CreateIssueDto): Promise<Issue | any> {

    return new Promise((resolve, reject) => {
      let newIssue =this.createIssue(createIssueDto);
      this.httpService.post(this.url, newIssue).subscribe((res) => {
        resolve(res.data.issue);
      }, (err) => {
        reject(err);
      });
    });
  }

  findAll(idProject: string): Promise<Issue[] | any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "/issues.json?include=children,attachments,journals,relations,changesets,watchers ,allowed_statuses"
        + "&project_id=" + idProject
        + "&key=" + config_redmine.apiKey;
      this.httpService.get(url).subscribe((res) => {
        resolve(res.data.issues);
      }, (err) => {
        reject(err);
      });
    });
  }

  findOne(id: number): Promise<Issue | any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "issues/" + id + ".json?include=children,attachments,journals,relations,changesets,watchers ,allowed_statuses" + "&key=" + config_redmine.apiKey;
      this.httpService.get(url).subscribe((res) => {
        resolve(res.data.issue);
      }, (err) => {
        reject(err);
      });
    });

  }

  update(id: number, updateIssueDto: UpdateIssueDto): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "issues/" + id + ".json" + "?key=" + config_redmine.apiKey;
      let updateIssue = this.updateIssue(updateIssueDto);
      this.httpService.put(url, updateIssue).subscribe((res) => {
        resolve(true);
      }, (err) => {
        reject(err);
      });
    });
  }

  remove(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "issues/" + id + ".json" + "?key=" + config_redmine.apiKey;
      this.httpService.delete(url).subscribe((res) => {
        resolve(true);
      }, (err) => {
        reject(err);
      });
    });
  }

  createIssue(createIssueDto: CreateIssueDto) {
    return {
      issue: {
        ...createIssueDto
      }
    }
  }

  updateIssue(updateIssueDto: UpdateIssueDto) {
    return {
      issue: {
        ...updateIssueDto
      }
    }
  }

}
