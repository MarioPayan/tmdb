import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class TmdbService {

  private url = "https://api.themoviedb.org/3/";
  private apiKey = "518d83af872f927b98cfe36a90cd05b0";
  private language = "en-US";
  private adult = "false";

  constructor(private http: Http) {
    console.log("A TmdbService instance was created");
   }
   
   get(search: string, extra_puts=""): Observable<any> {
         console.log(`${this.url}${search}?api_key=${this.apiKey}&language=${this.language}${extra_puts}`)
    return this.http.get(`${this.url}${search}?api_key=${this.apiKey}&language=${this.language}${extra_puts}`)
      .map(response => {
        return response.json();
      });
  }
   
  getPopularMovies(): Observable<any> {
    return this.get("movie/popular");
  }

  getPopularPersons(): Observable<any> {
    return this.get("person/popular");
  }
  
  getDetailPerson(id: string): Observable<any> {
    return this.get(`person/${id}`);
  }
  
  getMovieCreditsPerson(id: string): Observable<any> {
    return this.get(`person/${id}/movie_credits`);
  }
  
  getSearchPerson(query: string, page="1"): Observable<any> {
    return this.get(
      `search/person`,
      `&query=${query}&page=${page}&include_adult=${this.adult}`
    );
  }
  
  getImagesPerson(id: string): Observable<any> {
    return this.get(`/person/${id}/images`);
  }
  
  

  add(movie: any): void{
    
  }

  delete(movie) {

  }

}