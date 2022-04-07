import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-order-line-chart',
  template: `<div id="order_line_chart" style="width=535px;height:230px"></div>

    <!-- <div echarts [options]="chartOption" ></div>--> `,
  styleUrls: ['./order-line-chart.component.css'],
})
export class OrderlineChartComponent implements OnInit {
  //chartDom:any;
  //chartOption:EChartOption;//什么类型？写好的么？修改一部分？重构？
  //constructor() {
  //let chartDom =document.getElementById('order_line_chart');
  //}//构造函数
  
  constructor() {
    console.log(echarts);
  }
  ngOnInit() {
    this.initCharts();

    //echarts.init(this.chartDom).setOption(this.options)
  }
  initCharts() {
    const data=[{}];
    const ec = echarts as any;
    let linechart = ec.init(document.getElementById('order_line_chart'));
    let order_linechartOption = {
      title: {
        show: true,
        text: '2021年度订单统计分析',
        left:'center',/*距离容器左侧的宽度*/
        textStyle: {
          color: '#FFFFFF',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 17,
        },
      },
      grid: {
      
        width: '450',
        height: '130',
        top:'30%',
        left:'8%',

      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLabel:{
          show: true,
          color:'rgba(255, 255, 255, 0.7)',
         
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
      },

      yAxis:[ {
        type: 'value',
        position: 'left',   /*count*/
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.7)',
          fontStyle: 'normal',
          //fontWeight: 'lighter',
          //fontFamily: 'normal',
          align: 'left',
          verticalAlign: 'bottom',
        },
        axisLine: {
          show: true,
          color:'rgba(255, 255, 255, 0.7)'
        },
        interval: 1,
        min: 0,
        max: 5,              /*count*/
        axisLabel: {
          show: true,
          color:'rgba(255, 255, 255, 0.7)',
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color:'rgba(255, 255, 255, 0.3)'
          },
        },
      },
    {
    type:'value',
     name:'单位(万件)',            
     nameTextStyle:{
       align:'right',
       fontFamily:'Courier New',
       fontSize:12,
       color: 'rgba(255, 255, 255, 0.7)',
       
     }
    }
    ],
    
      series: [
        {
          data: [1.7, 2.1, 4.1, 2.8, 1.9, 1.1, 1.95, 2.1, 1.85],
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          lineStyle: {
            color: '#EA5514',
            width: 2,
            type: 'normal',
          },
          itemStyle: {
            borderWidth: 2,
            borderColor: '#EA5514',
            color: '#FFFFFF',
          },
        },
      ],
    };
    linechart.setOption(order_linechartOption);
  }
}

/*
    label：{
    formatter: [
            '{a|这段文本采用样式a}',
            '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
        ].join('\n'),
    
        rich: {
            a: {
                color: 'red',
                lineHeight: 10
            },
            b: {
                backgroundColor: {
                    image: 'xxx/xxx.jpg'
                },
                height: 40
            },
            x: {
                fontSize: 18,
                fontFamily: 'Microsoft YaHei',
                borderColor: '#449933',
                borderRadius: 4
            },
        }
           */

//可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：

//(index:number, value: string) => boolean

//interval vs splitNumber 前者是强制设置间隔，后者是预估值

//最小间隔和最大间隔
//minInterval
//maxInterval

//自动计算出最大值和最小值
/* 
      min: function (value) {
        return value.min - 20;
    }
    
    max:function(value){
      return value.max
    }

    }
  }
  
}
*/

/*
import {TitleComponent,GridComponent } from 'echarts/components';
import {LineChart} from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { EChartsOption } from 'echarts';
*/
//import { threadId } from 'worker_threads';
/*
echarts.use([
  TitleComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);
*/
