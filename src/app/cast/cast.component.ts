import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

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
    private tmdbHelper: TmdbHelper
  ) { }

  ngOnInit() {
    this.tmdbService.getMovieCreditsPerson(this.id)
      .subscribe(movies => {
        this.movies = movies.cast;
      });
  }

}
