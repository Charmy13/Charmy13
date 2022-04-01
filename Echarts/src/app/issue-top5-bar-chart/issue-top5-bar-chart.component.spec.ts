import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTOP5BarChartComponent } from './issue-top5-bar-chart.component';

describe('IssueTOP5BarChartComponent', () => {
  let component: IssueTOP5BarChartComponent;
  let fixture: ComponentFixture<IssueTOP5BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueTOP5BarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTOP5BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
