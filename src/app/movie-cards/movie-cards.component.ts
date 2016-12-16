import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {
  
  @Input() filter: string;
  @Input() id: string;
  private movies = [];
  private title = "";
  private subscription: Subscription;
  
  constructor(
		private tmdbService: TmdbService,
		private tmdbHelper: TmdbHelper,
		private route: ActivatedRoute,
		private router: Router
	) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
			if(!this.filter) this.filter = param['filter'];
			
			if(this.filter==='popular'){
  			this.tmdbService.getPopularMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
  				this.title = "Popular movies";
			} else if(this.filter==='top'){
  			this.tmdbService.getTopMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
  				this.title = "Top movies";
			} else if(this.filter==='upcoming'){
  			this.tmdbService.getUpcomingMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
  				this.title = "Upcoming movies";
			} else if(this.filter==='nowplaying'){
  			this.tmdbService.getNowplayingMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
  				this.title = "Now playing movies";
			} else if(this.filter==='similar'){
  			this.tmdbService.getSimilarMovies(this.id)
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
  				this.title = "Similar movies";
			}
			this.filter = null;
    });
  }
  
  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }

}
