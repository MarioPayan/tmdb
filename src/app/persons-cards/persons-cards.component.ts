import { Component, OnInit, Input } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'persons-cards',
  templateUrl: './persons-cards.component.html',
  styleUrls: ['./persons-cards.component.css']
})
export class PersonsCardsComponent implements OnInit {
  
  private persons = [];
  private subscription: Subscription;
  
  constructor(
		private tmdbService: TmdbService,
		private tmdbHelper: TmdbHelper,
		private route: ActivatedRoute
	) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
			let filter = param['filter'];
			
			if(filter==='popular'){
  			this.tmdbService.getPopularPersons()
  				.subscribe(persons => {
  					this.persons = persons.results;
  				});
			}
    });
  }

}
