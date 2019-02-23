import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { DatosNegocioComponent } from './datos-negocio/datos-negocio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ActualizarProyectoComponent } from './proyectos/actualizar-proyecto/actualizar-proyecto.component';
import { RegistrarProyectoComponent } from './proyectos/registrar-proyecto/registrar-proyecto.component';
import { FormsModule } from '@angular/forms';
import { NewPublishComponent } from './publicaciones/new-publish/new-publish.component';
import { EditPublishComponent } from './publicaciones/edit-publish/edit-publish.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ProductosComponent } from './productos/productos.component';

import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [PerfilComponent, DatosPersonalesComponent, DatosNegocioComponent, ProyectosComponent, PublicacionesComponent, NewPublishComponent, EditPublishComponent, ProductosComponent, ActualizarProyectoComponent, RegistrarProyectoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularEditorModule,
    PerfilRoutingModule,
    EditorModule
  ],
  providers:[
  ]
})
export class PerfilModule { }
