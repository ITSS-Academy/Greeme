import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  projectsAdmin: any[] = [
    {
      title: 'Projects',
      image: '../../../../assets/svgs/projectlogo.svg',
      link: '/admin/projects',
    },
    {
      title: 'Project template',
      image: '../../../../assets/svgs/projectlogo.svg',
      link: '/admin/projects',
    },
  ];

  tasksAdmin: any[] = [
    {
      title: 'Trackers',
      image: '../../../../assets/svgs/tracker.svg',
      link: '/trackers'
    },

    {
      title: 'Task Statuses',
      image: '../../../../assets/svgs/status.svg',
      link: '/task-statuses'
    },

    {
      title: 'Workflows',
      image: '../../../../assets/svgs/overflow.svg',
      link: '/workflow'
    },
  ];

  usersAdmin: any[] = [
    {
      title: 'Users',
      image: '../../../../assets/svgs/user.svg',
      link: '/users'
    },

    {
      title: 'Groups',
      image: '../../../../assets/svgs/group.svg',
      link: '/groups'
    },

    {
      title: 'User Types',
      image: '../../../../assets/svgs/type.svg',
      link: '/user-types'
    },

    {
      title: 'Invite',
      image: '../../../../assets/svgs/invite.svg',
      link: '/invite'
    },
  ];

  settingsAdmin: any[] = [
    {
      title: 'Templates',
      image: '../../../../assets/svgs/template.svg',
      link: '/templates'
    },

    {
      title: 'Custom Fields',
      image: '../../../../assets/svgs/field.svg',
      link: '/custom-fields'
    },

    {
      title: 'Categories',
      image: '../../../../assets/svgs/categories.svg',
      link: '/categories'
    },

    {
      title: 'Fillters',
      image: '../../../../assets/svgs/filter.svg',
      link: '/filters'
    },

    {
      title: 'Setting',
      image: '../../../../assets/svgs/setting.svg',
      link: '/setting'
    },
  ];

  constructor(private router:Router) { }
  navigationToPage(url:string){
    this.router.navigateByUrl(url);
  }
}
