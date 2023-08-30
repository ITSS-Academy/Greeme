import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemTaskService } from 'src/app/services/mem-task.service';

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
  memTask: any[] = [];
  visible: boolean = false;

  constructor(private memTaskService: MemTaskService, public router: Router) {}

  ngOnInit() {
    this.memTaskService.getProducts().then((data) => {
      this.memTask = data;
    });
  }

  showDialog() {
    this.visible = true;
  }

  taskList() {
    this.router.navigate(['/tasklist']);
  }
}
