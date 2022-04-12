import { BoundElementProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-record-gauge-chart',
  template: `<div id="record_gauge_chart" ></div>`,
  styles:[`#record_gauge_chart { width:525px;height:115px;}`]
})
export class RecordGaugeChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initgaugeCharts();
  }
  initgaugeCharts(){
  const gaugeData = [
    {
      value: 88,
      name: '入库产品',
      title: {
        offsetCenter: ['0%', '34%'],   //圆心距离百分比
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '-12%']
      }
    }];
  const gaugeData2= [{
      value:11.5,
      name:'出库产品',
      title: {
        offsetCenter: ['0%', '34%'],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '-12%']
      }
    }];
  const gaugeData3=[{
       value:0.5,
      name:'调库产品',
      title: {
        offsetCenter: ['0%', '34%'],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '-12%']
      }
    }] ;
   
    const ec = echarts as any;
    let gaguechart = ec.init(document.getElementById('record_gauge_chart'));
    let gaguechartOption = {
    series: [
      {
        type: 'gauge',
        radius:'60%',             /*count 相当于容器宽高最小值的一半的百分比   能确定“垂直居中”的距离吗？*/
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
        axisLine: {    
          show:true, 
          roundCap:true,         /*是否成圆*/  
          lineStyle: {          /*仪表盘轴线*/
            width: 3.5,
            color:[[1,'rgba(255,255,255,0.05)']],
           
          }
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color:'#E73851',
           
          }
        },
       
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
         
        },
        data: gaugeData,
        title: {
          fontSize: 12,
          color:'#ffffff',
        },
        
        detail: {
          width: 80,
          height: 68,
          fontSize: 18,
          fontWeight:'bold',
          color: '#E73851',
          formatter: '{value}%',/*formatter:'{b}<br/>{d}'*/
        },
         center: ['50%', '30%'],
        datasetIndex: 1
      },
      {  type: 'gauge',
       radius:'60%',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color:'#D1B55D',
          }
        },
        axisLine: {    
          show:true, 
          roundCap:true,         /*是否成圆*/  
          lineStyle: {          /*仪表盘轴线*/
            width: 3.5,
            color:[[1,'rgba(255,255,255,0.05)']],
           
          }
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
         
        },
        data: gaugeData2,
        title: {
          fontSize:12,
          color:'#ffffff',
        },
      
        detail: {
          width: 80,
          height: 68,
          fontSize: 18,
          fontWeight:'bold',
          fontFamily:'Microsoft YaHei',
          color: '#D1B55D',
          formatter: '{value}%'
        },
        center: ['70%', '30%'],
        datasetIndex: 2,
        
      },
      {
         type: 'gauge',
          radius:'60%',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color:'#80C9C2',
          }
        },
        axisLine: {    
          show:true, 
          roundCap:true,         /*是否成圆*/  
          lineStyle: {          /*仪表盘轴线*/
            width: 3.5,
            color:[[1,'rgba(255,255,255,0.05)']],
           
          }
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
         
        },
        data: gaugeData3,
        title: {
          fontSize: 12,
          fontFamily:'Microsoft YaHei',
          color:'#ffffff',
        },
        detail: {
          width: 80,
          height: 68,
          fontSize: 18,
          fontWeight:'bold',
          color: '#80C9C2',
          formatter: '{value}%'
        },
        center: ['90%', '30%'],
        datasetIndex: 3
      },
    ]
  };
  gaguechart.setOption(gaguechartOption);
}
}
