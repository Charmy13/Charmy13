import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';


@Component({
  selector: 'app-issue-total-bar-chart',
  template: `<div id="issuetotal_bar_chart"></div>`,
  styles: [`#issuetotal_bar_chart { width:535px;height:200px;}`]
})
export class IssueTotalBarChartComponent implements OnInit {
  dataset:any;
  //private httpClient:HttpClient
  constructor(private httpClient:HttpClient) {
    this.httpClient.get('assets/json/issue_total_barchart.json')
    .subscribe(
      data => { 
      console.log('data....',data);
      console.log('datajson....',JSON.stringify(data));
      this.dataset=data;
    })
   }
  ngOnInit(): void {
    this.initCharts();
  }
initCharts() {
const ec = echarts as any;
  let barchart = ec.init(document.getElementById('issuetotal_bar_chart'));
  let issuetotal_barchartOption ={
  title: {
    text: '累计热门事项',
    left: '4%',
    textStyle:{
      color: 'rgba(255,255,255,0.8 )',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 18,
      fontFamily:'Microsoft Yahei'
    }
  },
  grid: 
    {
     width: 475,
     height:145,
     top:'25%',
     left:'5%',
     containLabel: true
   },
  xAxis: {
    type:'category', //default:dataset中的第一列 数据类型
    data: ['第一班组','第二班组','第三班组','第四班组','第五班组'],
    axisTick: {
      show:false,
    },
    axisLine: {
      show: true,
    },
    axisLabel:{
      color:'rgba(255,255,255,0.7)',
      nameTextStyle: {
        fontSize:12,
        fontFamily:'Microsoft YaHei',  
      },
      margin:10,
      
    }
  },
  yAxis: [
    {//数值轴
    type:'value',
    axisLine: {
      show: false,
    },
    axisTick: {
      show:false,
    },
    axisLabel: {
      color: 'rgba(255,255,255,0.6)',
    },
    interval:1,
    min:0,
    max:4,                 //count
    splitLine:{
      show:true,
      lineStyle: {
        type: [3,5],  /*dash Array*/
        color:'rgba(255,255,255,0.2)'
      },
    }
  },
  { //样式轴
    type:'value',
    name:'单位（万件）',
    nameGap:8,
    nameTextStyle:{
      align:'right',
      fontFamily:'Microsoft Yahei',
      fontSize:12,
      color: 'rgba(255, 255, 255, 0.7)',
    }
  }
],
  series: [
    {
      type: 'bar',
      barWidth:30,
      itemStyle: {
        color: new ec.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#49AC73' },
          { offset: 0.5, color: '#36A69A' },
          { offset: 1, color: '#1C9ED0 ' }
        ])
      },
      data: this.dataset,
    }
  ]

}

barchart.setOption(issuetotal_barchartOption);
}
}
