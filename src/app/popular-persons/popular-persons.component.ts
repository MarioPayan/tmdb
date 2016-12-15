import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbHelper } from '../tmdb.helper';
import { Router } from '@angular/router';

@Component({
  selector: 'popular-persons',
  templateUrl: './popular-persons.component.html',
  styleUrls: ['./popular-persons.component.css']
})
export class PopularPersonsComponent implements OnInit {
  
  private persons = []
  
  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: TmdbHelper,
    private router: Router
  ) { }

  ngOnInit() {
    this.tmdbService.getPopularPersons()
      .subscribe(persons => {
        this.persons = persons.results;
      });
  }
  
  goProfile(id: number): void{
    this.router.navigate(['/profile', id]);
  }
}
