import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicacionesComponent } from './publicaciones.component';
import { NewPublishComponent } from './new-publish/new-publish.component';

const routes: Routes = [
  {
    path:'',
    component:PublicacionesComponent
  },
  {
    path:'admin/new-publish',
    component:NewPublishComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
