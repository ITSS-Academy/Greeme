import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/mem-project.service';

@Component({
  selector: 'app-menbers',
  templateUrl: './menbers.component.html',
  styleUrls: ['./menbers.component.scss'],
})
export class MenbersComponent {
  checked: boolean = false;
  selected: any[] = [];
  memProject: any[] = [];
  visible: boolean = false;
  selectedModule: any[] = [];
  selectedTracker: any[] = [];
  addMemDialog: boolean = false;
  contactForm: FormGroup = new FormGroup({});

  constructor(
    private memProjectService: MemberService,
    public router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.memProject = this.memProjectService.menbersProject;

    this.contactForm = this.fb.group({
      role: [null],
    });
  }

  roles = [
    {
      id: 1,
      name: 'Developer',
    },
    {
      id: 2,
      name: 'Manager',
    },
    {
      id: 3,
      name: 'Tester',
    },
    {
      id: 4,
      name: 'Reporter',
    },
    {
      id: 5,
      name: 'Guest',
    },
    {
      id: 6,
      name: 'Coder',
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

  editMember(task: any[]) {
    this.selected = [task];
    this.visible = true;
  }

  submit() {
    console.log('Form Submitted');
    console.log(this.contactForm.value);
  }

  showDialog() {
    this.addMemDialog = true;
  }

  addMember() {
    console.log(this.selectedModule);
    console.log(this.selectedTracker);
  }
}
