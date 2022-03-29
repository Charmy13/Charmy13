import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionBarChartComponent } from './production-bar-chart.component';

describe('ProductionBarChartComponent', () => {
  let component: ProductionBarChartComponent;
  let fixture: ComponentFixture<ProductionBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
