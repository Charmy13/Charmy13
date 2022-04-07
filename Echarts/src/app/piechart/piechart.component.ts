
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-piechart',
  template: `<div id="piechart" style="width:525px;height:200px"></div>`,
  styleUrls: ['./piechart.component.css'],
})
export class PiechartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initpieCharts();
  }

  initpieCharts() {
    const ec = echarts as any;
    let piechart = ec.init(document.getElementById('piechart'));
    let piechartOption = {
      title:{
        text:'流转\n业务',
        left:'31%',       
        top:'38%',
        textStyle:{
          color:'rgba(255,255,255,1)',
          fontSize:18,
          fontWeight:10,
          lineHeight:20,
          
        },
      },
      legend: {
        icon: 'rect',
        orient: 'vertical',
        left: '65%',
        
        width:525,
        height:200,/*图例组件高度*/
        itemWidth: 12,
        itemHeight: 11,
        itemGap:10,
       
        textStyle:{
          color:'rgba(255,255,255,0.8)',
           padding:[0,0,0,4],
        }
      },
     
      series: [
        {
          name: 'Pie chart',
          type: 'pie',
           width:525,  
           height:200,
          radius: ['40%','85%'],
          center: ['35%', '50%'],/*相对于容器大小而言*/
          roseType: 'radius',
          clockWise:true,
          startAngle:120,
          minAngle:10,
          label: {
            position: 'outer' /*注意顺序*/,
            alignTo: 'none',
            /*alignTo:'none',由label length 和length2而决定*/
           formatter: '{name|{d}%}',
            minMargin:0,
            lineHeight: 15,
            rich: {
              name: {
                fontSize: 12,
                color: 'rgba(255,255,255,0.9)',
              },
            },
          },

          labelLine: {
            showAbove:true,/*引导线是否显示在图形上面?*/
           
            lineStyle: {
              color: 'rgba(255,255,255,0.9)',
            },
          },

          data: [
            {
              value: 180,
              name: '打铁座',      
              itemStyle: { color: '#10B9F8' },
            },
            {
              value: 177,
              name: '顶棚线束',
              itemStyle: { color: '#FF6A6A' },
            },
            {
              value: 165,
              name: 'POS机',
              itemStyle: { color: '#90ED7D' },
            },
            {
              value: 140,
              name: '安全带/USB电源',
              itemStyle: { color: '#F7A35C' },
            },
            {
              value: 120,
              name: '车身安全带/USB',
              itemStyle: { color: '#8085E9' },
            },
            {
              value:100,
              name: '司机风扇',
              itemStyle: { color: '#920783' },
            },
            {
              value:80,
              name: '外推窗过渡线',
              itemStyle: { color: '#E4D354' },
            },
            {
              value: 60,
              name: '仪表线束',
              itemStyle: { color: '#601986' },
            },
            {
              value: 40,
              name: '阅读灯线束',
              itemStyle: { color: '#A48B78' },
            },
          ],
        },
      ],
   
  }
  piechart.setOption(piechartOption);
}
}
/* labelLayout: function (params) {
        const isLeft = params.labelRect.x < myChart.getWidth() / 2;
        const points = params.labelLinePoints as number[][];
        // Update the end point.
        points[2][0] = isLeft
          ? params.labelRect.x
          : params.labelRect.x + params.labelRect.width;

        return {
          labelLinePoints: points
        };
      },

/*labelout 
该配置项也可以是一个有如下参数的回调函数

// 标签对应数据的 dataIndex
dataIndex: number
// 标签对应的数据类型，只在关系图中会有 node 和 edge 数据类型的区分
dataType?: string
// 标签对应的系列的 index
seriesIndex: number
// 标签显示的文本
text: string
// 默认的标签的包围盒，由系列默认的标签布局决定
labelRect: {x: number, y: number, width: number, height: number}
// 默认的标签水平对齐
align: 'left' | 'center' | 'right'
// 默认的标签垂直对齐
verticalAlign: 'top' | 'middle' | 'bottom'
// 标签所对应的数据图形的包围盒，可用于定位标签位置
rect: {x: number, y: number, width: number, height: number}
// 默认引导线的位置，目前只有饼图(pie)和漏斗图(funnel)有默认标签位置
// 如果没有该值则为 null
labelLinePoints?: number[][]
*/
