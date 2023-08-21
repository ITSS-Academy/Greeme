import { Component } from '@angular/core';
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


  project = Project;


}
