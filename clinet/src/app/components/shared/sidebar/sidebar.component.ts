import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public router: Router) {}
  public index = 0;
  public options: any[] = [
    { name: 'Home', icon: 'pi pi-home', route: '/' },
    { name: 'Projects', icon: 'pi pi-sitemap', route: '/projects' },
    { name: 'Administration', icon: 'pi pi-inbox', route: '/admin' },
    { name: 'About', icon: 'pi pi-question', route: '/about' },
  ];
  gotToPage(value: string) {
    this.router.navigate([value]);
  }
}
