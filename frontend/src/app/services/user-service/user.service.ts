import { Injectable } from '@angular/core';
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

  constructor() {}
}
