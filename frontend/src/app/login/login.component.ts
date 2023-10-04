import { Component, OnInit } from "@angular/core";
// * 2. from 'app/modules.ts' -> import NgForm to use ngForm
import { NgForm } from "@angular/forms";
import { RegistrationService } from "../services/registration/registration.service";
import { User } from "../models/user/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user = new User();
  errorMsg = "";
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log(data);
        this._router.navigate(['/home']);
        // this._router.navigate(["/home"], {
        //   skipLocationChange: true,
        // });
      },
      (error) => {
        console.log("Exception Occured:" + error);
        this.errorMsg = "Bad Credentials, please try again";
      }
    );
  }

  gotoRegistration() {
    this._router.navigate(["/registration"]);
  }
}
