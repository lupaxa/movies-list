import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {Router} from '@angular/router';
import {TokenService} from './token.service';
import {AUTH_CONFIG} from './auth.config';

@Injectable({providedIn: 'root'})
export class TokenHttpInterceptor implements HttpInterceptor {
  constructor( private router: Router,
              private _tokenService: TokenService) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._tokenService.getToken();
    if (token) {
      let headers = req.headers.set(AUTH_CONFIG.headerName, AUTH_CONFIG.headerPrefix + ' ' + token);
      req = req.clone({headers: headers});
    }
    return next.handle(req)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.router.navigate(['login']);
          }
          return throwError(err);
        })
      );


  }
}

