import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

// modulos
import { PublicacionesModule } from './publicaciones/publicaciones.module';


@NgModule({
  declarations: [AdminComponent, SidebarComponent, HeaderComponent, ContentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PublicacionesModule
  ]
})
export class AdminModule { }
