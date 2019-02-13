import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistrarProyectoComponent } from './proyectos/registrar-proyecto/registrar-proyecto.component';
import { ActualizarProyectoComponent } from './proyectos/actualizar-proyecto/actualizar-proyecto.component';

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
        path:'registrar-proyecto',
        component:RegistrarProyectoComponent
      },
      {
        path:'actualizar-proyecto',
        component:ActualizarProyectoComponent
      },
      {
        path:'publicaciones',
        component:PublicacionesComponent
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
