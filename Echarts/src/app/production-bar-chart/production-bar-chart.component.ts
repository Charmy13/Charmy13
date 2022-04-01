import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-production-bar-chart',
  template: `<div id="production_bar_chart"></div>`,
  styles: [`#production_bar_chart { width:545px;height:160px;}`]
})
export class ProductionBarChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initCharts();
  }
  initCharts() {
    const series_datas = [
      { value: 617, itemStyle: { color: '#10B9F8' } },
      { value: 128, itemStyle: { color: '#FF6A6A' } },
      { value: 25, itemStyle: { color: '#90ED7D' } },
      { value: 4, itemStyle: { color: '#E99B5B' } },
    ];
    const xAxis_datas = ['自动执行', '触发异常', '新插入', '其他'];
    const ec = echarts as any;
    let barChart = ec.init(document.getElementById('production_bar_chart'));
    window.onresize=function(){
       barChart.resize();//默认取dom（'容器'）宽高
     //  barChart.resize({width:800,height:400});//
      }
    
    let barChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {/*直角坐标系大小*/
        width: '500', /*和容器大小(不如)有区别*/
        height: '100',
        top:'20%',
        left:'9%',
        containLabel: true,
        //show:true,
      },
      xAxis: [
        {
          type: 'category',
          data: xAxis_datas,
          axisLabel:{
            color:'#ffffff',
          },
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 800,                   /*count*/
          interval: 200,
          splitLine: {
            show: true,
          },
         axisLabel:{
           color:'#ffffff',
         }
        },
        {
          type: 'value',
          name: '业务量（条）',
          
          nameTextStyle: {
            width:'10px',
            align: 'right',
            color:'#ffffff',
          },
        },
      ],
      series: [
        {
          type: 'bar',
          barWidth: '20%',
          data: series_datas,
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            color: '#DEA532',
            fontWeight: 'bolder',
            /*fontSize:12,*/
            /*name:'Direct',*/
            /*bar阴影背景
  showBackground: true,
    backgroundStyle: {
      color: 'rgba(180, 180, 180, 0.2)'
    },*/
          },
        },
      ],
    };
  
  barChart.setOption(barChartOption);
  }
}
