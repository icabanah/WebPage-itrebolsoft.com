import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistrarProyectoComponent } from './proyectos/registrar-proyecto/registrar-proyecto.component';
import { ActualizarProyectoComponent } from './proyectos/actualizar-proyecto/actualizar-proyecto.component';
import { NewPublishComponent } from './publicaciones/new-publish/new-publish.component';
import { EditPublishComponent } from './publicaciones/edit-publish/edit-publish.component';

const routes: Routes = [
  {
    path:'',
    component:PerfilComponent,
    children:[
      {
        path:'', redirectTo:'/perfil/proyectos', pathMatch: 'full'
      },
      {
        path:'proyectos',
        component:ProyectosComponent
      },
      {
        path:'nuevo-proyecto',
        component:RegistrarProyectoComponent
      },
      {
        path:'editar-proyecto/:id',
        component:ActualizarProyectoComponent
      },
      {
        path:'publicaciones',
        component:PublicacionesComponent
      },
      {
        path:'nueva-publicacion',
        component:NewPublishComponent
      },
      {
        path:'publicaciones/:id',
        component:EditPublishComponent
      },
      {
        path:'productos',
        component:ProductosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
