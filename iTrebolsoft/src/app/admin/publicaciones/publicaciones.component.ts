import { Component, OnInit } from '@angular/core';
import { ActualizarDataService, Publish } from './actualizar-data.service';
import { Image } from 'src/app/modelos/Image';

@Component({
  selector: 'its-publicaciones',
  templateUrl: './publicaciones.component.html',
  styles: []
})
export class PublicacionesComponent implements OnInit {
  Publicaciones:Publish[] = [];
  Imagenes = [];
  constructor(private _data:ActualizarDataService) { }

  ngOnInit() {
    this._data.ObtenerPublicaciones().subscribe((publicaciones)=>{
      this.Publicaciones = publicaciones;
      this.Publicaciones.forEach((publicacion, index)=>{
        this._data.ObtenerImagenPorPubl((publicacion.publId)).subscribe((imagenes:Image[])=>{
          if(imagenes.length != 0)
            this.Imagenes[index] = imagenes[0].imageUrl;
          else this.Imagenes[index] = null;
        })
      });
    });
  }
}
