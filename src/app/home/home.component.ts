import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies = [];

  constructor(private tmdbService: TmdbService, private tmdbHelper: TmdbHelper){}

  ngOnInit(){
    this.tmdbService.getPopularMovies()
      .subscribe(movies => {
        this.movies = movies.results;
      });
      
      this.tmdbService.getPopularPersons()
      .subscribe(movies => {
        console.log("getPopularPersons");
        console.log(movies.results);
      });
      
      this.tmdbService.getDetailPerson("1")
      .subscribe(movies => {
        console.log("getDetailPerson");
        console.log(movies);
      });
      
      this.tmdbService.getMovieCreditsPerson("1")
      .subscribe(movies => {
        console.log("getMovieCreditsPerson");
        console.log(movies);
      });
      
      this.tmdbService.getSearchPerson("ale")
      .subscribe(movies => {
        console.log("getSearchPerson");
        console.log(movies.results);
      });
  }
}

