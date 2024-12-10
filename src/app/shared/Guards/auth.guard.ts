import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.getToken() !== null) {
    var claimsReq = route.data['claimsReq'] as Function;

    if (claimsReq) {
      var claims = authService.getClaims();
      if (!claimsReq(claims)) {
        router.navigate(['/forbidden']);
        return false;
      }
      return true;
    }
    return true;
  } else {
    router.navigate(['/Auth/Authentication/Login']);
    return false;
  }
};
