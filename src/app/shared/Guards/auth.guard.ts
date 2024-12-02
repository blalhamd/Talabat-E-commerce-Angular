import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('token') !== null
    ? true
    : inject(Router).createUrlTree(['/Auth/Authentication/Login']);
};
