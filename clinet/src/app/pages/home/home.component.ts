import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { SchedulerEvent } from 'smart-webcomponents-angular';
import { SchedulerComponent } from 'smart-webcomponents-angular/scheduler';
import { AuthState } from 'src/app/ngrx/states/auth.state';
import { AuthService } from 'src/app/services/auth.service';
import Project from 'src/assets/datas/Projects.json'

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
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  project = Project;

  completionPercentage: number = 50;

  @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

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
          backgroundColor: '#E67C73'
        }, {
          label: 'New Brochures',
          dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
          dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
          backgroundColor: '#8E24AA'
        }, {
          label: 'Brochure Design Review',
          dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
          dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
          backgroundColor: '#039BE5'
        }
      ];

    return data
  })();

  headerDatePosition: string = 'far';

  headerViewPosition: string = 'near';

  scrollButtonsPosition: string = 'near';

  getProgressBarColor(progress: number): string {
    const hue = Math.round(120 * progress / 100); // Calculate hue based on progress
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


  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {
    // init code.
  }

}
