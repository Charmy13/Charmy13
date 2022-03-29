import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlineChartComponent } from './order-line-chart.component';

describe('OrderlineChartComponent', () => {
  let component: OrderlineChartComponent;
  let fixture: ComponentFixture<OrderlineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
