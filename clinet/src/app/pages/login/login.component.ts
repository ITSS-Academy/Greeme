import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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

  constructor(
    public router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  get user() {
    return this.myForm.get('user');
  }

  get password() {
    return this.myForm.get('password');
  }

  async login() {
    await this.authService
      .login(this.myForm.value.user, this.myForm.value.password)
      .then((res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Login Success',
          detail: '',
        });

        this.authService.userInfo = res;

        this.router.navigate(['/']);
        this.authService.isAuthPage = false;
      })
      .catch((err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Username or Password is incorrect',
        });
      });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
