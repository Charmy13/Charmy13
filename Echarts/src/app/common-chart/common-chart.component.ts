import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-common-chart',
  templateUrl: './common-chart.component.html',
  styleUrls: ['./common-chart.component.css']
})
export class CommonChartComponent implements OnInit {
  dataset:any;//json数据集
  title:any;//图表标题
  option:any;//图表 初始化option

  constructor(private httpClient :HttpClient) {
    
    
  }



   

  ngOnInit(): void {
    this.initCharts();
  }
  initCharts() {
  const ec = echarts as any; 
   //echarts.init(this.chartDom).setOption(this.options)
   
  }
}
