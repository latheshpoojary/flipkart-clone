import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('tokenLy');
    console.log(token);
    
    const headers: any = {
      authorization: `${token}`,
    };

    
    const authReq = request.clone({
      setHeaders: headers,
    });

    return next.handle(authReq);
  }
}
