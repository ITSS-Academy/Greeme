import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthAction } from 'src/app/ngrx/actions/auth.action';
import { AuthState } from 'src/app/ngrx/states/auth.state';
import { UserState } from 'src/app/ngrx/states/user.state';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-narbar',
  templateUrl: './narbar.component.html',
  styleUrls: ['./narbar.component.scss'],
})
export class NarbarComponent {
  value: string | undefined;
  avatar: string | undefined;
  constructor(
    private store: Store<{
      user: UserState
    }>,
    private router :Router,
  ) {
    this.store.select((state) => state.user.user).subscribe((user) => {
      if (user) {
        this.avatar = '';
      }
    });
  }

  menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu?.classList.toggle('active');
  }


  gotToPageProfile() {
    this.router.navigate(['/profile']);
  }

  async logOut(){
    this.store.dispatch(AuthAction.logout());
  }


}
