import { Injectable } from '@nestjs/common';
import { CreateIssueCategoryDto } from './dto/create-issue_category.dto';
import { UpdateIssueCategoryDto } from './dto/update-issue_category.dto';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';
import { IssueCategory } from './entities/issue_category.entity';

@Injectable()
export class IssueCategoryService {

  private urlAPI='';
  private url = config_redmine.url + "enumerations/issue_categorie" +this.urlAPI+ ".json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }



  create(createIssueCategoryDto: CreateIssueCategoryDto) {
    return 'This action adds a new issueCategory';
  }

  findAll(idProject:string):Promise<IssueCategory|any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "/projects/" + idProject + "/issue_categories.json" + "?key=" + config_redmine.apiKey;
      this.httpService.get(url).subscribe((res: any) => {
        resolve(res.data.issue_categories);
      }, (err) => {
        reject(err);
      });
    });
    
  }

  findOne(id: number) {
    return `This action returns a #${id} issueCategory`;
  }

  update(id: number, updateIssueCategoryDto: UpdateIssueCategoryDto) {
    return `This action updates a #${id} issueCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} issueCategory`;
  }
}
