import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportApiService } from 'src/services/report-api.service';

@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.css']
})
export class MonthlyReportComponent implements OnInit {

  tableRows = [];
  totalHours: number;
  token: string;
  stringForNonExistData: string;
  firstName: string;
  lastName: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private reportApi: ReportApiService) {
    this.token = localStorage.getItem('currentUser');
    this.firstName = this.activatedRoute.snapshot.paramMap.get("firstName");
    this.lastName = this.activatedRoute.snapshot.paramMap.get("lastName");
  }

  ngOnInit() {

  }

  getMonthlyReport(requestedMonth) {
    let reportData = {
      token: this.token,
      month: requestedMonth
    };

    if (this.firstName) {
      reportData["firstName"] = this.firstName;
      reportData["lastName"] = this.lastName;
    }

    this.reportApi.getMonthReport(reportData).subscribe(res => {

      console.log(res);
      if (res["result"]) {
        console.log(res["tableMonthReport"]);
        this.tableRows = res["tableMonthReport"];
        this.stringForNonExistData = "";
        this.totalHours = res["totalHours"];
        //also update graph and map
      }
      else {
        //show errorDesc and not show all commponents of this page?
        this.stringForNonExistData = res["errorDesc"]
        this.tableRows = [];
        this.totalHours = 0;
      }
    }, err => console.log(err));
  }

}
