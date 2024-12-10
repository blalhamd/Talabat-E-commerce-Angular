import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel } from '../Models/login';
import { environment } from '../../../environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { RegisterModel } from '../Models/Register';
import { Token_Key } from '../constants';

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
      if (localStorage.getItem(Token_Key) !== null) {
        this.decodeUserData();
      }
    }
  }

  decodeUserData() {
    // get token
    var token = JSON.stringify(localStorage.getItem(Token_Key));
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
    this.RemoveToken();
    // set userInfo null
    this.userData.next(null);
    // navigate to login
    this._router.navigate(['/Auth/Authentication/Login']);
  }

  IsLoggedIn() {
    return localStorage.getItem(Token_Key) !== null ? true : false;
  }

  getToken() {
    return localStorage.getItem(Token_Key);
  }

  SaveToken(token: string) {
    localStorage.setItem(Token_Key, token);
  }

  RemoveToken() {
    localStorage.removeItem(Token_Key!);
  }

  getName(): string {
    // get token
    var token = JSON.stringify(localStorage.getItem(Token_Key));
    // decrypt
    var decodedToken: any = jwtDecode(token);
    return decodedToken.name;
  }

  getClaims() {
    try {
      const token = localStorage.getItem(Token_Key);

      if (!token) {
        console.error('No token found in localStorage');
        return null;
      }

      const decodedToken: any = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
