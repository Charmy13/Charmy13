import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-order-list-chart',
  templateUrl: './order-list-chart.component.html',
  styleUrls: ['./order-list-chart.component.css']
})
export class OrderListChartComponent implements OnInit {
    dataset:any;
    //private httpClient:HttpClient
    //接口改变时，需要修改http请求
  constructor(private httpClient:HttpClient) {//执行get请求
      this.httpClient.get('assets/json/orderList.json')
        .subscribe(data =>{
        console.log('data....',data);
        console.log('datajson....',JSON.stringify(data));
        this.dataset=data;
      })
    }
      
  ngOnInit(): void {
  }

}
