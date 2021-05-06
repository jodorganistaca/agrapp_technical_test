import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';

const routes: Routes = [
  {path: ':media/:id', component: MovieDescriptionComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
