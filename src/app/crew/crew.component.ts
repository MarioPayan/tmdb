import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

@Component({
  selector: 'crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  @Input() private id:string;
  private movies = [];
  
  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: TmdbHelper
  ) { }

  ngOnInit() {
    this.tmdbService.getMovieCreditsPerson(this.id)
      .subscribe(movies => {
        this.movies = movies.crew;
      });
  }

}
