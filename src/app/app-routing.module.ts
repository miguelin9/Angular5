import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksComponent } from './drinks/drinks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: DrinkDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'drinks', component: DrinksComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
