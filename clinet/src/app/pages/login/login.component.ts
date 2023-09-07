import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthAction } from 'src/app/ngrx/actions/auth.action';
import { AuthState } from 'src/app/ngrx/states/auth.state';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {
  myForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),
    ]),
  });

  isLoading: boolean = false;
  constructor(public router: Router, private authService: AuthService, private messageService: MessageService,
    private store: Store<{
      auth: AuthState
    }>,
  ) {

    this.store.select((state) => state.auth.loading).subscribe((loading) => {
      this.isLoading = loading;
    });

    this.store.select((state) => state.auth.isLogin).subscribe((isLogin) => {
      if (isLogin) {
        this.router.navigate(['/']);
      }
    });

    this.store.select((state) => state.auth.error).subscribe((error) => {
      if (error) {
        this.messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Username or Password is incorrect',
        });
      }
    });
  };

  login() {

    this.store.dispatch(AuthAction.login({ username: this.myForm.value.user, password: this.myForm.value.password }));
  }

  register() {
    this.router.navigate(['/register']);
  }

  loginWithGoogle() {
    this.store.dispatch(AuthAction.loginGoogle());
  }
}
