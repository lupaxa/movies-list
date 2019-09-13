import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../../movie.model';
import {MovieService} from '../../movie.service';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  @Input() data: MovieModel;
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
  }

  public addToFavorite(id) {
    this._movieService.addToFavourite(id);
  }

  public removeFromFavorite(id): void {
    this._movieService.deleteFromFavourite(id);
  }

  public isFavorite(id): boolean {
    return this._movieService.isFavorite(id);
  }

}
