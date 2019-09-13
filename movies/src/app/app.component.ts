import {Component, OnInit} from '@angular/core';
import {TokenService} from './auth/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _tokenService: TokenService) {
  }

  ngOnInit() {
    this._tokenService.setToken('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzk0NmY4ZWI2OWRiMTQ4ZTM4NTBhYWMxMTMzMmE5OCIsInN1YiI6IjVkNzhkNTBlYWY0MzI0MDAxMDk3NjUwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-08F7Vgt05fs0PRgukCzTEu6bWTl1jhZPmAmOpeKJzw');
  }
}

