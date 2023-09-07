import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/menber.model';
import { MemberService } from 'src/app/services/mem-project.service';
import { ProjectService } from 'src/app/services/project-list.service';
import {Project} from '../../../models/project.model';
import { IssueService } from 'src/app/services/issue.service';


interface EventItem {
  teamMember?: string;
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}
@Component({
  selector: 'app-overview-project',
  templateUrl: './overview-project.component.html',
  styleUrls: ['./overview-project.component.scss']
})
export class OverviewProjectComponent implements OnInit {
  members: Member[] = [];
  events: EventItem[];
  project!:Project;
  responsiveOptions: any[]=[];
  progress: number = 0;
  constructor(public memProjectService: MemberService,
    protected projectService: ProjectService,
    protected issueService: IssueService) {
    this.events = [
      { teamMember: 'Minh',status: 'Comments', date: '29/8/2023 10:30', icon: 'pi pi-chevron-circle-right', color: "#0A7D56"},
      { teamMember: 'Wind',status: 'Edits', date: '15/8/2023 14:00', icon: 'pi pi-chevron-circle-left', color: "#0A7D56"},
      { teamMember: 'Liam',status: 'Edits', date: '15/8/2023 16:15', icon: 'pi pi-chevron-circle-right', color: "#0A7D56"},
      { teamMember: 'Bong',status: 'Edits', date: '14/8/2023 14:00', icon: 'pi pi-chevron-circle-left', color: "#0A7D56"},
      { teamMember: 'Mr.Huan',status: 'Edits', date: '13/8/2023 16:15', icon: 'pi pi-chevron-circle-right', color: "#0A7D56"},
      { teamMember: 'Mr.Huan',status: 'Creates Project', date: '29/7/2023 10:00', icon: 'pi pi-chevron-circle-left', color: "#0A7D56"}
  ];
  }




  ngOnInit(): void {

  }

  getSeverity(status: string):  string  {
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

  getProgressBarColor(progress: number): string {
    const hue = Math.round(120 * progress / 100); // Calculate hue based on progress
    return `hsl(${hue}, 100%, 45%)`;
  }
}
