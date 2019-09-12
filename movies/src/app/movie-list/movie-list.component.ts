import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MovieModel} from './movie.model';
import {MovieDataService} from '../movie-data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movieList$: Observable<MovieModel[]>;
  listLimit = 10;
  currentPage = 1;
  constructor(private movieDataService: MovieDataService) { }

  ngOnInit() {
    this.getMovieList(this.currentPage);
  }

  getMovieList(page?) :void {
    this.movieList$ =  this.movieDataService.getMovies(page);
  }

  loadMore() {
    const a = this.listLimit / 20;
    if (a === 1 || (a % 2 === 0)) {
      this.currentPage = this.currentPage + 1;
      this.getMovieList(this.currentPage)
    }
    this.listLimit = this.listLimit + 10;
  }

}
