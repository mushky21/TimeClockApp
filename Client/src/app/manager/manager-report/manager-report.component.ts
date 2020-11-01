import { Component, OnInit } from '@angular/core';
import { ReportApiService } from 'src/services/report-api.service';

@Component({
  selector: 'app-manager-report',
  templateUrl: './manager-report.component.html',
  styleUrls: ['./manager-report.component.css']
})
export class ManagerReportComponent implements OnInit {

  message:string;
  token: string;
  tableRows:{} = {};
  keys: string[] = [];//for html, in order to present keys and values of dictionary
  totalHours:number;

  constructor(private reportApi: ReportApiService) {
    this.token = localStorage.getItem('currentUser');
  }

  ngOnInit() {
  }

  getMonthlyReport(requestedMonth) {
    this.reportApi.getManagerMonthReport({ token: this.token, month: requestedMonth }).subscribe(res => {
      console.log(res);
      if (res.result) {
        this.tableRows = res.tableMonthReport;
        this.keys = [];
        for (var key in this.tableRows) this.keys.push(key);
        this.message ="";
        this.totalHours = res.totalHours;
      }
      else {
        this.tableRows = [];
        this.keys = [];
        this.message = res.errorDesc;
        this.totalHours = 0;
      }
    }, err => console.log(err));
  }

}
