import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { DatosNegocioComponent } from './datos-negocio/datos-negocio.component';
import { ProyectosDataService } from '../portafolio/proyectos-data.service';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ProductosComponent } from './productos/productos.component';
import { ActualizarProyectoComponent } from './proyectos/actualizar-proyecto/actualizar-proyecto.component';
import { RegistrarProyectoComponent } from './proyectos/registrar-proyecto/registrar-proyecto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PerfilComponent, DatosPersonalesComponent, DatosNegocioComponent, ProyectosComponent, PublicacionesComponent, ProductosComponent, ActualizarProyectoComponent, RegistrarProyectoComponent],
  imports: [
    CommonModule,
    FormsModule,
    PerfilRoutingModule
  ],
  providers:[
    ProyectosDataService
  ]
})
export class PerfilModule { }
