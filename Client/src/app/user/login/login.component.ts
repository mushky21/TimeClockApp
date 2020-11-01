import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = {
    email: "",
    password: ""
  };

  error = "";


  constructor(private router: Router, private userServ: UserService) {

  }

  ngOnInit() {
  }


  signIn() {
    //can seprate to function of checking all fields are not empty
    //also need check email is valid and password?
    if (this.userLogin.email == '' || this.userLogin.password == '') {
      this.error = "One or more fields are invalid";
    }
    else {
      //try to login by server
      this.userServ.signIn(this.userLogin.password, this.userLogin.email).subscribe(res => {
        if (res["result"]) {
          localStorage.setItem('currentUser', res["token"]);
          if (res["isManager"]) {
            //route to manager component
            this.router.navigateByUrl(`/managerMain`);
          }
          else {
            this.router.navigateByUrl(`/controlPanel`);
          }
        }
        else {
          this.error = res["errorDesc"];
        }
      }, err => console.log(err))

  }
}

  signUp() {
    this.router.navigateByUrl('/signUp');
  }

  forgot() {
    this.router.navigateByUrl('/forgot');
  }

}
