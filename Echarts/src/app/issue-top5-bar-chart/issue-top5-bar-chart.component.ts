import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-issue-top5-bar-chart',
  template: `<div id="issuetotal_bar_chart"></div>`,
  styles: [`#issuetotal_bar_chart { width:540px;height:200px;}`]
})
export class IssueTOP5BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCharts();
  }

  
initCharts() {

const datas=[
  {value:'1.8',name:'第一班组'},
  {value:'2.2',name:'第二班组'},
  {value:'3.4',name:'第三班组'},
  {value:'2.7',name:'第四班组'},
  {value:'1.8',name:'第五班组'},
]

const ec = echarts as any;
  let barchart = ec.init(document.getElementById('issuetotal_bar_chart'));
  let issuetotal_barchartOption ={
  title: {
    text: '累计热门事项',
    left: '3%',
    top:'10%',
    textStyle:{
      color:'#ffffff',
    }
  },
  grid: 
    {
     top:55,
     width: '90%',
     height:'70%',
     left: 15,
     containLabel: true
   },
  xAxis: {
    type:'category',
    data: ['第一班组','第二班组','第三班组','第四班组','第五班组'],
    axisTick: {
      show:false,
    },
    axisLine: {
      show: true,
    },
    axisLabel:{
      
        color:'#ffffff',
      
    }
  },
  yAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show:false
    },
    axisLabel: {
      color: '#ffffff',
    },
    interval:1,
    min:0,
    max:4,                 //count
    splitLine:{
      show:true,
      lineStyle: {
        type: 'dashed',
      },
    }
  },
  /*dataZoom: [
    {
      type: 'inside'
    }
  ],*/
  series: [
    {
      type: 'bar',
      barWidth:25,
      itemStyle: {
        color: new ec.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#49AC73' },
          { offset: 0.5, color: '#36A69A' },
          { offset: 1, color: '#1C9ED0 ' }
        ])
      },
   /*  emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
           { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6'},
          ])
        }
      },*/
      data: datas,
    }
  ]

}

barchart.setOption(issuetotal_barchartOption);
}
}
