import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemTaskService } from 'src/app/services/mem-task.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/services/project-list.service';
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
  file: File | null = null;

  constructor(
    public router: Router,
    private fileUploadService: FileUploadService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {}

  taskForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    piority: new FormControl(''),
    status: new FormControl(''),
    tracker: new FormControl(''),
    assignee: new FormControl(''),
    startDate: new FormControl(''),
    dueDate: new FormControl(''),
    duration: new FormControl(0),
    estimate: new FormControl(0),
    tag: new FormControl(''),
  });

  taskList() {
    this.router.navigate(['/tasklist']);
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  createTask() {
    console.log(this.taskForm.value);
    console.log(this.file);
  }

  numberOnly(event: any, controlName: string): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    const currentValue = this.taskForm.get(controlName)?.value || '';

    const trimmedValue = currentValue.replace(/^0+/, '');

    this.taskForm.get(controlName)?.setValue(trimmedValue);
    return true;
  }

  navigateToTaskList() {
    let url = '/projects/' + this.projectService.idCurrentProject + '/issues';
    this.router.navigateByUrl(url);
  }
}
