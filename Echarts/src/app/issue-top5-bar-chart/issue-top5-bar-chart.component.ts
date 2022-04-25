import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'app-issue-top5-bar-chart',
  template: `<div id="issuetop5_bar_chart"></div>`,
  styles: [`#issuetop5_bar_chart { width:540px;height:180px;}`]
})
export class IssueTop5BarChartComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.initCharts();
  }

  initCharts() {
//已排序的数据集
const datas = [
  { value: 224, name: '第一班组', itemStyle: { color: '#9E303F' } },
  { value: 153, name: '第二班组', itemStyle: { color: '#933C38' } },
  { value: 102, name: '第三班组', itemStyle: { color: '#9E303F' } },
  { value: 84, name: '第四班组', itemStyle: { color: '#936134' } },
  { value: 63, name: '第五班组', itemStyle: { color: '#937532' } }
];

//计算最大值,四舍五入
//itemStyle

const datasRoundup = [
  { value: '250', name: '第一班组' },
  { value: '250', name: '第二班组' },
  { value: '250', name: '第三班组' },
  { value: '250', name: '第四班组' },
  { value: '250', name: '第五班组' }
];
/*


}
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
          left: '4%',
          textAlign: 'left',
          textStyle: {
            color: 'rgba(255,255,255,0.8)',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize:18,
            fontFamily:'Microsoft Yahei',
          }
        }
      ],
      grid: [
        {
          width:'475',
           height:'130',// height:'130',
          top:'20%',
          left:'5%',
          containLabel: true
        }
      ],
    //  params.value[params.encode.y[0]]
/*dataset:{
dimensions:['grade','group','production'],
source:[
  {grade:'1',group:'第一组',production:'722'},
  {grade:'2',group:'第二组',production:'234'},
  {grade:'3',group:'第三组',production:'233'},
  {grade:'4',group:'第四组',production:'344'},
  {grade:'5',group:'第五组',production:'34'},
]
  }*/
    
      xAxis: [
        /*first charts*/
        {
          inverse: true,
          type: 'value',
          max: 300, //count //f{ return  向上取整as max,}
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            nameTextStyle:{
              fontFamily:'Microsoft YaHei',
            }
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'category',
          inverse: true,
          data: [
            {
              value:'1',
             textStyle:{
              width:14,
              height:16, 
              align:'center',
              verticalAlign:'middle',
              fontSize:10,
              fontFamily:'Microsoft YaHei',
               backgroundColor:{
              image:'/assets/images/矢量智能对象(7).png', 
            }}
           },
            {
             value:'2',
             textStyle:{
              width:14,
              height:16, 
              align:'center',
              verticalAlign:'middle',
              fontSize:10,
              fontFamily:'Microsoft YaHei',
               backgroundColor:{image: '/assets/images/矢量智能对象 拷贝 5.png'},            
             }
            } , 
            {
              value:'3',
              textStyle:{
              width:14,
              height:16, 
              align:'center',
              verticalAlign:'middle',
              fontSize:10,
              fontFamily:'Microsoft YaHei',
                backgroundColor:{image:'/assets/images/矢量智能对象 拷贝 6.png'},
              }
            },
            {
              value:'4',
               textStyle:{
              width:14,
              height:16, 
              align:'center',
              verticalAlign:'middle',
              fontSize:10,
              fontFamily:'Microsoft YaHei',
               backgroundColor:{image:'/assets/images/矢量智能对象 拷贝 7.png'},
             }
 
            },
            {
             value:'5',
            textStyle:{
              width:14,
              height:16, 
              verticalAlign:'middle',
              align:'center',
              fontSize:10,
              fontFamily:'Microsoft YaHei',
              backgroundColor:{image:'/assets/images/矢量智能对象 拷贝 8.png'},
            }
 
           }],
          /*data:{//类目轴数据
           value:['1','2','3','4','5'],
           textStyle:{
             fontSize:10,
             fontFamily:'Microsoft Yahei',
             width:14,
             height:16,
             aglin:'center',
             verticalAlign:'middle',
             formatter:[
               '{valueStyle|{value}}'
             ],
             rich:{
                    function(value,index){
                      backgroundColor:{
                        image:'valueStyle[index]',
                      },

                    }   //valueStyle写成数组，value是一个数组，二者index相同。
             }
           }
          },*/
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color:'rgba(255,255,255,1)',
            margin:103,   /*count*/ 
            fontFamily:'Microsoft YaHei',   
            fontSize:10,
          },

          splitLine: {
            show: false
          },
         
         
        
        }
      ],
     
      //data: Object.keys(builderJson.charts),
    
      series: [
        {
          type: 'bar',
          z: 100,
          barWidth:12,   /*12 */
          label: {
            show: true,
            formatter: '{c}',
            position: ['100%','10%'],                                   
            color:'rgba(255,255,255,0.8)',
            fontSize:12,
          },
          labelLayout:{
            align:'right',
            dx:-10,
          },
          data: datas,
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: 'rgba(255,255,255,0.05)'
            }
          },
          label: {
            show: true,
            formatter: '{b}',
            position: 'left',
            color:'rgba(255,255,255,0.8)'
          },
          labelLayout:{
            verticalAlign:'middle',
            align:'right',
            dx:-95
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
          barWidth: 12,
          barGap: '-100%',
          data: datasRoundup,
        }
    
      ]};

barchart.setOption(issuetop5_barchartOption);
}
}
