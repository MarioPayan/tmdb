import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'persons-cards',
  templateUrl: './persons-cards.component.html',
  styleUrls: ['./persons-cards.component.css']
})

export class PersonsCardsComponent implements OnInit {
  
  @Input() private filter: string;
  @Input() private id: string;
  private persons = [];
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
			//Se guarda un arreglo de actores en la variable persons
			//segun el filtro escogido
			if(this.filter==='popular'){
  			this.tmdbService.getPopularPersons()
  				.subscribe(persons => {
  					this.persons = persons.results;
  				});
  				this.title = "Popular persons";
			} else if(this.filter==='cast'){
  			this.tmdbService.getCastPersons(this.id)
  				.subscribe(persons => {
  					this.persons = persons.cast.slice(0,4);
  				});
  				this.title = "Important cast";
			}
			this.filter = null;
    });
  }
  
  ngOnChanges(): any{
    this.filter = "cast";
    this.ngOnInit();
  }
  
  /**Metodos encargados de redireccionar al usuario a otro componente
   * @param {id:number} identificador de un elemento dado para ser detallado
   * en el componente siguiente
   * @return {:void} */
  goProfile(id: number): void{
    this.router.navigate(['/profile', id]);
  }

}
