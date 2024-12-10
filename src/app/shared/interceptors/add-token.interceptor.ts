import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Token_Key } from '../constants';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(environment.baseUrl)) {
      // Get token from local storage
      let token = localStorage.getItem(Token_Key!);
      // set headers object
      const httpOptions = {
        headers: new HttpHeaders({
          token: `${token}`,
        }),
      };
      console.log(httpOptions.headers);
      var modifiedRequest = request.clone(httpOptions);

      return next.handle(modifiedRequest);
    } else {
      return next.handle(request);
    }
  }
}
