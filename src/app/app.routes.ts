import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RatingComponent } from './pages/rating/rating.component';
import { JacquesComponent } from './pages/jacques/jacques.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'rating', component: RatingComponent, pathMatch: 'full' },
  { path: 'surprise', component: JacquesComponent, pathMatch: 'full' },
];
