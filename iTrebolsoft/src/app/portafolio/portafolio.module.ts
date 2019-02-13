import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [PortafolioComponent, SidebarComponent, ProjectsComponent],
  imports: [
    CommonModule,
    PortafolioRoutingModule
  ]
})
export class PortafolioModule { }
