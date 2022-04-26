import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListChartComponent } from './order-list-chart.component';

describe('OrderListChartComponent', () => {
  let component: OrderListChartComponent;
  let fixture: ComponentFixture<OrderListChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderListChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
