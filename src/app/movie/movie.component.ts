import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Subscription } from 'rxjs';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  private movie: any;
	private video: any;
	private maxPopularity = 5;
	private subscription: Subscription;
	
	constructor(private tmdbService: TmdbService, private tmdbHelper: TmdbHelper, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
			let id = param['id'];
			
			this.tmdbService.getDetailMovie(id)
				.subscribe(movie => {
					this.movie = movie;
					this.rewrite();
				});
			
			this.tmdbService.getVideoMovie(id)
				.subscribe(video => {
					this.video = video.results[0];
				});
    });
  }
  
  /**Separa un valor de la variable date y lo almacena en movie
   * @return {:void} */
  rewrite(): void{
  	this.movie.year = this.movie.release_date.split('-')[0];
  }
  
  /**Crea la url de un video de youtube en base a la key de
   * la pelicula actual almacenada en la variable video
   * @return {:string} url del video de youtube*/
  getUrlYoutube(): string {
    	return `https://www.youtube.com/embed/${this.video.key}`
    }
}
