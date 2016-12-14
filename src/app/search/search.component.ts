import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  private persons = [];
  constructor(private tmdbService: TmdbService) { }

  ngOnInit() {
  }
  
  search(query: string){
    this.tmdbService.getSearchPerson(query)
      .subscribe(persons => {
        this.persons = persons;
      });
  }

}
