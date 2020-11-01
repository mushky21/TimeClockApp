import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  error: string;
  confirmedPassword: string;
  user: User;

  constructor(private userServ: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {


  }
  back(){
    this.router.navigateByUrl('/login');
  }

  signUp() {

    if (this.confirmedPassword !== this.user.password) {
      this.error = "The passwords must be the same";
    }
    else {
      //try to sign up by server
      this.userServ.addUser(this.user).subscribe(res => {
        console.log(res);
        if (res["result"]) {
          this.router.navigateByUrl('/login');
        }
        else {
          this.error = res["errorDesc"];
        }
      },err=> console.log(err));
    }
  }

}
