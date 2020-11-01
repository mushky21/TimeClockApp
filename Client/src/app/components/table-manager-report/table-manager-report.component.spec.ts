import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableManagerReportComponent } from './table-manager-report.component';

describe('TableManagerReportComponent', () => {
  let component: TableManagerReportComponent;
  let fixture: ComponentFixture<TableManagerReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableManagerReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableManagerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
