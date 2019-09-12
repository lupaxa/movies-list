import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieModel} from './movie-list/movie.model';
import {AUTH_CONFIG} from './auth/auth.config';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private url = `http://api.themoviedb.org`;

  constructor(private _httpClient: HttpClient) {
  }

  /** method to get movie list*/
  // getMovies(page: string): Observable<MovieModel[]> {
  //   return this._httpClient.get<MovieModel[]>(`${this.url}/3/movie/upcoming`,  { withCredentials: false });
  // }


  getMovies(page: number): Observable<any> {
    const params = new HttpParams().set('api_key', 'a7946f8eb69db148e3850aac11332a98').set('page', page.toString());
    return this._httpClient.get<any[]>(`${this.url}/3/movie/upcoming`, {params});
  }
}
