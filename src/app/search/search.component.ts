import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  private persons = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  
  search(query: string){
    this.movieService.getSearchPerson(query)
      .subscribe(persons => {
        this.persons = persons;
      });
  }

}
