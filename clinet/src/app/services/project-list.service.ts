import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  listProjects: Project[] = [
    {
      id: 1,
      name: 'Cafe',
      identifier: 'cafe',
      description:
        'Project name: Cafe-Shop\r\nStart date: 2023-07-06\r\nEnd date: 2023-08-06 ',
      status: 1,
      parent: null,
      child_project: [],
      is_public: false,
      inherit_members: false,
      enable_new_ticket_message: 1,
      new_ticket_message: null,
      created_on: '2023-07-05T13:30:28Z',
      updated_on: '2023-07-06T06:25:15Z',
    },
    {
      id: 2,
      name: 'Pet',
      identifier: 'pet',
      description: '',
      status: 2,
      parent: null,
      child_project: [],
      is_public: true,
      inherit_members: false,
      enable_new_ticket_message: 1,
      new_ticket_message: null,
      created_on: '2023-07-16T13:26:35Z',
      updated_on: '2023-07-16T13:26:35Z',
    },
    {
      id: 3,
      name: 'cat-cafe',
      identifier: 'cat-cafe',
      description: '',
      status: 1,
      parent: {
        id: 1,
        name: 'Cafe',
      },
      child_project: [
        {
          id: 1,
          name: 'Cafe',
        },
      ],
      is_public: false,
      inherit_members: true,
      enable_new_ticket_message: 1,
      new_ticket_message: null,
      created_on: '2023-08-02T09:22:24Z',
      updated_on: '2023-08-02T09:22:24Z',
    },
  ];

  idCurrentProject: string = '';
  constructor() {}

  getProductsData(): Project[] {
    this.listProjects.forEach((project) => {
      if (project.parent) {
        this.listProjects.forEach((project2) => {
          if (project2.id == project.parent?.id) {
            project2.child_project.push(project);
            this.listProjects.splice(this.listProjects.indexOf(project), 1);
          }
        });
      }
    });

    return this.listProjects;
  }
  getProducts() {
    return Promise.resolve(this.getProductsData());
  }

  getFileSystemNodesData() {
    return [
      {
        data: {
          id: 1,
          name: 'Applications',
          description: 'Review application meeting',
          manager: 'David',
          status: 1,
        },
        children: [
          {
            data: {
              id: 2,
              name: 'Angular',
              description: 'Learn how to use Angular',
              manager: 'Tom',
              status: 0,
            },

          },
          {
            data: {
              id: 3,
              name: 'Backend',
              description: 'Learn about backend',
              manager: 'Turtle',
              status: 1,
            },
          },
        ],
      },
      {
        data: {
          id: 4,
          name: 'App Mobile',
          description: 'Create app mobile',
          manager: 'Vue',
          status: 1,
        },
        children: [
          {
            data: {
              id: 5,
              name: 'feature',
              description: 'Features included in the app',
              manager: 'Karen',
              status: 1,
            },
          },
        ],
      },
    ];
  }
  getFilesystem() {
    return Promise.resolve(this.getFileSystemNodesData());
  }
}
