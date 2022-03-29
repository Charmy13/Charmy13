import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-periodplan-line-chart',
  template: `<div
    id="periodplan_line_chart"
    style="width:565px;height:110px"
  ></div>`,
  styleUrls: ['./periodplan-line-chart.component.css'],
})
export class PeriodplanLineChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initCharts();
  }
  initCharts() {
    const ec = echarts as any;
    let linechart = ec.init(document.getElementById('periodplan_line_chart'));
    let periodplan_linechartOption = {
      grid: {
        top: 8,
        /*left: 8,*/
        /*right: 15,*/
        height: 85,
        width: 441,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '2020-01',
          '2021-01',
          '2021-01',
          '2021-01',
          '2021-01',
          '2021-01',
          '2021-01',
        ],
        axisTick: {
          show: false,
          alignWithLabel: false,
        },
        axisLabel: {
          align: 'left' /*文字左对齐，向右移动 是以center而言？*/,
          color:'#ffffff',
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 6,
        interval: 2,
        axisLine: {
          show: true,
        },
        axisLabel:{
          color:'#ffffff',
        },
        splitLine: {
          lineStyle: { type: 'dashed' },
        },
      },
      series: [
        {
          type: 'line',
          symbol: 'circle',
          symbolSize: 5,
          lineStyle: {
            color: '#00B6CE',
            width: 2,
            type: 'normal',
          },
          itemStyle: {
            borderWidth: 2,
            borderColor: '#00B6CE',
            color: '#ffffff',
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(20,105,170,1)',
              },
              {
                offset: 1,
                color: 'rgba(20,105,170,0.5)',
              },
            ]),
          },
          data: [3, 4.2, 3.8, 1.9, 2.2, 3, 1.7],
        },
      ],
    };
    linechart.setOption(periodplan_linechartOption);
  }
}
