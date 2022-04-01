import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-record-gauge-chart',
  template: `<div id="record_gauge_chart" ></div>`,
  styles:[`#record_gauge_chart { width:525px;height:150px;}`]
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
        radius:'50%',                               /*count 相当于容器宽高最小值的百分比*/
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
            color:'#E73851',
          }
        },
        axisLine: {
          lineStyle: {
            width: 5
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
          fontSize: 20,
          color: '#E73851',
          formatter: '{value}%'
        },
         center: ['50%', '25%'],
        datasetIndex: 1
      },
      {  type: 'gauge',
       radius:'50%',
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
          lineStyle: {
            width: 5
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
          fontSize: 20,
          color: '#D1B55D',
          formatter: '{value}%'
        },
        center: ['70%', '25%'],
        datasetIndex: 2,
        
      },
      {
         type: 'gauge',
          radius:'50%',
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
          lineStyle: {
            width: 5
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
          color:'#ffffff',
        },
        detail: {
          width: 80,
          height: 68,
          fontSize: 20,
          color: '#80C9C2',
          formatter: '{value}%'
        },
        center: ['90%', '25%'],
        datasetIndex: 3
      },
    ]
  };
  gaguechart.setOption(gaguechartOption);
}
}
