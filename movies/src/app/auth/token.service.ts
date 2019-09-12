import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Injectable({providedIn: 'root'})
export class TokenService {
  constructor(private cookieService: CookieService) {
  }

  getToken() {
    return this.cookieService.get('auth_token');
  }

  setToken(token: string) {
    this.cookieService.set( 'auth_token', token );
  }



}
