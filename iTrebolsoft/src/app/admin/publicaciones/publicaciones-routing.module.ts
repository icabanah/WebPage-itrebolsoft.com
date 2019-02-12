import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicacionesComponent } from './publicaciones.component';
import { NewPublishComponent } from './new-publish/new-publish.component';
import { EditPublishComponent } from './edit-publish/edit-publish.component';

const routes: Routes = [
  {
    path:'', redirectTo:'publicaciones',pathMatch:'full'
  },
  {
    path:'publicaciones',
    component:PublicacionesComponent,
    
  },
  {
    path:'new-publish',
    component:NewPublishComponent
  },
  {
    path:'publicacion/:id',
    component:EditPublishComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
