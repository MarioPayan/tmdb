import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  baseUrl = "http://image.tmdb.org/t/p/w300";
  title = 'app works!';
  movies = [];

  constructor(private movieService: MovieService){}

  ngOnInit(){
    this.movieService.getPopularMovies()
      .subscribe(movies => {
        this.movies = movies;
      });
      
      
      this.movieService.getPopularPersons()
      .subscribe(movies => {
        console.log("getPopularPersons");
        console.log(movies);
      });
      
      this.movieService.getDetailPerson("1")
      .subscribe(movies => {
        console.log("getDetailPerson");
        console.log(movies);
      });
      
      this.movieService.getMovieCreditsPerson("1")
      .subscribe(movies => {
        console.log("getMovieCreditsPerson");
        console.log(movies);
      });
      
      this.movieService.getSearchPerson("ale")
      .subscribe(movies => {
        console.log("getSearchPerson");
        console.log(movies);
      });
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }

}

