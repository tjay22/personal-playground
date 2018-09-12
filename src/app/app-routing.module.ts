import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Experiment1Component } from './experiment1/experiment1.component';
import { Experiment2Component } from './experiment2/experiment2.component';

const routes: Routes = [

  {
    path: 'experiment-hamburger-menu',
    component: Experiment1Component,
    data: {
      animation: {
        value: 'hamburger-menu'
      }
    }
  },
  {
    path: 'experiment-gooey',
    component: Experiment2Component,
    data: {
      animation: {
        value: 'gooey'
      }
    }
  },
  {
    path: '',
    redirectTo: '/experiment-hamburger-menu',
    pathMatch: 'full',
    data: {
      animation: {
        value: 'gooey'
      }
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
