
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-piechart',
  template: `<div id="piechart" style="width:565px;height:210px"></div>`,
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
      title: {},
      legend: {
        icon: 'rect',
        orient: 'vertical',
        right: '5%',
        bottom:'8%',
        height:190,/*图例组件高度*/
        itemWidth: 12,
        itemHeight: 11,
        
        textStyle:{
          color:'#ffffff',
         
        }
      },
     /* toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },数据可视化，下载刷新操作*/
      series: [
        {
          name: 'Pie chart',
          type: 'pie',
          left: '10%',
          height:410,
          /* height:,
     width:,*/
          radius: [35, 80],
          center: ['23%', '20%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            position: 'outer' /*注意顺序*/,
            alignTo: 'labelline',
            /*alignTo:'none',由label length 和length2而决定*/

            formatter: '{name|{d}%}',
            minMargin: 2,
            /* edgeDistance: 20,*/
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 9,
                color: '#999',
              },
            },
          },

          labelLine: {
            /*showAbove:true,引导线是否显示在图形上面?*/
            length: 20,
            length2: 30,
            /*maxSurfaceAngle: 80,*/
            lineStyle: {
              color: '#333',
            },
          },

          data: [
            {
              value: 279,
              name: '打铁座                    279',
              itemStyle: { color: '#10B9F8' },
            },
            {
              value: 177,
              name: '顶棚线束                177',
              itemStyle: { color: '#FF6A6A' },
            },
            {
              value: 68,
              name: 'POS机                     68',
              itemStyle: { color: '#90ED7D' },
            },
            {
              value: 15,
              name: '安全带/USB电源      15',
              itemStyle: { color: '#F7A35C' },
            },
            {
              value: 14,
              name: '车身安全带/USB      14',
              itemStyle: { color: '#8085E9' },
            },
            {
              value: 8,
              name: '司机风扇                   8',
              itemStyle: { color: '#8085E9' },
            },
            {
              value: 6,
              name: '外推窗过渡线            6',
              itemStyle: { color: '#E4D354' },
            },
            {
              value: 2,
              name: '仪表线束                   2',
              itemStyle: { color: '#601986' },
            },
            {
              value: 1,
              name: '阅读灯线束                1',
              itemStyle: { color: '#A48B78' },
            },
          ],
        },
      ],
    };
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
      },*/

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
