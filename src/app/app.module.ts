import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/tables/tables.component';
import {HttpClientModule} from '@angular/common/http';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import { ModalModule } from 'ngx-bootstrap/modal';
import {ReactiveFormsModule} from '@angular/forms';
import {  
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( ROUTES, {useHash: true} ),
    HttpClientModule,
    MatTableModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
