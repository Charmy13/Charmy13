import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';

import { PiechartComponent } from './piechart/piechart.component';
import { OrderlineChartComponent } from './order-line-chart/order-line-chart.component';
import { ProductionBarChartComponent } from './production-bar-chart/production-bar-chart.component';
import { OrderBarChartComponent } from './order-bar-chart/order-bar-chart.component';
import { PeriodplanLineChartComponent } from './periodplan-line-chart/periodplan-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    OrderlineChartComponent,
    ProductionBarChartComponent,
    OrderBarChartComponent,
    PeriodplanLineChartComponent,
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   NgxEchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
