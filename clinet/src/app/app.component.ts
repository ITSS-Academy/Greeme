import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'clinet';
  @ViewChild('bodyMain') bodyMain!: ElementRef<HTMLDivElement>;
  constructor(protected authService :AuthService){}
  ngAfterViewChecked(): void {
    if(this.authService.isAuthPage){
      this.bodyMain.nativeElement.style.marginTop = "0px";
      this.bodyMain.nativeElement.style.marginLeft = '0px';
    }
  }

  items: MenuItem[] = [
          {
              icon: 'pi pi-pencil',
          },
          {
              icon: 'pi pi-refresh',
          },
          {
              icon: 'pi pi-trash',
          },
          {
              icon: 'pi pi-upload',
              // routerLink: ['/fileupload']
          },
          {
              icon: 'pi pi-external-link',
              // target:'_blank',
              // url: 'http://angular.io'
          }
      ];
}
