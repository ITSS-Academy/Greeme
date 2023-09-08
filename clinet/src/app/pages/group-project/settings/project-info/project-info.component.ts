import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Project } from 'src/app/models/project.model';
import { ProjectAction } from 'src/app/ngrx/actions/project.action ';
import { ProjectState } from 'src/app/ngrx/states/project.state';
import { MemberService } from 'src/app/services/mem-project.service';
import { ProjectService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent {
  checked: boolean = false;
  selected: any[] = [];
  memProject: any[] = [];
  visible: boolean = false;

  projects: Project[] = [];
  isLoading: boolean = false;
  selectedSubject: number = 0;

  constructor(
    private projectListService: ProjectService,
    public router: Router,
    private memProjectService: MemberService,
    private store: Store<{
      project: ProjectState;
    }>
  ) {
    this.store.dispatch(ProjectAction.getProjects());
    this.store
      .select((state) => state.project.projects)
      .subscribe({
        next: (projects) => {
          this.projects = projects;
        },
      });

    this.store
      .select((state) => state.project.loading)
      .subscribe((loading) => {
        this.isLoading = loading;
      });
  }

  ngOnInit() {
    this.memProject = this.memProjectService.menbersProject;
  }

  newProject: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    identifier: new FormControl(''),
    homepage: new FormControl(''),
    projectOwner: new FormControl(''),
    public: new FormControl(''),
  });

  modulesChecked: any[] = [
    {
      title: 'Gantt',
      key: 'gantt',
    },
    {
      title: 'Kanban Board',
      key: 'kanban_board',
    },
    {
      title: 'Task Tracking',
      key: 'Task Tracking',
    },

    {
      title: 'Calendar',
      key: 'Calendar',
    },
    {
      title: 'News',
      key: 'news',
    },
    {
      title: 'History',
      key: 'history',
    },
  ];

  trackerChecked: any[] = [
    {
      title: 'Bug',

      key: 'Bug',
    },
    {
      title: 'Issue',
      key: 'Issue',
    },
    {
      title: 'Deliverable',
      key: 'Deliverable',
    },
    {
      title: 'Task',
      key: 'Task',
    },
    {
      title: 'Ticket',
      key: 'Ticket',
    },
    {
      title: 'User Story',
      key: 'User Story',
    },
  ];

  cancel() {
    this.router.navigate(['/projectlist']);
  }

  showDialog() {
    this.visible = true;
  }

  handleCheckboxChange(event: any) {
    const product = event.value;
    console.log('Checkbox clicked:', product);
  }

  getSelectedValue(event: any) {
    this.selectedSubject = event.target.value;
  }
}
