// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { environment } from '../environments/environment';

// modulos
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// servicios
import { ProductService } from './services/product/product.service';
import { CommandService } from './services/command/command.service';

// Dialogos (necesita entryComponents)
import { YesNoDialogComponent } from './dialogs/yes-no-dialog/yes-no-dialog.component';
import { AddProductDialogComponent } from './dialogs/add-product-dialog/add-product-dialog.component';

// Componente para tener la librería material design
import { MaterialModule } from './material/material.module';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { AppComponent } from './app.component';
import { CommandsComponent } from './bar/commands/commands.component';
import { TablesComponent } from './bar/tables/tables.component';
import { BarComponent } from './bar/bar.component';
import { CommandComponent } from './bar/command/command.component';
import { ProductsCommandComponent } from './bar/command/products-command/products-command.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DashboardComponent,
    YesNoDialogComponent,
    AddProductDialogComponent,
    CommandsComponent,
    TablesComponent,
    BarComponent,
    CommandComponent,
    ProductsCommandComponent
  ],
  entryComponents: [
    YesNoDialogComponent,
    AddProductDialogComponent
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
    ProductService,
    CommandService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
