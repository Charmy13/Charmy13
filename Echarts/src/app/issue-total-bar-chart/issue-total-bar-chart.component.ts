import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-issue-total-bar-chart',
  template: `<div id="issuetop5_bar_chart"></div>`,
  styles: [`#issuetop5_bar_chart { width:540px;height:200px;margin-bottom:-10px;}`]
})
export class IssueTotalBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts() {
  
const Icons = {
  
  first:'./src/assets/images/矢量智能对象(7).png',
  second:'/src/assets/images/矢量智能对象 拷贝 5.png',
  third: '/src/assets/images/矢量智能对象 拷贝 6.png',
  fourth:'/src/assets/images/矢量智能对象 拷贝 7.png',
  fifth:'/src/assets/images/矢量智能对象 拷贝 7.png',
};

//已排序的数据集
const datas = [
  { value: 224, name: '第一班组', itemStyle: { color: '#9E303F' } },
  { value: 153, name: '第二班组', itemStyle: { color: '#933C38' } },
  { value: 102, name: '第三班组', itemStyle: { color: '#9E303F' } },
  { value: 84, name: '第四班组', itemStyle: { color: '#936134' } },
  { value: 63, name: '第五班组', itemStyle: { color: '#937532' } }
];
const datasRoundup = [
  { value: '300', name: '第一班组' },
  { value: '300', name: '第二班组' },
  { value: '300', name: '第三班组' },
  { value: '300', name: '第四班组' },
  { value: '300', name: '第五班组' }
];
/*
const builderJson = {
  all: 300,
  charts: {
    第五班组: 63,
    第四班组: 84,
    第三班组: 102,
    第二班组: 153,
    第一班组: 224,
  },
  components: {
    geo: 2788,
    title: 9575,
    legend: 9400,
    tooltip: 9466,
    grid: 9266,
   
  },
  ie: 9743
};
*/
/*
const waterMarkText = 'ECHARTS';
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.height = 100;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.globalAlpha = 0.08;
ctx.font = '20px Microsoft Yahei';
ctx.translate(50, 50);
ctx.rotate(-Math.PI / 4);
ctx.fillText(waterMarkText, 0, 0);*/
const ec = echarts as any;
    let barchart = ec.init(document.getElementById('issuetop5_bar_chart'));
    let issuetop5_barchartOption = {
      title: [
        {
          text: '今日热门事项TOP5',
          left: '33%',
          top: '2%',
          textAlign: 'right',
          textStyle: {
            color: '#ffffff'
          }
        }
      ],
      grid: [
        {
          top: 50,
          width: '90%',
          height: '75%',
          bottom: '35%',
          left: 20,
          containLabel: true
        }
      ],
      tooltip: {},
      dataset: {}, //重新设置[category: '第一班组',value：'?']
    
      xAxis: [
        /*first charts*/
        {
          inverse: true,
          type: 'value',
    
          // max: builderJson.all,
          max: 300, //count //f{ return  向上取整as max,}
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        /*first charts*/
        {
          type: 'category',
          inverse: true,
          data: ['1', '2', '3', '4', '5'], //固定
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 120       /*count*/
          },
          splitLine: {
            show: false
          },
           rich: {                     //icon
            
            first: {
              height: 30,
              align: 'left',
              backgroundColor: {
                image: Icons.first
              }
            },
            second: {
              height: 40,
              align: 'center',
              backgroundColor: {
                image: Icons.second
              }
            },
            third: {
              height: 40,
              align: 'center',
              backgroundColor: {
                image: Icons.third
              }
            },
             fourth: {
              height: 40,
              align: 'center',
              backgroundColor: {
                image:Icons.fourth
              }},
               fifth: {
              height: 40,
              align: 'center',
              backgroundColor: {
                image: Icons.fifth
              }
          }
        }
        
        }
      ],
    
      //data: Object.keys(builderJson.charts),
    
      series: [
        {
          type: 'bar',
          z: 100,
          barWidth: 15,
          barGap: 12,
          //stack:'chart',
          // z: 3,
          /*  showBackground:true,
          backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },*/
          label: {
            formatter: '{c}',
            show: true,
            position: 'right',
            align: 'right'
          },
          labelLayout:{
            align:'right',
            dx:-10
          },
          data: datas
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#ffffff'
            }
          },
          label: {
            show: true,
            formatter: '{b}',
            position: 'left',
          },
          labelLayout:{
            verticalAlign:'middle',
            align:'right',
            dx:-43
          },
       /*   labelLayout(params) {
        return {
            x: params.rect.x + 10,
            y: params.rect.y + params.rect.height / 2,
            dx:
            verticalAlign: 'middle',
            align: 'left'
        }
    }
    */
          silent: true,
          barWidth: 15,
          barGap: '-100%',
          data: datasRoundup,
        }
    
        /*y轴类型不一致 ?*/
        /*{
          type: 'bar',
          stack: 'component',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            position: 'right',
            show: true
          },
          data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.components[key];
          })
        },
        {
          type: 'bar',
          stack: 'component',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            color: '#fffffff'
          },
          data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.all - builderJson.components[key];
          })
        },
       
       */
      ]};

barchart.setOption(issuetop5_barchartOption);
}
}
