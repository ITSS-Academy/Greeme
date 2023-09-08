import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Project, TreeNode } from 'src/app/models/project.model';
import { ProjectAction } from 'src/app/ngrx/actions/project.action ';
import { ProjectState } from 'src/app/ngrx/states/project.state';
import { ProjectService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent {
  checked: boolean = false;
  selectedModule: any[] = [];
  selectedTracker: any[] = [];
  memProject: any[] = [];
  selectedMem: any[] = [];
  projects: Project[] = [];
  isLoading: boolean = false;
  selectedSubject: number = 0;

  constructor(
    private projectListService: ProjectService,
    public router: Router,
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

  async ngOnInit() {}

  projectCustomFields: any[] = [
    {
      title: 'Product',
      key: 'Product',
      check: false,
    },
    {
      title: 'Country',
      key: 'Country',
      check: false,
    },
    {
      title: 'Department',
      key: 'Department',
      check: false,
    },
  ];

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

  public: string = '';

  newProject: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    identifier: new FormControl(''),
    homepage: new FormControl(''),
    projectOwner: new FormControl(''),
    public: new FormControl(''),
  });

  cancel() {
    this.router.navigate(['/projectlist']);
  }

  createNewProject() {
    console.log(this.selectedSubject);
  }

  addSelectedMember(member: any) {
    const selectedMemArray = this.newProject.get('selectedMem') as FormArray;
    selectedMemArray.push(new FormControl(member));
  }

  removeSelectedMember(index: number) {
    const selectedMemArray = this.newProject.get('selectedMem') as FormArray;
    selectedMemArray.removeAt(index);
  }

  handleCheckboxChange(product: any, index: number) {
    const selectedMemArray = this.newProject.get('selectedMem') as FormArray;

    if (selectedMemArray.at(index)?.value === product) {
      this.removeSelectedMember(index);
    } else {
      this.addSelectedMember(product);
    }
  }

  addMember() {
    console.log(this.selectedMem);
  }

  getmemProjectData() {
    return Promise.resolve(this.memProject);
  }

  getSelectedValue(event: any) {
    this.selectedSubject = event.target.value;
  }
}
