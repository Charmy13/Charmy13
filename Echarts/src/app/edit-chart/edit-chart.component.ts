import { Component, Input, OnInit, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {SelectItem} from 'primeng/api';
import { PrimeNGConfig, SelectItemGroup } from "primeng/api";
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

interface select{
  name:string;
  icon:string;
  };
  interface graph{
    dimension:string;
    index:string;
    graphtype:string;
    data:string;//将json文件转换成字符串的形式
    initChart():void;
  }
@Component({
  selector: 'app-edit-chart',
  templateUrl: './edit-chart.component.html',
  styleUrls: ['./edit-chart.component.css'],
  animations:[],
})

export class EditChartComponent implements OnInit {
  //@Input() template:TemplateRef<any>;
  //@ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
 
  @Input() dimension?:string;
  @Input() index:any;
  @Output()process:EventEmitter<any>=new EventEmitter();
  field:select[];
  selectedfield?:select;

  indicators:Array<select>=[];
  selected?:select;
   
 // selected:any = null;
  graphOption?:select;
  graph:Array<select>=[];
  public dataset:any;
  datalist:Array<string>=[];
  dataselect:Array<MenuItem>=[];
  @Output() editRequest=new EventEmitter();

  constructor(private httpClient:HttpClient) { 
  
        this.httpClient.get('assets/order_line_chart.json')
        .subscribe(data=>{
          console.log('data....',data);
          console.log('datajson....',JSON.stringify(data));//字符串
          this.dataset=data;
        })
       // this.dimension=this.dataset.dimension;  //存入dataset对象中的dimension
       // this.index=this.dataset.index;//存入dataset对象中的index
this.dataselect=[{//这里应该是建立一个数组
  label:'数据来源',
  items:[{
    label:'数据1',
    icon:'pi-database',
    command:()=>{
      this.dimensionshow(this.dataset);
    }
  },{
    label:'数据2',
    icon:'pi-database',
    command:()=>{
      this.dimensionshow(this.dataset);
    }
  },{
    label:'数据3'
  }]

}],
  this.indicators=[
  {name:'求  和',icon:''},
  {name:'平均数',icon:''},
  {name:'中位数',icon:''},
  ];

  this.graph=[
    {name:'折线图',icon:''},
    {name:'饼  图',icon:''},
    {name:'柱状图',icon:''},
    {name:'面积图',icon:''},
  ];
  this.field=[//统计字段
    {name:'订单数量',icon:''},
    {name:'年份',icon:''},
    {name:'月份',icon:''},
    {name:'产品数量',icon:''}
  ] ;
  console.log(this.field);
  console.log(this.indicators);
      
  }

  ngOnInit(): void {
    
    //习惯上 执行 初始化逻辑
  }

 
dimensionshow(dataset:any){
  //返回 json 对象中的 第一维度 数据
  console.log("dataset.slice",dataset.slice());
  let $json =eval("("+dataset+")");
  let j:string;
 for(j in $json ){
   console.log("当前的序号 = +" +j);
 }

};
indexshow(dataset:any){

}

edit(){
  this.editRequest.emit("edit");
   
}

}
