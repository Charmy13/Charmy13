import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-production-bar-chart',
  template: `<div id="production_bar_chart"></div>`,
  styles: [`#production_bar_chart { width:525px;height:170px;}`]
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
        width: '420', /*和容器大小(不如)有区别*/
        height: '130',
        top:'15%',
        left:'10%',
        right:'10%',
        containLabel: true,
        
      },
      xAxis: [
        {
          type: 'category',
          data: xAxis_datas,
          axisLabel:{
            color:'rgba(255,255,255,0.7)',
          },
          axisLine:{
              lineStyle:{color:'rgba(255,255,255,0.7)'},
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
          splitNumber:200,
          splitArea:{
            show:true,
            areaStyle:{
              color:['rgba(255,255,255,0)','rgba(255,255,255,0.05)']
            },
             
          },
          splitLine: {
            show: true,
            lineStyle:{
              color:'rgba(255,255,255,0.3)',
            }
          },
          
         axisLabel:{
           color:'#ffffff',
           margin:13,           /*刻度标签与轴线之间的而距离*/
         }
        },
        {
          /*type:'value',*/
          name: '业务量（ 条 ）',
          nameGap:13,               
          splitArea:{
            show:false,
          },
          nameTextStyle: {
            fontSize:'12px',
            fontFamily:'Courier New',  /*？*/
            align: 'right',   
            color:'rgba(255,255,255,0.7)',
          },
        },
      ],
      series: [
        {
          type: 'bar',
          barWidth: '27%',   /*相当于一刻度单位的占比*ui:27px*/
          data: series_datas,
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            color: '#DEA532',
            fontWeight: 'bolder',
           
          },
        },
      ],
    };
  
  barChart.setOption(barChartOption);
  }
}
