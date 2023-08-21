import { Component } from '@angular/core';

@Component({
  selector: 'app-adminservices',
  templateUrl: './adminservices.component.html',
  styleUrls: ['./adminservices.component.scss'],
})
export class AdminservicesComponent {
  projectsAdmin: any[] = [
    {
      title: 'Projects',
      image: '../../../../assets/svgs/projectlogo.svg',
    },
    {
      title: 'Project template',
      image: '../../../../assets/svgs/projectlogo.svg',
    },
  ];

  tasksAdmin: any[] = [
    {
      title: 'Trackers',
      image: '../../../../assets/svgs/tracker.svg',
    },

    {
      title: 'Task Statuses',
      image: '../../../../assets/svgs/status.svg',
    },

    {
      title: 'Workflows',
      image: '../../../../assets/svgs/overflow.svg',
    },
  ];

  usersAdmin: any[] = [
    {
      title: 'Users',
      image: '../../../../assets/svgs/user.svg',
    },

    {
      title: 'Groups',
      image: '../../../../assets/svgs/group.svg',
    },

    {
      title: 'User Types',
      image: '../../../../assets/svgs/type.svg',
    },

    {
      title: 'Invite',
      image: '../../../../assets/svgs/invite.svg',
    },
  ];

  settingsAdmin: any[] = [
    {
      title: 'Templates',
      image: '../../../../assets/svgs/template.svg',
    },

    {
      title: 'Custom Fields',
      image: '../../../../assets/svgs/field.svg',
    },

    {
      title: 'Categories',
      image: '../../../../assets/svgs/categories.svg',
    },

    {
      title: 'Fillters',
      image: '../../../../assets/svgs/filter.svg',
    },

    {
      title: 'Setting',
      image: '../../../../assets/svgs/setting.svg',
    },
  ];
}
