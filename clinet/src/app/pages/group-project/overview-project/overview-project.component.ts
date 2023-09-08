import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/menber.model';
import { MemberService } from 'src/app/services/mem-project.service';
import { ProjectService } from 'src/app/services/project-list.service';
import { Project } from '../../../models/project.model';
import { IssueService } from 'src/app/services/issue.service';
import { ProjectState } from 'src/app/ngrx/states/project.state';
import { Store } from '@ngrx/store';


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
  project!: Project;
  responsiveOptions: any[] = [];
  progress: number = 0;
  constructor(public memProjectService: MemberService,
    protected projectService: ProjectService,
    protected issueService: IssueService,
    private store: Store<{
      project: ProjectState
    }>,) {
    this.events = [
      { teamMember: 'Minh', status: 'Comment', date: '15/10/2020 10:30', icon: 'pi pi-chevron-right', color: "#0A7D56" },
      { teamMember: 'Wind', status: 'Edit', date: '15/10/2020 14:00', icon: 'pi pi-chevron-left', color: "#0A7D56" },
      { teamMember: 'Liam', status: 'Edit', date: '15/10/2020 16:15', icon: 'pi pi-circle-fill', color: "#0A7D56" },
      { teamMember: 'Bong', status: 'Edit', date: '15/10/2020 14:00', icon: 'pi pi-circle-fill', color: "#0A7D56" },
      { teamMember: 'Mr.Huan', status: 'Edit', date: '15/10/2020 16:15', icon: 'pi pi-circle-fill', color: "#0A7D56" },
      { teamMember: 'Mr.Huan', status: 'Create Project', date: '16/10/2020 10:00', icon: 'pi pi-circle-fill', color: "#0A7D56" }
    ];
    this.members = this.memProjectService.menbersProject;

    this.store.select((state) => state.project.projectCurrent).subscribe((data) => {
      if (data) {
          this.project = data;
          this.project.created_on = new Date(this.project.created_on).toLocaleDateString('en-GB');
          this.issueService.getProgressTastsInProject().then((data: number) => {
            this.progress = data;
        });
      }
    });

    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 5,
        numScroll: 5
      },
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }




  ngOnInit(): void {

  }

  getSeverity(status: number): string {
    switch (status) {
      case 1:
        return 'success';
        break;
      case 2:
        return 'info';
        break;
      // case 'delayed':
      //     return 'warning';
      //     break;
      case 0:
        return 'danger';
        break;
      default:
        return 'success';
        break;
    }
  }

  getProgressBarColor(progress: number): string {
    const hue = Math.round(120 * progress / 100); // Calculate hue based on progress
    return `hsl(${hue}, 100%, 45%)`;
  }
}
