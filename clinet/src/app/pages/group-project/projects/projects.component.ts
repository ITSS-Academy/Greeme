import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TreeNode } from 'primeng/api';
import { Project } from 'src/app/models/project.model';
import { ProjectAction } from 'src/app/ngrx/actions/project.action ';
import { ProjectState } from 'src/app/ngrx/states/project.state';
import { ProjectService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: TreeNode<Project>[] = [];

  isLoading: boolean = false;
  constructor(
    private projectListService: ProjectService,
    public router: Router,
    private store: Store<{
      project: ProjectState
    }>,
  ) {
    // this.store.select((state) => state.project.loading).subscribe((loading) => {
    //   this.isLoading = loading;
    // });
    this.store.dispatch(ProjectAction.getProjects());
    this.store.select((state) => state.project.projects).subscribe({
      next: (projects) => {
        console.log(projects);
        this.projectListService.getProjectsData(projects).then((data) => {
          this.projects = data;
        });
      }
    });

    // this.store.select((state) => state.project.error).subscribe((error) => {
    //   if (error) {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Login Failed',
    //       detail: 'Username or Password is incorrect',
    //     });
    //   }
    // });
  };

  ngOnInit(): void {

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
    this.router.navigate(['projects/new']);
  }

  navigateToDetailProject(id: any) {
    this.router.navigate(['/projects/' + id]);
    this.store.dispatch(ProjectAction.getProject({ id: id }));
  }
}
