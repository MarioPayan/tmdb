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
  
  search(query: string){
    this.tmdbService.getSearchPerson(query)
      .subscribe(persons => {
        this.persons = persons.results;
      });
  }
  
  goHome(): void{
    this.router.navigate(['']);
  }
  
  queryTyping(): void {
    this.persons = [];
    this.timer = Observable.timer(1000);
    this.timer.subscribe(() => {
        this.search(this.query);
    });
  }
  
  clearList(): void {
    this.persons = [];
  }
  
  goProfile(id: number): void{
    this.router.navigate(['/profile', id]);
  }
}
