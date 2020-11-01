import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.css']
})
export class ConfirmUserComponent implements OnInit {

  msg: string;
  constructor(private activatedRoute: ActivatedRoute, private userServ: UserService) {
    const mail = this.activatedRoute.snapshot.paramMap.get("mail");
    this.confirmUser(mail);

  }

  ngOnInit() {
  }
  
  confirmUser(mail: string) {
    //http to server
    this.userServ.confirmUser({ mail: mail }).subscribe(res => {
      this.msg = res.messgae;
    });
  }

}
