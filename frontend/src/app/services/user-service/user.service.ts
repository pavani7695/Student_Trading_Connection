import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: "root",
})
export class UserService {
  user = new User();

  setUser(user: User) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }

  seller = new User();

  setSeller(seller: User) {
    this.seller = seller;
  }

  getSeller() {
    return this.seller;
  }

  constructor(private _http: HttpClient) {}

  public getUserByIDFromRemote(userId: number): Observable<any> {
    const url = `http://localhost:9292/users/${userId}`;
    return this._http.get<any>(url);
  }
}
