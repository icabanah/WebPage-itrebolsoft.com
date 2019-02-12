import { Component, OnInit } from '@angular/core';
import { ActualizarDataService, Publish, ImagePubl } from './actualizar-data.service';

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
        this._data.ObtenerImagenPorPubl((publicacion.publId)).subscribe((imagenes:ImagePubl[])=>{
          if(imagenes.length != 0)
            this.Imagenes[index] = imagenes[0].imageUrl;
          else this.Imagenes[index] = null;
        })
      });
    });
  }
}
