import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clinet';
  @ViewChild('bodyMain') bodyMain!: ElementRef<HTMLDivElement>;
  constructor(protected authService :AuthService){
    if(this.authService.isAuthPage){
      this.bodyMain.nativeElement.style.marginTop = '0px';
      this.bodyMain.nativeElement.style.marginLeft = '0px';
    }
  }
  ngAfterViewInit() {

  }
}
