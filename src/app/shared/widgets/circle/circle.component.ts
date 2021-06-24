import { Component, OnInit } from '@angular/core';
import { ApexNonAxisChartSeries } from 'ng-apexcharts';
import { ApexPlotOptions } from 'ng-apexcharts';
import { ApexChart } from 'ng-apexcharts';

@Component({
  selector: 'app-widget-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  
  chartOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: any;
    plotOptions: ApexPlotOptions;
  };


  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      series: [70],
      chart: {
        height: 250,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
        
      },
      labels: ["70%"]
    };
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }

}
