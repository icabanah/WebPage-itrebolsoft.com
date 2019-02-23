import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { Image } from 'src/app/modelos/Image';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';

@Component({
  selector: 'its-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  Proyectos: Proyecto[] = [];
  Imagenes: Image[] = [];
  Imagen:Image;
  Proyecto:Proyecto;
  Etiquetas:Array<string[]> = [];
  constructor(private _data: ActualizarDataService) { }

  ngOnInit() {
    this._data.ObtenerProyectos().then( (response) => {
      var { Proyectos, Imagenes } = response;
      this.Proyectos = Proyectos;
      this.Imagenes = Imagenes;
      this.Proyectos.forEach((proyecto:Proyecto, index)=>{
        this.Etiquetas[index] = proyecto.proyEtiq.split(',');
      });
    });
  }

  abrirImagen(index:number){
    this.Imagen = this.Imagenes[index];
    this.Proyecto = this.Proyectos[index];
  }
}
