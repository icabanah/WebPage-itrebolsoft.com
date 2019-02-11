import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [AdminComponent, SidebarComponent, HeaderComponent, ContentComponent, PublicacionesComponent, UsuariosComponent, ProyectosComponent, ProductosComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
