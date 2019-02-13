import { Component, OnInit } from '@angular/core';
import { ActualizarDataService } from '../admin/publicaciones/actualizar-data.service';
import { AuthenticationService } from '../services/authentication.service';
import { Usuario } from '../modelos/Usuario';
import { ProyectosDataService } from '../portafolio/proyectos-data.service';

@Component({
  selector: 'its-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {
  Usuario:Usuario;

  constructor(private _data:ActualizarDataService, private _auth:AuthenticationService, private _proyecto:ProyectosDataService) { }

  ngOnInit() {
    this._data.ObtenerDetallesUsuario(this._auth.ObtenerIdUsuario()).subscribe((usuario)=>{
      this.Usuario = usuario;
    });
  }

}
