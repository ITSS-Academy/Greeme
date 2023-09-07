import { Component } from '@angular/core';

@Component({
  selector: 'app-narbar',
  templateUrl: './narbar.component.html',
  styleUrls: ['./narbar.component.scss'],
})
export class NarbarComponent {
  value: string | undefined;

  menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu?.classList.toggle('active');
  }
}
