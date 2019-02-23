import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/Usuario';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';
import { Publish } from 'src/app/modelos/Publish';
import { Image } from 'src/app/modelos/Image';

@Component({
  selector: 'its-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  Usuarios: Usuario[] = [];
  Publicaciones: Publish[] = [];
  Imagenes: Image[] = [];
  constructor(private _data: ActualizarDataService) { }

  ngOnInit() {
    this._data.ObtenerUsuarios().then((respuesta) => {
      this.Usuarios = respuesta;
      //   this.Publicaciones = respuesta.Publicaciones;
      //   this.Imagenes = respuesta.Imagenes;
      // })
    });
  }
}
