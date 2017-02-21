import {MovieDetailComponent} from "../movie-detail.component";
import {MovieListComponent} from "../movie-list.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path:'movies',
    component: MovieListComponent
  },
  {
    path: 'detail/:id',
    component: MovieDetailComponent
  },
  {
    path:'',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
