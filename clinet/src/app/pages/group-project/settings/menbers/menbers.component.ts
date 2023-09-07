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
  contactForm: FormGroup = new FormGroup({});

  constructor(
    private memProjectService: MemberService,
    public router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.memProject= this.memProjectService.menbersProject

    this.contactForm = this.fb.group({
      role: [null],
    });
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
      title: 'CRM',
      key: 'CRM',
    },
    {
      title: 'Wiki',
      key: 'Wiki',
    },
    {
      title: 'Product',
      key: 'Product',
    },
    {
      title: 'Spent Time',
      key: 'Spent Time',
    },
    {
      title: 'Documents',
      key: 'Documents',
    },
    {
      title: 'Scrum Board',
      key: 'Scrum Board',
    },
    {
      title: 'Gantt',
      key: 'Gantt',
    },
    {
      title: 'News',
      key: 'News',
    },
    {
      title: 'Budgets',
      key: 'Budgets',
    },
    {
      title: 'Kanban Board',
      key: 'Kanban Board',
    },
    {
      title: 'Task Tracking',
      key: 'Task Tracking',
    },
    {
      title: 'Risks',
      key: 'Risks',
    },
    {
      title: 'Mind Maps',
      key: 'Mind Maps',
    },
    {
      title: 'Quick Planning',
      key: 'Quick Planning',
    },
    {
      title: 'Earned Values',
      key: 'Earned Values',
    },
    {
      title: 'Accounts',
      key: 'Accounts',
    },
    {
      title: 'Checklists',
      key: 'Checklists',
    },
    {
      title: 'Test Cases',
      key: 'Test Cases',
    },
    {
      title: 'Resources',
      key: 'Resources',
    },
    {
      title: 'Stakeholders',
      key: 'Stakeholders',
    },
    {
      title: 'DMS',
      key: 'DMS',
    },
    {
      title: 'Files',
      key: 'Files',
    },
    {
      title: 'Calendar',
      key: 'Calendar',
    },
    {
      title: 'Baselines',
      key: 'Baselines',
    },
    {
      title: 'Easy Web Hooks',
      key: 'Easy Web Hooks',
    },
  ];

  trackerChecked: any[] = [
    {
      title: 'Bug',
      key: 'b',
    },
    {
      title: 'Issue',
      key: 'i',
    },
    {
      title: 'Deliverable',
      key: 'd',
    },
    {
      title: 'Task',
      key: 't',
    },
    {
      title: 'Ticket',
      key: 'ti',
    },
    {
      title: 'User Story',
      key: 'us',
    },
  ];

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

  editMember(task: any[]) {
    this.selected = [task];
    this.visible = true;

  }

  submit() {
    console.log('Form Submitted');
    console.log(this.contactForm.value);
  }
}
