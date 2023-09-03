import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/mem-project.service';
import Project from 'src/assets/datas/Projects.json'


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
export class OverviewProjectComponent implements OnInit{
  members: any = [];
  events: EventItem[];
  project:any = Project[1];

  constructor(public memProjectService : MemberService) {
    this.events = [
      { teamMember: 'Minh',status: 'Comment', date: '15/10/2020 10:30', icon: 'pi pi-chevron-right', color: "#0A7D56"},
      { teamMember: 'Wind',status: 'Edit', date: '15/10/2020 14:00', icon: 'pi pi-chevron-left', color: "#0A7D56"},
      { teamMember: 'Liam',status: 'Edit', date: '15/10/2020 16:15', icon: 'pi pi-circle-fill', color: "#0A7D56"},
      { teamMember: 'Bong',status: 'Edit', date: '15/10/2020 14:00', icon: 'pi pi-circle-fill', color: "#0A7D56"},
      { teamMember: 'Mr.Huan',status: 'Edit', date: '15/10/2020 16:15', icon: 'pi pi-circle-fill', color: "#0A7D56"},
      { teamMember: 'Mr.Huan',status: 'Create Project', date: '16/10/2020 10:00', icon: 'pi pi-circle-fill', color: "#0A7D56"}
  ];
   }

  ngOnInit(): void {
    this.memProjectService.getProducts().then((data) => {
      this.members = data;
      console.log(this.members);
    });
  }


}
