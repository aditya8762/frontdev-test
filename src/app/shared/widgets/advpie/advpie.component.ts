import { Component, OnInit } from '@angular/core';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ApexPlotOptions, ApexFill, ApexStroke } from 'ng-apexcharts';

@Component({
  selector: 'app-widget-advpie',
  templateUrl: './advpie.component.html',
  styleUrls: ['./advpie.component.scss']
})
export class AdvpieComponent implements OnInit {

  chartOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    // responsive: ApexResponsive[];
    labels: any;
    plotOptions:ApexPlotOptions;
    fill:ApexFill;
    stroke:ApexStroke;
  };

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      series: [67],
      chart: {
      height: 350,
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        // startAngle: -180,
        // endAngle: 180,
        dataLabels: {
          name: {
            fontSize: '20px',
            color: 'white',
            offsetY: 120
          },
          value: {
            offsetY: 0,
            fontSize: '22px',
            color: 'white',
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 0
    },
    labels: [''],
    };
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }
}