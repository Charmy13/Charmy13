import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';

import { PiechartComponent } from './piechart/piechart.component';
import { OrderlineChartComponent } from './order-line-chart/order-line-chart.component';
import { ProductionBarChartComponent } from './production-bar-chart/production-bar-chart.component';

import { PeriodplanLineChartComponent } from './periodplan-line-chart/periodplan-line-chart.component';
import { IssueTOP5BarChartComponent } from './issue-top5-bar-chart/issue-top5-bar-chart.component';
import { IssueTotalBarChartComponent } from './issue-total-bar-chart/issue-total-bar-chart.component';
import { RecordGaugeChartComponent } from './record-gauge-chart/record-gauge-chart.component';
import { OrderListChartComponent } from './order-list-chart/order-list-chart.component';
import { EarthComponent } from './earth/earth.component';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    OrderlineChartComponent,
    ProductionBarChartComponent,
    PeriodplanLineChartComponent,
    IssueTOP5BarChartComponent,
    IssueTotalBarChartComponent,
    RecordGaugeChartComponent,
    OrderListChartComponent,
    EarthComponent,
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   NgxEchartsModule,
  /* NgxEchartsModule.forRoot(config:{
         echarts:()=>import('echarts','echarts-gl')
      })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
