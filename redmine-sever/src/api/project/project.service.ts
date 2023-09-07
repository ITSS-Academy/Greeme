import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  private urlAPI='';
  private url = config_redmine.url + "projects" +this.urlAPI+ ".json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }

  create(createProjectDto: CreateProjectDto): Promise<Project|any> {
    return new Promise((resolve, reject) => {
      this.httpService.post(this.url, createProjectDto).subscribe((res) => {
        resolve(res.data.project);
      }, (err) => {
        reject(err);
      });
    });
  }

  findAll():Promise<Project[]|any> {
    return new Promise((resolve, reject) => {
      this.httpService.get(this.url).subscribe((res) => {
        resolve(res.data.projects);
      }, (err) => {
        reject(err);
      });
    });
    
  }

  findOne(id: number): Promise<Project|any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "projects/" + id + ".json" + "?key=" + config_redmine.apiKey;
      this.httpService.get(url).subscribe((res) => {
        resolve(res.data.project);
      }, (err) => {
        reject(err);
      });
    });
 
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
