import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email: string;
  msg: string;
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
  }

  checkEmailIsExist() {
    if (this.email) {
      this.userService.checkEmailIsExists({mail:this.email}).subscribe(res => {
        console.log(res);
        
        if (res.result) {
          //route to reset password
          this.router.navigateByUrl(`/resetPassword/${this.email}`);
        }
        else {
          this.msg = res.errorDesc;
        }
      });
    }
    else{
      this.msg ="Please type your email";
    }

  }

}
