import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies = [];

  constructor(private tmdbService: TmdbService, private tmdbHelper: TmdbHelper){}

  ngOnInit(){
  }
}

