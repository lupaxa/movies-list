import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {MovieModel} from '../movie.model';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-favorite-movie-list',
  templateUrl: './favorite-movie-list.component.html',
  styleUrls: ['./favorite-movie-list.component.css']
})
export class FavoriteMovieListComponent implements OnInit {
  private movieList$: Observable<MovieModel[]>;
  private movieList: MovieModel[];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  displayedColumns: string[] = ['title', 'release_date', 'button'];
  dataSource = new MatTableDataSource();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getFavoriteMovieList().subscribe( res => {this.dataSource.data = res});
  }

  public removeFromFavorite(id): void {
    this.movieService.deleteFromFavourite(id);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
