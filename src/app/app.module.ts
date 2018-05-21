import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { environment } from '../environments/environment';

import { AppRoutingModule } from './/app-routing.module';
import { AddDrinkComponent } from './add-drink/add-drink.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinkService } from './services/drink.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    DrinkDetailComponent,
    DashboardComponent,
    AddDrinkComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'proyecto-tpv'),
    AngularFireDatabaseModule,
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    // AngularFireStorageModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    DrinkService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
