import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { errorService } from '../Services/error.service';

@Injectable()
export class errorHandlingInterceptor implements HttpInterceptor {
  constructor(private _Router: Router, private _ErrorService: errorService) {}

  intercept(
    requestToHandle: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(requestToHandle).pipe(
      catchError((err) => {
        this.CheckStatus(err);
        return throwError(() => err);
      })
    );
  }

  CheckStatus(err: any) {
    let errorMessage = 'An unexpected error occurred.';

    switch (err.status) {
      case 401:
      case 403:
        this._Router.navigate(['/Auth/login']);
        return;
      case 404:
        errorMessage = 'Error 404: The requested resource was not found.';
        this._Router.navigate(['/error']);
        break;
      case 500:
        errorMessage = 'Error 500: Internal server error. Please try again.';
        break;
      case 400:
        errorMessage = 'Error 400: Bad request. Please check your input.';
        break;
      case 408:
        errorMessage = 'Error 408: Request timed out. Please try again.';
        break;
      default:
        errorMessage = `Error ${err.status}: ${err.message}`;
        break;
    }

    this._ErrorService.setError(errorMessage);
    this._Router.navigate(['/error']);
  }
}
