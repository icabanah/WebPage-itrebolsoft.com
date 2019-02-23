import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ActualizarDataService } from '../services/actualizar-data.service';

@NgModule({
  declarations: [LayoutComponent, MainHeaderComponent, MainContentComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule
  ],
  providers: [
    ActualizarDataService,
  ]
})
export class LayoutModule { }
