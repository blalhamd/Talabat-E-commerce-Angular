import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel } from '../Models/login';
import { environment } from '../../../environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterModel } from '../Models/Register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(
    private _HttpClient: HttpClient,
    private _router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // this line
  ) {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('token') !== null) {
        this.decodeUserData();
      }
    }
  }

  decodeUserData() {
    // get token
    var token = JSON.stringify(localStorage.getItem('token'));
    // decrypt
    var decodedToken: any = jwtDecode(token);
    // assign it to userData
    this.userData.next(decodedToken);
  }

  Login(model: LoginModel): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/auth/signin`,
      model
    );
  }

  Register(model: RegisterModel): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/auth/signup`,
      model
    );
  }

  LogOut() {
    // remove token
    localStorage.removeItem('token');
    // set userInfo null
    this.userData.next(null);
    // navigate to login
    this._router.navigate(['/Auth/Authentication/Login']);
  }
}
