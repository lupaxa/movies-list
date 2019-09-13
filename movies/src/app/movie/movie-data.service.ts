import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UpcomingResponseModel} from './movie.model';
import {MovieServiceModule} from './movie-service.module';


@Injectable({
  providedIn: MovieServiceModule
})
export class MovieDataService {
  private url = `http://api.themoviedb.org`;

  constructor(private _httpClient: HttpClient) {
  }

  /** method to get movie list*/
  getMovies(page: number): Observable<UpcomingResponseModel> {
    const params = new HttpParams().set('api_key', 'a7946f8eb69db148e3850aac11332a98').set('page', page.toString());
    return this._httpClient.get<UpcomingResponseModel>(`${this.url}/3/movie/upcoming`, {params});
  }
}
