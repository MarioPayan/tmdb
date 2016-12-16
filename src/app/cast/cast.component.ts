import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})

export class CastComponent implements OnInit {
  @Input() private id:string;
  private movies = [];
  
  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: TmdbHelper,
    private router: Router
  ) { }

  ngOnInit() {
    this.tmdbService.getMovieCreditsPerson(this.id)
      .subscribe(movies => {
        this.sortMovies();
        this.movies = movies.cast;
      });
  }
  
	sortMovies(): void {
    this.movies.sort((movieA: any, movieB: any) => {
      let dateA = movieA.release_date.split('-');
      let dateB = movieB.release_date.split('-');
      if (dateA[0] > dateB[0]) {
        return -1;
      } else if (dateA[0] < dateB[0]) {
        return 1;
      } else if (dateA[1] > dateB[1]) {
        return -1;
      } else if (dateA[1] < dateB[1]) {
        return 1;
      } else if (dateA[2] > dateB[2]) {
        return -1;
      } else if (dateA[2] < dateB[2]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  
  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }
}
