import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Report } from 'src/models/report';
import { ReportApiService } from 'src/services/report-api.service';




@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  msg: string;
  mailUser: string;
  /*   report: Report; */
  token: string;
  location: [number, number];
  comment: string;
  constructor(/* private activatedRoute: ActivatedRoute, */ private router: Router, private reportServ: ReportApiService) {

  }

  ngOnInit() {
/*     this.mailUser = this.activatedRoute.snapshot.paramMap.get("userMail"); */
    this.token = localStorage.getItem('currentUser');
  }

  logOut() {
    //delete token?
    this.router.navigateByUrl('/login');
  }

  navToReport() {
    this.router.navigateByUrl(`/monthlyReport`);
  }

  clockIn() {
    navigator.geolocation.getCurrentPosition((position) => {
      let report = {
        action: "clockIn",
        location: [position.coords.latitude, position.coords.longitude]
      };
      this.addReport(report);

    })
  }


  clockOut() {
    let report = {
      action: "clockOut",
      comment: this.comment
    };
    this.addReport(report);
  }

  async addReport(report) {
    let reportData = {
      report: report,
      token: this.token
    };

    this.reportServ.addReport(reportData).subscribe(res => {
      console.log(res);
      if (res["result"]) {
        this.msg = res["message"];
      }
      else {
        this.msg = res["errorDesc"];
      }
    }, err => console.log(err));
  }



}
