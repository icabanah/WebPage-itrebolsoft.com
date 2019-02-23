import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { PortafolioComponent } from './portafolio.component';

const routes: Routes = [
  {
    path: '',
    component:PortafolioComponent,
    children:[
      {
        path: '',
        component: ProjectsComponent
      },
      {
        path: 'portafolio',
        component: ProjectsComponent
      },
      {
        path: 'portafolio/:id',
        component: ProjectComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
