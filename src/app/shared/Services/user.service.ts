import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _authService: AuthService) {}

  GetUserProfile(): string {
    return this._authService.getName();
  }
}
