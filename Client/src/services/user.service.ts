import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = "http://localhost:3000/users/";

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<JSON> {
    return this.http.post<JSON>(`${this.usersUrl}signUp`, user);
  }

  signIn(password, mail): Observable<JSON> {
    return this.http.get<JSON>(`${this.usersUrl}signIn/${password}/${mail}`);
  }
  checkEmailIsExists(mail): Observable<any> {
    return this.http.post<JSON>(`${this.usersUrl}checkEmailExists`, mail);
  }

  checkEmployeeNameExist(data): Observable<any> {
    return this.http.post<JSON>(`${this.usersUrl}isEmployeeNameExist`, data);
  }
  confirmUser(mail): Observable<any> {
    return this.http.post<JSON>(`${this.usersUrl}verifyUser`, mail);
  }



}
