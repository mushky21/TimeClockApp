import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMonthReportComponent } from './table-month-report.component';

describe('TableMonthReportComponent', () => {
  let component: TableMonthReportComponent;
  let fixture: ComponentFixture<TableMonthReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMonthReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMonthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
