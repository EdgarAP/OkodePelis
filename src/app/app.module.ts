import {AppRouterModule} from "./app-router/app-router.module";
import {MovieService} from "./movie.service";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
