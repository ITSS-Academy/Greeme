import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { SchedulerEvent } from 'smart-webcomponents-angular';
import { SchedulerComponent } from 'smart-webcomponents-angular/scheduler';
import { Profile } from 'src/app/models/profile.model';
import { AuthState } from 'src/app/ngrx/states/auth.state';
import { ProfileState } from 'src/app/ngrx/states/profile.state';
import { UserState } from 'src/app/ngrx/states/user.state';
import { AuthService } from 'src/app/services/auth.service';
import { TaskListService } from 'src/app/services/task-list.service';
import Project from 'src/assets/datas/Projects.json';

interface ProjectInterface {
  name: string;
  manager: string;
  DueDate: string;
  status: string;
  Progress: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  project = Project;

  completionPercentage: number = 50;

  tasks: any[] = [];

  @ViewChild('scheduler', { read: SchedulerComponent, static: false })
  scheduler!: SchedulerComponent;

  dataSource: SchedulerEvent[] = (() => {
    const today = new Date(),
      todayDate = today.getDate(),
      currentYear = today.getFullYear(),
      currentMonth = today.getMonth(),
      data = [
        {
          label: 'Google AdWords Strategy',
          dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
          dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
          backgroundColor: '#E67C73',
        },
        {
          label: 'New Brochures',
          dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
          dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
          backgroundColor: '#8E24AA',
        },
        {
          label: 'Brochure Design Review',
          dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
          dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
          backgroundColor: '#039BE5',
        },
      ];

    return data;
  })();

  task: any[] = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.',
    },
    {
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
    },
  ];

  headerDatePosition: string = 'far';

  headerViewPosition: string = 'near';

  scrollButtonsPosition: string = 'near';

  constructor(
    public router: Router,
    private taskListService: TaskListService,
    private authService: AuthService,
    private store: Store<{
      user: UserState;
      profile: ProfileState;
    }>
  ) {
    this.store
      .select((state) => state.user.user)
      .subscribe((userInfo) => {
        if (userInfo) {
          console.log(userInfo);
        }
      });

    this.store
      .select((state) => state.profile.profileCurrent)
      .subscribe((profileInfo) => {
        if (profileInfo) {
          console.log(profileInfo);
        }
      });
  }

  getProgressBarColor(progress: number): string {
    const hue = Math.round((120 * progress) / 100); // Calculate hue based on progress
    return `hsl(${hue}, 100%, 45%)`;
  }

  //   getProgressBarColor(progress:number): string {
  //     switch(true) {
  //       case progress >= 0 && progress < 25:
  //         return "var(--danger)";
  //         break
  //       case progress >= 25 && progress < 50:
  //         return 'var(--warning-dark)';
  //         break
  //       case progress>=50 && progress<75:
  //         return 'var(--warning)';
  //         break
  //       case progress>=75:
  //         return 'var(--secondary)';
  //         break
  //       default:
  //         return 'var(--info)';
  //         break
  //   }
  // }

  getSeverity(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
        break;
      case 'ongoing':
        return 'info';
        break;
      case 'delayed':
        return 'warning';
        break;
      case 'cancelled':
        return 'danger';
        break;
      default:
        return 'info';
        break;
    }
  }

  ngOnInit() {
    this.taskListService.getTask().then((data) => {
      this.tasks = data;
    });
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {
    // init code.
  }
}
