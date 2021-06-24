import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { RadialComponent } from './widgets/radial/radial.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CircleComponent } from './widgets/circle/circle.component';

import { BrowserModule } from "@angular/platform-browser";
import { NgApexchartsModule } from "ng-apexcharts";
import { PieComponent } from './widgets/pie/pie.component';
import { AreaComponent } from './widgets/area/area.component';
import { AdvpieComponent } from './widgets/advpie/advpie.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RadialComponent,
    CircleComponent,
    PieComponent,
    AreaComponent,
    AdvpieComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule, 
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    BrowserModule,
    NgApexchartsModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RadialComponent,
    CircleComponent,
    PieComponent,
    AreaComponent,
    AdvpieComponent
  ]
})
export class SharedModule { }
