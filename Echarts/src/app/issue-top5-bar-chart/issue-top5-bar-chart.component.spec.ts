import { ComponentFixture, TestBed } from '@angular/core/testing';

import{IssueTop5BarChartComponent} from'./issue-top5-bar-chart.component';
describe('IssueTop5BarChartComponent', () => {
  let component: IssueTop5BarChartComponent;
  let fixture: ComponentFixture<IssueTop5BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueTop5BarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTop5BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
