import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  public id: string="1";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id')!;
  }
}
