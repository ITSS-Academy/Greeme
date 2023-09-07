import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { config_redmine } from 'src/redmine';
import { HttpService } from '@nestjs/axios';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  private url = config_redmine.url + "projects.json" + "?key=" + config_redmine.apiKey;
  constructor(
    private httpService: HttpService,
  ) { }

  create(createProjectDto: CreateProjectDto): Promise<Project|any> {
    return new Promise((resolve, reject) => {
      let newProject = this.createProject(createProjectDto);
      this.httpService.post(this.url, newProject).subscribe((res) => {
        resolve(res.data.project);
      }, (err) => {
        reject(err);
      });
    });
  }

  findAll():Promise<any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "projects.json?include=trackers,issue_categories,enabled_modules,time_entry_activities,issue_custom_fields"
      + "&key=" + config_redmine.apiKey;
      this.httpService.get(url).subscribe((res) => {
        resolve(res.data.projects);
      }, (err) => {
        reject(err);
      });
    });
    
  }

  findOne(id: number): Promise<Project|any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "projects/" + id + ".json?include=trackers,issue_categories,enabled_modules,time_entry_activities,issue_custom_fields" + "&key=" + config_redmine.apiKey;
      this.httpService.get(url).subscribe((res) => {
        resolve(res.data.project);
      }, (err) => {
        reject(err);
      });
    });
 
  }

  update(id: number, updateProjectDto: UpdateProjectDto): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "projects/" + id + ".json" + "?key=" + config_redmine.apiKey;
      let updateProject = this.updateProject(updateProjectDto);
      this.httpService.put(url, updateProject).subscribe((res) => {
        resolve(true);
      }, (err) => {
        reject(err);
      });
    });
  }

  remove(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = config_redmine.url + "projects/" + id + ".json" + "?key=" + config_redmine.apiKey;
      this.httpService.delete(url).subscribe((res) => {
        resolve(true);
      }, (err) => {
        reject(err);
      });
    });
    
  }

  createProject(createProjectDto: CreateProjectDto) {
    return {
      project: {
        ...createProjectDto
      }
    }
  }

  updateProject(updateProjectDto: UpdateProjectDto) {
    return {
      project: {
        ...updateProjectDto
      }
    }
  }
}
