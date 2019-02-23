import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar.component';
import { HeaderComponent } from './header.component';
import { ContentComponent } from './content.component';

// modulos
import { AdminRoutingModule } from './admin-routing.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProyectosModule } from './proyectos/proyectos.module';


@NgModule({
  declarations: [AdminComponent, SidebarComponent, HeaderComponent, ContentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UsuariosModule,
    ProyectosModule
  ]
})
export class AdminModule { }
