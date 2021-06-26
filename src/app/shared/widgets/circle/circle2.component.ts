import { Component, OnInit } from '@angular/core';
import { ApexNonAxisChartSeries, ApexStroke, ApexTitleSubtitle } from 'ng-apexcharts';
import { ApexPlotOptions } from 'ng-apexcharts';
import { ApexChart } from 'ng-apexcharts';

@Component({
  selector: 'app-widget-circle2',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class Circle2Component implements OnInit {
  
  chartOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: any;
    plotOptions: ApexPlotOptions;
    stroke: ApexStroke;
    title:ApexTitleSubtitle
    subtitle:ApexTitleSubtitle
  };


  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        height: 160,
        width:320,
        type: "radialBar",
        toolbar:{
          show:true,
        }
      },
      
      series: [65],
      title: {
        text: 'ShortListed Candidates',
        align: 'left',
        margin: 10,
        offsetX: -1,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '18px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  'white'
        },
        
    },
    subtitle: {
      text: '#4545',
      align: 'left',
      margin: 10,
      offsetX: -1,
      offsetY: 95,
      floating: false,
      style: {
        fontSize:  '25px',
        fontWeight:  'normal',
        fontFamily:  undefined,
        color:  'white'
      },
  },
      
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 12,
            size: "60%"
          },
          offsetX:90,
          offsetY:-30,
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: "white",
              fontSize: "15px",
              offsetY:8,
              show: true
            }
          }
        }
      },
    
      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"]
    };
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }

}
