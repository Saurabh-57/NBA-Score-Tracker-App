import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [

  {
    path: 'results/:teamCode',
    component: ResultsComponent
  },
  {
    path : '',
    component: TeamsComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
