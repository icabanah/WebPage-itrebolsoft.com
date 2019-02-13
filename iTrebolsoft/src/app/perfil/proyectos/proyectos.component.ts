import { Component, OnInit, Input } from '@angular/core';
import { ProyectosDataService } from 'src/app/portafolio/proyectos-data.service';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { Image } from 'src/app/modelos/Image';
import { ActualizarDataService } from 'src/app/admin/publicaciones/actualizar-data.service';

@Component({
  selector: 'its-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  Proyectos:Proyecto[];
  Imagenes:Image[];
  constructor(private _data:ProyectosDataService, private _image:ActualizarDataService) { }

  ngOnInit() {
    this._data.ObtenerProyectos().subscribe((proyectos)=>{
      this.Proyectos = [];
      this.Proyectos = proyectos;
      // this.Proyectos.forEach((proyecto, index)=>{
      //   this._image.
      });
    });
  }

}
