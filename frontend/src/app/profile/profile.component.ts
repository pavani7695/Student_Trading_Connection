import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration/registration.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service/user.service';
import { User } from '../models/user/user';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  user = new User();
  constructor(
    private _service: RegistrationService,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = this._userService.getUser();
  }

  ngOnInit(): void {
    this.user = this._userService.getUser();
  }
}
