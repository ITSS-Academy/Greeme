import { Component, Input } from '@angular/core';
import Project from 'src/assets/json/Projects.json'

interface ProjectInterface {
  name: string;
  manager: string;
  D3eDate: string;
  status: string;
  Progress: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() completionPercentage: number = 0;

  getProgressBarColor(): string {
    const hue = (120 * (1 - this.completionPercentage / 100)).toFixed(0); // Calculate hue value
    return `hsl(${hue}, 100%, 50%)`;
  }
  project = Project;


}
