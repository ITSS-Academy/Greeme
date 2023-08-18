import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss'],
})
export class RegisterformComponent {
  User: string | undefined;
  Name: string | undefined;
  Password: string | undefined;
  ConfirmPassword: string | undefined;

  constructor(public router: Router) {}

  login() {
    this.router.navigate(['/login']);
  }
}
