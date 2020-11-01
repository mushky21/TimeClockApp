import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-month-report',
  templateUrl: './table-month-report.component.html',
  styleUrls: ['./table-month-report.component.css']
})
export class TableMonthReportComponent implements OnInit {

  @Input() tableRows:[];
  constructor() { }

  ngOnInit() {
  }

}
