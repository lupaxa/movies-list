import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MovieModel} from './movie.model';
import {MovieDataService} from '../movie-data.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movieList$: Observable<MovieModel[]>;
  // public movieList: MovieModel[];
  listLimit = 10;
  currentPage = 1;
  constructor(private movieDataService: MovieDataService, public movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMoviePageList(this.currentPage);
  }

  // get movieList(): MovieModel[] {
  //   return this.movieService.movieList;
  // }

  loadMore() {
    this.listLimit = this.listLimit + 10;
    this.currentPage++;
    this.movieService.getMoviePageList(this.currentPage)
  }

  public addToFavorite(id){
    this.movieService.favoriteMovieList.push(id);
  }

  trackByItems(){

  }

  trackById(index, item) {
    return item.id;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
