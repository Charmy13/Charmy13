import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodplanLineChartComponent } from './periodplan-line-chart.component';

describe('PeriodplanLineChartComponent', () => {
  let component: PeriodplanLineChartComponent;
  let fixture: ComponentFixture<PeriodplanLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodplanLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodplanLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
