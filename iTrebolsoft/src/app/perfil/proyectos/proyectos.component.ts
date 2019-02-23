import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { Image } from 'src/app/modelos/Image';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';

@Component({
  selector: 'its-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  Proyectos:Proyecto[] = [];
  Imagenes:Image[] = [];
  Etiquetas:Array<string[]> = [];
  constructor(private _data:ActualizarDataService) { }

  ngOnInit() {
    this._data.ObtenerProyectos().then((response)=>{
      var { Proyectos, Imagenes } = response;
      this.Imagenes = Imagenes;
      this.Proyectos = Proyectos;
      this.Proyectos.forEach((proyecto:Proyecto, index)=>{
        this.Etiquetas[index] = proyecto.proyEtiq.split(',');
      });
    });
  }
}
