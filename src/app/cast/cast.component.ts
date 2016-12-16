import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
        this.movies = movies.cast;
        this.sortMovies();
      });
  }
  
  ngOnChanges(): any{
    this.ngOnInit();
  }
  
  /**Ordenamiento de peliculas segun la fecha de lanzamiento
   * @return {:void} */
	sortMovies(): void {
    this.movies.sort((movieA: any, movieB: any) => {
      if (movieA.release_date == null) return 1;
      if (movieB.release_date == null) return -1;
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
  
  /**Metodo encargado de obtener el anio de una pelicula determinada
   * @param {movie:any} pelicula extraida de la api de tmdb
   * @return {:string} anio de lanzamiento de la pelicula*/
  getYear(movie: any): string {
    if (movie.release_date) return `(${movie.release_date.split('-')[0]})`;
    return ""
  }
  
  /**Metodos encargados de redireccionar al usuario a otro componente
   * @param {id:number} identificador de un elemento dado para ser detallado
   * en el componente siguiente
   * @return {:void} */
  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }
}
