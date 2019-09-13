import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListComponent} from './movie-list/movie-list.component';
import {FavoriteMovieListComponent} from './favorite-movie-list/favorite-movie-list.component';
import {MovieListItemComponent} from './movie-list/movie-list-item/movie-list-item.component';
import {MaterialModule} from '../material/material.module';
import {MovieServiceModule} from './movie-service.module';

@NgModule({
  declarations: [
    MovieListComponent,
    FavoriteMovieListComponent,
    MovieListItemComponent],
  entryComponents: [FavoriteMovieListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MovieServiceModule
  ]
})
export class MovieModule { }
