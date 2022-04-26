import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import 'echarts-gl';

@Component({
  selector: 'app-earth',
  templateUrl: 'earth.component.html',
  styleUrls: ['earth.component.css'],
})
export class EarthComponent implements OnInit {
  @Input() earthChartOption = {
    backgroundColor: 'transparent',
    globe: {
      show: true,
      atmosphere: {
        show: true,
      },
    // baseTexture:'/assets/images/地球纹理.png',
   // baseTexture:'/assets/images/map1.png',
   baseTexture:'/assets/images/地图.png',
      shading:'realistic',
      realisticMaterial:{
        textureTiling:2
      },
      light: {
        ambient: { //环境光
         // color: 'rgba(255,255,255,0.2)',
          intensity: 0.6,
        },
        main: {//主光源
          color: '#fff',
          intensity: 0,
          alpha:-90,
         
        },
      },
      viewControl: {
       projection: 'perspective',
        autoRotate: true,
        autoRotateDirection: 'cw',
        autoRotateSpeed: 15,
        autoRotateAfterStill: 2,
        damping: 0.8,
        rotateSensitivity: [3, 3],
        zoomSensitivity: 1 /*缩放操作的灵敏度*/,
        panSensitivity: 1,
        rotateMouseButton: 'left',
        distance: 150 /*距地球表面的距离*/,
     
        //projetion:'orthographic', /* 正交投影*/
       // orthographicSize:150,
    
        alpha: 0,
        beta:0,
        //beta: 45,
       
        center: [0, 0, 0],
      },
    
     
    },
  };

  
  constructor() {}

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts() {
    const ec = echarts as any;
    let earthChart = ec.init(document.getElementById('earth'));

    earthChart.setOption(this.earthChartOption);
  }
}


// 赋初始值为空数组
  //public options:{} = {};
  // 加!允许变量为空
  //public options!:{};
  // 加?允许变量为undefined
  //public options?:{};
