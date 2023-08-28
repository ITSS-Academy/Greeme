import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, TreeNode } from 'src/app/models/project.model';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss'],
})
export class ProjectlistComponent implements OnInit {
  projects: Project[] = [];
  files: TreeNode[] = [];

  constructor(
    private projectListService: ProjectListService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.projectListService.getFilesystem().then((data) => {
      this.files = data;
    });
  }

  typefield: any[] = [
    {
      title: 'Ongoing Projects',
      number: 3,
    },
    {
      title: 'Planned Projects',
      number: 2,
    },
    {
      title: 'Worked by me',
      number: 1,
    },
  ];

  getValue(status: number) {
    switch (status) {
      case 0:
        return 'Closed';
      case 1:
        return 'Active';
      case 2:
        return 'Archived';
      default:
        return 'Active';
    }
  }

  getValueColor(status: number) {
    switch (status) {
      case 0:
        return 'danger';
      case 1:
        return 'success';
      case 2:
        return 'info';
      default:
        return 'success';
    }
  }

  createproject() {
    this.router.navigate(['/createproject']);
  }
}
