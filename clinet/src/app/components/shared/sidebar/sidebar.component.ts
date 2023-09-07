import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthAction } from 'src/app/ngrx/actions/auth.action';
import { AuthState } from 'src/app/ngrx/states/auth.state';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public router: Router,
    private authService: AuthService,
   private store: Store<{
     auth: AuthState
   }>,
 ) {
   this.store.select((state) => state.auth.isLogin).subscribe((isLogin) => {
     if (!isLogin) {
       this.router.navigate(['/login']);
     }
   });
 };
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

 async logOut(){
   this.store.dispatch(AuthAction.logout());
 }

}
