import { Injectable } from '@angular/core';
import {MovieModel, UpcomingResponseModel} from './movie.model';
import { MovieDataService } from './movie-data.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MovieServiceModule} from './movie-service.module';

@Injectable({
  providedIn: MovieServiceModule
})
export class MovieService {
  public movieList: (MovieModel[] | any[]) = [];
  private $favoriteMovieList: BehaviorSubject<MovieModel[]> = new BehaviorSubject([]);
  private apiPage = 0;
  private favoriteMovieIdsList: any[] = [];
  constructor( private _movieDataService: MovieDataService) { }

  public getMoviePageList(page) {
      if (!(page % 2 === 0)) {
        this.apiPage++;
        this._movieDataService.getMovies(this.apiPage).subscribe( (res: UpcomingResponseModel) => {
          this.movieList = [...this.movieList, ...res.results];
        } );
      }
   }

   public addToFavourite(id: number): void {
     this.favoriteMovieIdsList.push(id);
     this.$favoriteMovieList.next(this.favoriteMovieIdsList);
   }

  isFavorite(id): boolean {
    return this.favoriteMovieIdsList.includes(id);
  }

  public deleteFromFavourite(id: number): void {
    this.favoriteMovieIdsList.splice( this.favoriteMovieIdsList.indexOf(id), 1 );
    this.$favoriteMovieList.next(this.favoriteMovieIdsList);
  }

  getFavoriteMovieList(): Observable<MovieModel[]> {
    return this.$favoriteMovieList.asObservable().pipe(map((favoriteIds: any)  => {
        return  this.movieList.filter(f => favoriteIds.includes(f.id));
    }));
  }

}
