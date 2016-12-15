import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MovieComponent } from './movie/movie.component';
import { PersonsCardsComponent } from './persons-cards/persons-cards.component';

export const ROUTES: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home',  component: HomeComponent },
	{ path: 'profile/:id', component: ProfileComponent },
	{ path: 'movie/:id', component: MovieComponent },
	{ path: 'persons/:filter', component: PersonsCardsComponent }
];