import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private _http: HttpClient) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:9292/users/login', user);
  }
  public registraterUserFromRemote(user: User): Observable<any> {
    console.log(user);
    return this._http.post<any>('http://localhost:9292/users/register', user);
  }
}
