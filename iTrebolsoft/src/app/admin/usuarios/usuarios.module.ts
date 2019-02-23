import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuariosComponent, NuevoUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule
  ],
  providers:[
    ActualizarDataService
  ]
})
export class UsuariosModule { }
