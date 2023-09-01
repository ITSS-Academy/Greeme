import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemTaskService } from 'src/app/services/mem-task.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
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

  constructor(
    private memTaskService: MemTaskService,
    public router: Router,
    private fileUploadService: FileUploadService
  ) {}

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

  fileToUpload: File | null = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  // Variable to store shortLink from api response
  shortLink: string = '';
  loading: boolean = false; // Flag variable
  file: File | null = null; // Variable to store file

  // On file Select
  onChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.file = inputElement.files[0];
    }
  }

  // OnClick of button Upload
  onUpload() {
    if (this.fileToUpload) {
      // Check if a file is selected
      this.loading = !this.loading;
      console.log(this.fileToUpload);
      this.fileUploadService
        .upload(this.fileToUpload)
        .subscribe((event: any) => {
          if (typeof event === 'object') {
            // Short link via API response
            this.shortLink = event.link;
            this.loading = false; // Flag variable
          }
        });
    } else {
      // Handle case where no file is selected
      // You can show a message to the user or perform some other action
      console.log('No file selected.');
    }
  }
}
