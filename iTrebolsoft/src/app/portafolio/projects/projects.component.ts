import { Component, OnInit } from '@angular/core';
import { ProyectosDataService } from '../proyectos-data.service';
import { Proyecto } from 'src/app/modelos/Proyecto';

@Component({
  selector: 'its-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  Proyectos:Proyecto[] = [];

  constructor(private _data:ProyectosDataService) { }

  ngOnInit() {
    this._data.ObtenerProyectos().subscribe((proyectos)=>{
      if(proyectos){
        this.Proyectos = proyectos;
      }
    });
  }

}
