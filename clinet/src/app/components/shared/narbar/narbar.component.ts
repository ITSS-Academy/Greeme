import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthAction } from 'src/app/ngrx/actions/auth.action';
import { AuthState } from 'src/app/ngrx/states/auth.state';
import { ProfileState } from 'src/app/ngrx/states/profile.state';
import { UserState } from 'src/app/ngrx/states/user.state';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-narbar',
  templateUrl: './narbar.component.html',
  styleUrls: ['./narbar.component.scss'],
})
export class NarbarComponent {
  value: string | undefined;
  avatar: string = "";
  constructor(
    private store: Store<{
      user: UserState,
      profile:ProfileState
    }>,
    private router :Router,
  ) {
    this.store.select((state) => state.profile.profileCurrent).subscribe((profile) => {
      if (profile) {
        this.avatar = profile.avatar;
        console.log(this.avatar);
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
