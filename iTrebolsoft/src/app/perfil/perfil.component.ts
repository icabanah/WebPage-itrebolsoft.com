import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Usuario } from '../modelos/Usuario';
import { ActualizarDataService } from '../services/actualizar-data.service';

@Component({
  selector: 'its-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {
  Usuario:Usuario;

  constructor(private _data:ActualizarDataService, private _auth:AuthenticationService) { }

  ngOnInit() {
    this._data.ObtenerDetallesUsuario(this._auth.ObtenerIdUsuario()).then((usuario)=>{
      this.Usuario = usuario;
    });
  }

}
