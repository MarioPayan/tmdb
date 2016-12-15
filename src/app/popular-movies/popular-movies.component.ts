import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  
  private movies = []
  
  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: TmdbHelper,
    private router: Router
  ) { }

  ngOnInit() {
    this.tmdbService.getPopularMovies()
      .subscribe(movies => {
        this.movies = movies.results.slice(0, 9);
      });
  }
  
  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }

}
