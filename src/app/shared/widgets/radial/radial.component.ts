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
        colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
        chart: {
            type: 'column',
            inverted: true,
            polar: true
        },
        title: {
            text: 'Total Applications'
        },
        tooltip: {
            outside: true
        },
        pane: {
            size: '85%',
            innerSize: '20%',
            endAngle: 270
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                align: 'right',
                useHTML: true,
                allowOverlap: true,
                step: 1,
                y: 3,
                style: {
                    fontSize: '13px'
                }
            },
            lineWidth: 0,
            categories: [
                'Norway <span class="f16"><span id="flag" class="flag no">' +
                '</span></span>',
                'United States <span class="f16"><span id="flag" class="flag us">' +
                '</span></span>',
                'Germany <span class="f16"><span id="flag" class="flag de">' +
                '</span></span>',
                'Canada <span class="f16"><span id="flag" class="flag ca">' +
                '</span></span>',
                'Austria <span class="f16"><span id="flag" class="flag at">' +
                '</span></span>'
            ]
        },
        yAxis: {
            crosshair: {
                enabled: true,
                color: '#333'
            },
            lineWidth: 0,
            tickInterval: 25,
            reversedStacks: false,
            endOnTick: true,
            showLastLabel: true
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                pointPadding: 0,
                groupPadding: 0.15
            }
        },
        credits:{
          enabled: false
        },
        exporting:{
          enabled: true
        },
        series: [{
            name: 'Male',
            data: [132, 105, 92, 73, 64]
        }, {
            name: 'Female',
            data: [125, 110, 86, 64, 81]
        }, {
            name: 'Others',
            data: [111, 90, 60, 62, 87]
        }]
    };
    HC_exporting(HighCharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }
}
