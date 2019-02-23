import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/modelos/Image';
import { Usuario } from 'src/app/modelos/Usuario';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';
import { Publish } from 'src/app/modelos/Publish';

@Component({
  selector: 'its-publicaciones',
  templateUrl: './publicaciones.component.html',
  styles: []
})
export class PublicacionesComponent implements OnInit {
  Publicaciones:Publish[] = [];
  Imagenes:Image[];
  Usuarios:Usuario[] = [];
  Etiquetas:Array<string[]> = [];
  constructor(private _data:ActualizarDataService) { }

  ngOnInit() {
    this._data.ObtenerPublicaciones().then((response)=>{
      this.Publicaciones = response.Publicaciones;
      this.Imagenes = response.Imagenes;
      this.Usuarios = response.Usuarios;
      this.Publicaciones.forEach((publicacion:Publish, index)=>{
        this.Etiquetas[index] = publicacion.publEtiq.split(',');
      });
    });
  }
}
