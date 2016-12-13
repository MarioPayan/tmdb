import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


export const ROUTES: Routes = [
	{ path: '',  component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	//{ path: 'taxboard/:id', component: TaxboardComponent }
];