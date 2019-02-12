import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';
import { NewPublishComponent } from './new-publish/new-publish.component';
import { FormsModule } from '@angular/forms';

// servicios
import { ActualizarDataService } from './actualizar-data.service';
import { EditPublishComponent } from './edit-publish/edit-publish.component';

@NgModule({
  declarations: [PublicacionesComponent, NewPublishComponent, EditPublishComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    PublicacionesRoutingModule
  ],
  providers:[ActualizarDataService]
})
export class PublicacionesModule { }
