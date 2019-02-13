import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar.component';
import { HeaderComponent } from './header.component';
import { ContentComponent } from './content.component';

// modulos
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [AdminComponent, SidebarComponent, HeaderComponent, ContentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PublicacionesModule
  ]
})
export class AdminModule { }
