import { Component, OnInit } from '@angular/core';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';
import { Usuario } from 'src/app/modelos/Usuario';

@Component({
  selector: 'its-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  Usuario:Usuario;
  constructor(private _data:ActualizarDataService) { }

  async ngOnInit() {
    this.Usuario = <Usuario> await this._data.ObtenerDetallesUsuario('ad44cc25-e8df-4bda-9282-e217fd02ab51');
  }

}
