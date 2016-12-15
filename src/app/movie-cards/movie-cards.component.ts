import { Component, OnInit } from '@angular/core';
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
  
  private movies = [];
  title = "";
  private subscription: Subscription;
  
  constructor(
		private tmdbService: TmdbService,
		private tmdbHelper: TmdbHelper,
		private route: ActivatedRoute,
		private router: Router
	) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
			let filter = param['filter'];
			
			if(filter==='popular'){
  			this.tmdbService.getPopularMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
  				this.title = "Popular movies";
			} else if(filter==='top'){
  			this.tmdbService.getTopMovies()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
  				this.title = "Top movies";
			} else if(filter==='upcoming'){
  			this.tmdbService.getUpcomingPersons()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
  				this.title = "Upcoming movies";
			} else if(filter==='nowplaying'){
  			this.tmdbService.getNowplayingPersons()
  				.subscribe(movies => {
  					this.movies = movies.results;
  				});
  				this.title = "Now playing movies";
			}
    });
  }
  
  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }

}
