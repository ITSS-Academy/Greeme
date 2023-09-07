import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/mem-project.service';

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

  visible: boolean = false;

  constructor(
    private memProjectService: MemberService,
    public router: Router
  ) { }

  async ngOnInit() {
    this.memProject = this.memProjectService.menbersProject;

    this.selectedMem = await this.getmemProjectData();
  }

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
    projectManager: new FormControl(''),
    projectOwner: new FormControl(''),
    public: new FormControl(''),
  });

  cancel() {
    this.router.navigate(['/projectlist']);
  }

  showDialog() {
    this.visible = true;
  }

  createNewProject() {
    console.log(this.newProject.value);
    console.log(this.selectedModule);
    console.log(this.selectedTracker);
    console.log(this.memProject);
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
}
