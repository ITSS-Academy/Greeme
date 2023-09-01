import { Component, Input } from '@angular/core';

@Component({
  selector: 'bar',
  template: `<div class="ex-2">
    <div class="progress-text">  
      {{progress}}/100
    </div>
    <div class="bar-wrapper">
    <div class="bar-progress" [ngStyle]="{'width': barWidth}">
        
      </div>
    </div>
  </div>`,
  styles: [
    `
    .ex-2{
      margin-top: 10px;
    }
    .progress-text{
      text-align: center;
      margin-bottom: 10px;
      color: #2788FF;
    }
    .bar-wrapper{
      width: 200px;
      background: rgb(234, 234, 234);
      margin: auto;
    }
    .bar-progress{
      background: #2788ff;
      height: 5px;
    }
    `,
  ],
})
export class BarComponent {
  @Input() progress: number = 0;

  get barWidth() {
    return this.progress + '%';
  }
}
