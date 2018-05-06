import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { DrinksComponent } from './drinks/drinks.component';

import { FormsModule } from '@angular/forms';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { AppRoutingModule } from './/app-routing.module';

import { DrinkService } from './services/drink.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDrinkComponent } from './add-drink/add-drink.component';


@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    DrinkDetailComponent,
    DashboardComponent,
    AddDrinkComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DrinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
