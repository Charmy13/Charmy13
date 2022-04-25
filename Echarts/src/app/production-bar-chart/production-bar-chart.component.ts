import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-production-bar-chart',
  template: `<div id="production_bar_chart"></div>`,
  styles: [`#production_bar_chart { width:525px;height:180px; margin-top:-9px;}`]
})
export class ProductionBarChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initCharts();
  }
  initCharts() {
    const series_datas = [
      { value: 717,name:'自动执行', itemStyle: { color: '#10B9F8' } },
      { value: 635,name:'触发异常', itemStyle: { color: '#FF6A6A' } },
      { value: 555, name:'新插入',itemStyle: { color: '#90ED7D' } },
      { value: 436, name:'类目三',itemStyle: { color: '#920783' } },
      {value: 357,name:'类目四' ,itemStyle: { color: '#601986' }},
      {value:267,name:'类目五', itemStyle: { color: '#A48B78' }},
      {value: 490, name:'类目六',itemStyle: { color: '#A5C9E3' }},
      {value: 800, name:'其他',itemStyle: { color: '#E4D354' }},
     /* {value: 257,name:'类目七' ,itemStyle: { color: '#601986' }},
      {value:167,name:'类目八', itemStyle: { color: '#A48B78' }},
      {value: 90, name:'类目九',itemStyle: { color: '#A5C9E3' }},
      {value: 45, name:'类目十',itemStyle: { color: '#E4D354' }},*/

    ];
    const xAxis_datas = ['自动执行', '触发异常', '新插入','类目三','类目四','类目五','类目六','其他'];/*,'类目七','类目八','类目九','类目十'];*/
    const ec = echarts as any;
    let barChart = ec.init(document.getElementById('production_bar_chart'));
    window.onresize=function(){
       //默认取dom（'容器'）宽高
     //  barChart.resize({width:600,height:125});//
      }
    
    let barChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {/*直角坐标系大小*/
       width: '440', /*和容器大小(不如)有区别*/
       height: '130',
       top:'15%',
       left:'8%',
        containLabel: true,
        
      },
      xAxis: [
        {
          type: 'category',
          data:xAxis_datas,
          axisLabel:{
            color:'rgba(255,255,255,0.7)',
            nameTextStyle: {
              fontSize:12,             /* fontSize:12,*/
              fontFamily:'Microsoft YaHei',  
            },
            interval:0,
            margin:10,
          },
          axisLine:{
              lineStyle:{color:'rgba(255,255,255,0.7)'},
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
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
          name: '业务量（条）',
          nameGap:10,               
          splitArea:{
            show:false,
          },
          nameTextStyle: {
            fontSize:12,
            fontFamily:'Microsoft YaHei',  
            align: 'right',   
            color:'rgba(255,255,255,0.7)',
          },
        },
      ],
      series: [
        {
          type: 'bar',
          barWidth: '40%',   /*相当于一刻度单位的占比*ui:27px*/
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
