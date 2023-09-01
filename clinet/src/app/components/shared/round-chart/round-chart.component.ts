import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-chart',
  templateUrl: './round-chart.component.html',
  styleUrls: ['./round-chart.component.scss']
})
export class RoundChartComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          datasets: [
              {
                  data: [75,25],
                  backgroundColor: ["orange", 
                                    "white"],
                  hoverBackgroundColor: ['yellow', 
                                        'black']
              }
          ]
      };


      this.options = {
          cutout: '80%',
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          }
      };
  }
}
