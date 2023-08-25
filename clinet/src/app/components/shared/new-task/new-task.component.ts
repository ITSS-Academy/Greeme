import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent {
  piority: any[] = [];
  selectedPiority: any[] = [];

  checked: boolean = false;
  selected: any[] = [];
  memProject: any[] = [];
}
