import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { TmdbHelper } from './tmdb.helper';

import { AppComponent } from './app.component';
import { TmdbService } from './tmdb.service';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { PopularPersonsComponent } from './popular-persons/popular-persons.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    PopularPersonsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AlertModule,
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  providers: [
    TmdbService,
    TmdbHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }