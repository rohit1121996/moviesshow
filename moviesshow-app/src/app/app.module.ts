import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpcommingMoviesComponent } from './upcomming-movies/upcomming-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    UpcommingMoviesComponent,
    TopRatedMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
