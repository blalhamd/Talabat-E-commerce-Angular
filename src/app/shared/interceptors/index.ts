import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTokenInterceptor } from './add-token.interceptor';
import { errorHandlingInterceptor } from './error-handling.interceptor';

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: errorHandlingInterceptor,
    multi: true,
  },
];
