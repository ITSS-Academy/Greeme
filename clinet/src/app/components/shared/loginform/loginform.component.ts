import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent {
  value: string | undefined;

  constructor(public router: Router) {}

  register() {
    this.router.navigate(['/register']);
  }
}
