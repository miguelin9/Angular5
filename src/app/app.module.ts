import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { environment } from '../environments/environment';

import { AppRoutingModule } from './/app-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    DashboardComponent,
    AddProductComponent
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
    ProductService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
