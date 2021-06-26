import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.scss']
})
export class RadialComponent implements OnInit {

  chartOptions: {};
  Highcharts = HighCharts;
 
  constructor() { }

  ngOnInit() {
      this.chartOptions =  {
        // colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
        chart: {
            height:360,
            type: 'bar',
            backgroundColor:'#111525',
            borderRadius:8,
        },
        
        title: {
            text: 'Total Applications',
            style: {
              color: 'white',
              fontWeight: 'bold'
          }
        },
        legend:{
          enabled:false,
        },
        yAxis:{
            visible:false,
        },
        xAxis: {
            // lineColor:"fff",
            categories:[
                'Total Applications',
                'Recived Applications',
                'Rejected',
                'Selected',
                'Referals',
            ],
            labels: {
              style: {
                color: 'white',
                fontWeight:"bold",
              }
            }
        },
        plotOptions: {
            series: {
                stacking:'percent',
                borderRadius:5
            } as any,
        },
        credits:{
          enabled: false
        },
        exporting:{
          enabled: true
        },
        series: [
            {
                type:'bar',
                // color:'',
                data:[1,10,40,45,95]
            },
            {
              type:'bar',
              color:'blue',
              data:[10,20,30,40,50]

            }
        ]
    };
    HC_exporting(HighCharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }
}
