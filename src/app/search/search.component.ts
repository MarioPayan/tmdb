import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Router } from '@angular/router';
import { Observable, Subscription  } from 'rxjs/Rx';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  private persons = [];
  private query = "";
  private timer: any;
  
  constructor(
    private tmdbService: TmdbService,
    private router: Router,
    private tmdbHelper : TmdbHelper
  ) { }

  ngOnInit() {
  }
  
  /**Metodo encargado de generar la consulta con la informacion
   * del actor otorgada
   * @param {query:string} cadena que almacena la consult
   * @return {:void} */
  search(query: string): void{
    this.tmdbService.getSearchPerson(query)
      .subscribe(persons => {
        this.persons = persons.results;
      });
  }
  
  /**Metodo encargado de actualizar la lista de resultados despues
   * de determinado tiempo de que se haya terminado de escribir
   * @return {:void} */
  queryTyping(): void {
    this.persons = [];
    this.timer = Observable.timer(1000);
    this.timer.subscribe(() => {
        if (this.query) this.search(this.query);
    });
  }
  
  /**Metodo encargado de limpiar el input de la busqueda y desaparecer
   * de la vista la lista de resultados
   * @return {:void} */
  clear(): void {
    this.persons = [];
    this.query = "";
  }
  
  /**Metodos encargados de redireccionar al usuario a otro componente
   * @param {id:number} identificador de un elemento dado para ser detallado
   * en el componente siguiente
   * @return {:void} */
  goHome(): void{
    this.router.navigate(['']);
  }
  
  goProfile(id: number): void{
    this.clear();
    this.router.navigate(['/profile', id]);
  }
  
  goPopularPersons(): void{
    this.router.navigate(['/persons', 'popular']);
  }
  
  goPopularMovies(): void{
    this.router.navigate(['/movies', 'popular']);
  }
  
  goTopMovies(): void{
    this.router.navigate(['/movies', 'top']);
  }
  
  goUpComingMovies(): void{
    this.router.navigate(['/movies', 'upcoming']);
  }
  
  goNowPlaying(): void{
    this.router.navigate(['/movies', 'nowplaying']);
  }
}
