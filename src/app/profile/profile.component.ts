import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbService } from '../tmdb.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	
	person: any;
	private subscription: Subscription;
	
	constructor(private tmdbService: TmdbService, private route: ActivatedRoute) { }
	
	rewrite(): void{
		if (this.person.deathday === "") this.person.deathday="present";
	}

	ngOnInit() {
		this.subscription = this.route.params.subscribe((param: any) => {
			let id = param['id'];
			console.log(param['id']);
			console.log(id);
			this.tmdbService.getDetailPerson(id)
				.subscribe(person => {
					this.person = person;
					console.log(person);
					this.rewrite();
				});
		});
		
	}
}
