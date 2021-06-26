import { Component, OnInit } from '@angular/core';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ApexPlotOptions, ApexFill, ApexStroke, ApexTitleSubtitle } from 'ng-apexcharts';

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
    // fill:ApexFill;
    stroke:ApexStroke;
    title:ApexTitleSubtitle
    subtitle:ApexTitleSubtitle
  };

  constructor() { }

  ngOnInit() {this.chartOptions = {
    chart: {
      height: 180,
      width:320,
      type: "radialBar",
    },
    
    series: [75],
    title: {
      text: 'Total Applications',
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
    text: '#5454',
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