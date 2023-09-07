import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Tree } from 'smart-webcomponents-angular';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  listProjects: Project[] = [
    {
      "id": 1,
      "name": "Pet-Caffee",
      "identifier": "pet-caffee",
      "description": "",
      "status": 1,
      "is_public": true,
      "inherit_members": true,
      "trackers": [
        {
          "id": 1,
          "name": "Bug"
        },
        {
          "id": 2,
          "name": "CR (Feature)"
        },
        {
          "id": 3,
          "name": "Support"
        },
        {
          "id": 4,
          "name": "Task"
        },
        {
          "id": 5,
          "name": "Risk"
        },
        {
          "id": 6,
          "name": "Report"
        },
        {
          "id": 7,
          "name": "Issue"
        }
      ],
      "issue_categories": [
        {
          "id": 1,
          "name": "Bug UAT"
        }
      ],
      "time_entry_activities": [
        {
          "id": 8,
          "name": "Design"
        },
        {
          "id": 9,
          "name": "Development"
        }
      ],
      "enabled_modules": [
        {
          "id": 1,
          "name": "issue_tracking"
        },
        {
          "id": 2,
          "name": "time_tracking"
        },
        {
          "id": 3,
          "name": "news"
        },
        {
          "id": 4,
          "name": "documents"
        },
        {
          "id": 5,
          "name": "files"
        },
        {
          "id": 6,
          "name": "wiki"
        },
        {
          "id": 7,
          "name": "repository"
        },
        {
          "id": 8,
          "name": "boards"
        },
        {
          "id": 9,
          "name": "calendar"
        },
        {
          "id": 10,
          "name": "gantt"
        }
      ],
      "issue_custom_fields": [],
      "created_on": "2023-08-26T22:08:39Z",
      "updated_on": "2023-08-26T22:08:39Z"
    },
    {
      "id": 2,
      "name": "Cafe",
      "identifier": "cafe",
      "description": "",
      "parent": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "status": 1,
      "is_public": true,
      "inherit_members": true,
      "trackers": [
        {
          "id": 1,
          "name": "Bug"
        },
        {
          "id": 2,
          "name": "CR (Feature)"
        },
        {
          "id": 3,
          "name": "Support"
        },
        {
          "id": 4,
          "name": "Task"
        },
        {
          "id": 5,
          "name": "Risk"
        },
        {
          "id": 6,
          "name": "Report"
        },
        {
          "id": 7,
          "name": "Issue"
        }
      ],
      "issue_categories": [],
      "time_entry_activities": [
        {
          "id": 8,
          "name": "Design"
        },
        {
          "id": 9,
          "name": "Development"
        }
      ],
      "enabled_modules": [
        {
          "id": 11,
          "name": "issue_tracking"
        },
        {
          "id": 12,
          "name": "time_tracking"
        },
        {
          "id": 13,
          "name": "news"
        },
        {
          "id": 14,
          "name": "documents"
        },
        {
          "id": 15,
          "name": "files"
        },
        {
          "id": 16,
          "name": "wiki"
        },
        {
          "id": 17,
          "name": "repository"
        },
        {
          "id": 18,
          "name": "boards"
        },
        {
          "id": 19,
          "name": "calendar"
        },
        {
          "id": 20,
          "name": "gantt"
        }
      ],
      "issue_custom_fields": [],
      "created_on": "2023-08-27T12:54:57Z",
      "updated_on": "2023-08-27T12:54:57Z"
    }
  ];

  public baseURL: string = environment.baseURL + 'projects';

  treeNodes$:TreeNode<Project>[]= [];

  projectCurrent!: Project

  idCurrentProject: string = '';
  constructor(
    protected http: HttpClient
  ) { }

  getProjectsData(): Promise<TreeNode<Project>[]> {
    return new Promise((resolve, reject) => {
      let TreeNodes: TreeNode<Project>[] = [];
      this.listProjects.forEach((project) => {
        if (project.parent == undefined) {
          {
            let node: TreeNode<Project> = {}
            node.data = project;
            node.children = [];
            this.listProjects.forEach((child) => {
              if (child.parent != undefined) {
                if (child.parent.id == project.id) {
                  node.children?.push({ data: child });
                }
              }
            });
            TreeNodes.push(node);
          }
        }
      });
      resolve(TreeNodes);
    });
  }

  getProjectById(id: string): Observable<Project> {
    if (this.treeNodes$.length == 0) {
      this.getProjectsData().then((data) => {
        this.treeNodes$ = data;
      });
    }

    return new Observable((observer) => {
      this.listProjects.forEach((project) => {
        if (project.id.toString() == id) {
          observer.next(project);
        }
      });
    });
  }

  getAll(): Promise<Project[] | any> {
    return new Promise<Project[] | any>((resolve, reject) => {
      this.http.get(this.baseURL + '/', {
      }).subscribe({
        next: (data) => {
          resolve(data as Project[]);
        }, error: (err) => {
          reject(err);
        }

    });
  });
  }

  getOne(id: number): Promise<Project | any> {
    return new Promise<Project | any>((resolve, reject) => {
      this.http.get(this.baseURL + '/' + id, {
      }).subscribe({
        next: (data) => {
          resolve(data as Project);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  create(project: Project): Promise<Project | any> {
    return new Promise<Project | any>((resolve, reject) => {
      this.http.post(this.baseURL + '/', project).subscribe({
        next: (data) => {
          resolve(data as Project);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  update(project: Project): Promise<Project | any> {
    return new Promise<Project | any>((resolve, reject) => {
      this.http.put(this.baseURL + '/' + project.id, project).subscribe({
        next: (data) => {
          resolve(data);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  delete(id: number): Promise<Project | any> {
    return new Promise<Project | any>((resolve, reject) => {
      this.http.delete(this.baseURL + '/' + id, {
      }).subscribe({
        next: (data) => {
          resolve(data);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

}
