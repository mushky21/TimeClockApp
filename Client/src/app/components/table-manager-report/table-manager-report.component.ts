import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-manager-report',
  templateUrl: './table-manager-report.component.html',
  styleUrls: ['./table-manager-report.component.css']
})
export class TableManagerReportComponent implements OnInit {

  @Input() tableRows:{};
  @Input() keys:string[];
  constructor() { }

  ngOnInit() {
  }

}
