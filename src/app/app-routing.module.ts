import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoloCrosswordComponent } from './solo-crossword/solo-crossword.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'solo', component: SoloCrosswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
