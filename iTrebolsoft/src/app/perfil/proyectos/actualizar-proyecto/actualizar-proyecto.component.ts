import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { Image } from 'src/app/modelos/Image';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'its-actualizar-proyecto',
  templateUrl: './actualizar-proyecto.component.html',
  styles: []
})
export class ActualizarProyectoComponent implements OnInit {
  id:string;
  Proyecto:Proyecto;
  Imagen:Image = {
    imageName: '',
    imageUrl: '',
    fkTProyProyId: ''
  };
  ProyectoActualizado:Boolean;
  ImageId:string;
  constructor(private _data:ActualizarDataService, private _router:Router ,private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      this._data.ObtenerProyectoPorID(this.id).then((respuesta)=>{
        this.Proyecto = respuesta.Proyecto;
        if(respuesta.Imagen[0]){
          this.Imagen = respuesta.Imagen[0];
          this.Imagen.fkTProyProyId = this.Proyecto.proyId;
        }else{
          this.Imagen = {
            imageName: '',
            imageUrl: '',
            fkTProyProyId: this.Proyecto.proyId
          }
        }
      });
    });
  }

  async ActualizarProyecto(){
    let { ProyectoActualizado, ImageId} = await this._data.ActualizarProyecto(this.Proyecto, this.Imagen);
    this.ProyectoActualizado = ProyectoActualizado;
    this.ImageId = ImageId;
    this._router.navigateByUrl("/perfil/proyectos");
  }

  async EliminarProyecto(){
    await this._data.EliminarProyecto(this.Proyecto.proyId);
    this._router.navigateByUrl("/perfil/proyectos");
  }

}
