import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GetKanbanData } from 'src/app/models/kanban.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class KanbanComponent {
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
