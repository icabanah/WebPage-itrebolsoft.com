import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { AuthenticationService } from '../services/authentication.service';
import { ActualizarDataService } from '../services/actualizar-data.service';

@NgModule({
  declarations: [PortafolioComponent, SidebarComponent, ProjectsComponent, ProjectComponent],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    HttpClientModule
  ],
  providers:[AuthenticationService, ActualizarDataService]
})
export class PortafolioModule { }
