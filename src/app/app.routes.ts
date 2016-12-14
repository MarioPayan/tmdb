import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const ROUTES: Routes = [
	{ path: '',  component: HomeComponent },
	{ path: 'profile/:id', component: ProfileComponent }
];