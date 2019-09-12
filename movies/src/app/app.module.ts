import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Route, RouterModule} from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MatButtonModule, MatListModule} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtHttpInterceptor} from './auth/jwt-http.interceptor';

const routes: Route[] = [
  { path: '', redirectTo: 'movie', pathMatch: 'full'},
  { path: 'movie', component: MovieListComponent },
  { path: '**', redirectTo: 'movie' }
];


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatListModule,
    MatButtonModule
  ],
  providers: [CookieService,      {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtHttpInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
