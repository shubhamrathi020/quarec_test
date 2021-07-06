import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  {path:"", component:SearchMovieComponent},
  {path:"**", component:SearchMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
