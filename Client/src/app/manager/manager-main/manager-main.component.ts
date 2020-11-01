import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-manager-main',
  templateUrl: './manager-main.component.html',
  styleUrls: ['./manager-main.component.css']
})
export class ManagerMainComponent implements OnInit {

  firstName: string;
  lastName: string;
  msg: string;
  constructor(private router: Router, private userServ: UserService) { }

  ngOnInit() {
  }

  managerReport() {
    this.router.navigateByUrl('/managerReport');
  }

  employeeReport() {
    if (this.firstName && this.lastName) {
      this.userServ.checkEmployeeNameExist({ firstName: this.firstName, lastName: this.lastName }).subscribe(res => {
        if (res.result) {
          this.router.navigateByUrl(`/monthlyReport/${this.firstName}/${this.lastName}`);
        }
        else {
          this.msg = res.errorDesc;
        }
      });
    }
    else {
      this.msg = "please enter all fields ";
    }
  }

}
