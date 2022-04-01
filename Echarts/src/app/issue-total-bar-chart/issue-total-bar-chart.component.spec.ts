import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTotalBarChartComponent } from './issue-total-bar-chart.component';

describe('IssueTotalBarChartComponent', () => {
  let component: IssueTotalBarChartComponent;
  let fixture: ComponentFixture<IssueTotalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueTotalBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTotalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
