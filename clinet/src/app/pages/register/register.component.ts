import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AuthModel } from 'src/app/models/auth.model';
import { AuthAction } from 'src/app/ngrx/actions/auth.action';
import { AuthState } from 'src/app/ngrx/states/auth.state';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent {
  myForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),
    ]),
  });

  isLoading: boolean = false;
  constructor(public router: Router, private authService: AuthService,
    private store: Store<{
      auth: AuthState
    }>,
    private messageService: MessageService) {
    this.store.select((state) => state.auth.loading).subscribe((loading) => {
      this.isLoading = loading;
    });

  }

  register() {
    if (this.myForm.value.password !== this.myForm.value.confirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Register Failed',
        detail: 'Password and Confirm Password must be the same',
      });
    } else {
      let auth: AuthModel = {
        login: 'dfsdaf',
        firstname: 'asafsdaf',
        lastname: 'dsafafa',
        mail: 'asdfdas',
        password: 'sdafsaf',
      };
      this.store.dispatch(AuthAction.register({ auth: auth }));

      this.store.select((state) => state.auth.error).subscribe((error) => {
        if (error) {
          this.messageService.add({
            severity: 'error',
            summary: 'Register Failed',
            detail: error,
          })
        };
        if (!error || error != '') {
          this.messageService.add({
            severity: 'success',
            summary: 'Register Success',
          });
          // this.router.navigate(['/login']);
        }
      });
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  get user() {
    return this.myForm.get('user');
  }

  get name() {
    return this.myForm.get('name');
  }

  get password() {
    return this.myForm.get('password');
  }

  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }
}
