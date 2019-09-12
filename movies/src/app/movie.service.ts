import { Injectable } from '@angular/core';
import { MovieModel } from './movie-list/movie.model';
import { MovieDataService } from './movie-data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movieList: MovieModel[] = [];
  public favoriteMovieList: number[] = [];
  private apiPage = 0;
  constructor( private _movieDataService: MovieDataService) { }

  public getMoviePageList(page) {
      if (!(page % 2 === 0)) {
        this.apiPage++;
        this._movieDataService.getMovies(this.apiPage).subscribe( res => {
          this.movieList = [...this.movieList, ...res.results];
        } );
      }
   }

   public addToFavourite(id: number) {
     this.favoriteMovieList.push(id);
   }


}
