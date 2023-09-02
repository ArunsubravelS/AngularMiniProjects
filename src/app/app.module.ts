import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieGenericFormComponent } from './movie-generic-form/movie-generic-form.component';
import { GridComponent } from './grid/grid.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MovieGenericFormComponent,
    GridComponent,
    MovieListComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
