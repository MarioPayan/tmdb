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
  baseUrl = "http://image.tmdb.org/t/p/w300";
  persons = []
  
  constructor(
    private tmdbService: TmdbService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tmdbService.getPopularPersons()
      .subscribe(persons => {
        console.log("getPopularPersons");
        this.persons = persons.results;
      });
  }
  
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  goProfile(id: number): void{
    this.router.navigate(['/profile', id]);
  }

}
