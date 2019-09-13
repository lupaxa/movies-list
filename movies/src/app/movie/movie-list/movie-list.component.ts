import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subject} from 'rxjs';
import {MovieService} from '../movie.service';
import {FavoriteMovieListComponent} from '../favorite-movie-list/favorite-movie-list.component';
import {MatDialog} from '@angular/material';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  public listLimit = 10;
  public currentPage = 1;
  public favoriteMovieCounter: number;
  private _componentDestroyed: Subject<void> = new Subject();

  constructor(public movieService: MovieService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.movieService.getMoviePageList(this.currentPage);
    this.movieService.getFavoriteMovieList().pipe(takeUntil(this._componentDestroyed)).subscribe(arr => this.favoriteMovieCounter = arr.length);
  }

  ngOnDestroy() {
    this._componentDestroyed.next();
    this._componentDestroyed.complete();
  }

  loadMore(): void {
    this.listLimit = this.listLimit + 10;
    this.currentPage++;
    this.movieService.getMoviePageList(this.currentPage);
  }

  trackById(index, item): number {
    return item.id;
  }

  openDialog(): void {
    this.dialog.open(FavoriteMovieListComponent, {
      width: '700px',
    });
  }

}
