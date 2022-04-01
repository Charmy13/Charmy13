import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordGaugeChartComponent } from './record-gauge-chart.component';

describe('RecordGaugeChartComponent', () => {
  let component: RecordGaugeChartComponent;
  let fixture: ComponentFixture<RecordGaugeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordGaugeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordGaugeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
