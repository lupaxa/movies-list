import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Route, RouterModule} from '@angular/router';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenHttpInterceptor} from './auth/token-http-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MovieModule} from './movie/movie.module';


const routes: Route[] = [
  { path: '', redirectTo: 'movie', pathMatch: 'full'},
  { path: 'movie', component: MovieListComponent },
  { path: '**', redirectTo: 'movie' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MovieModule
  ],
  providers: [CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenHttpInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
