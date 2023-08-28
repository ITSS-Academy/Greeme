import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
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
          name: 'Applications',
          description: 'Review application meeting',
          manager: 'David',
          status: 1,
        },
        children: [
          {
            data: {
              name: 'Angular',
              description: 'Learn how to use Angular',
              manager: 'Tom',
              status: 0,
            },
            children: [
              {
                data: {
                  name: 'angular.app',
                  description: 'Review angular application',
                  manager: 'Tom',
                  status: 2,
                },
              },
              {
                data: {
                  name: 'Component',
                  description: 'review component',
                  manager: 'David',
                  status: 1,
                },
              },
              {
                data: {
                  name: 'Service',
                  description: 'How to use service',
                  manager: 'David',
                  status: 1,
                },
              },
            ],
          },
          {
            data: {
              name: 'Backend',
              description: 'Learn about backend',
              manager: 'Turtle',
              status: 1,
            },
          },
          {
            data: {
              name: 'Nest.JS',
              description: 'Learn how to use Nest.JS',
              manager: 'Jerry',
              status: 1,
            },
          },
        ],
      },
      {
        data: {
          name: 'Cloud',
          description: 'Learn about save data in cloud',
          manager: 'Sara',
        },
        children: [
          {
            data: {
              name: 'firebase',
              description: 'Review firebase',
              manager: 'Sara',
            },
          },
          {
            data: {
              name: 'MongoDB',
              description: 'Review MongoDB',
              manager: 'Susan',
            },
          },
        ],
      },
      {
        data: {
          name: 'App Mobile',
          description: 'Create app mobile',
          manager: 'Vue',
          status: 1,
        },
        children: [
          {
            data: {
              name: 'feature',
              description: 'Features included in the app',
              manager: 'Karen',
              status: 1,
            },
          },
          {
            data: {
              name: 'library',
              description: 'Libraries using in the app',
              manager: 'Koty',
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
