import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GetKanbanData } from 'src/app/models/kanban.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
  @ViewChild('kanban', { read: KanbanComponent, static: false })
  kanban!: KanbanComponent;

  addNewButton = true;
  collapsible = true;
  dataSource = GetKanbanData();
  editable = true;
  taskActions = true;
  taskDue = true;
  taskProgress = true;
  users = [
    {
      id: 0,
      name: 'Andrew',
      image:
        'https://khoinguonsangtao.vn/wp-content/uploads/2022/06/avatar-anime-girl-toc-trang.jpg',
    },
    { id: 1, name: 'Anne', image: './../../../src/images/people/anne.png' },
    { id: 2, name: 'Janet', image: './../../../src/images/people/janet.png' },
    { id: 3, name: 'John', image: './../../../src/images/people/john.png' },
    { id: 4, name: 'Laura', image: './../../../src/images/people/laura.png' },
  ];
  columns = [
    { label: 'To do', dataField: 'toDo' },
    { label: 'In progress', dataField: 'inProgress' },
    { label: 'Done', dataField: 'done' },
    { label: 'Close', dataField: 'close' },
  ];
}
