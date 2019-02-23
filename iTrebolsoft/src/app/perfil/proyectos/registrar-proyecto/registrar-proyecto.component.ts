import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/modelos/Image';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';

@Component({
  selector: 'its-registrar-proyecto',
  templateUrl: './registrar-proyecto.component.html',
  styles: []
})
export class RegistrarProyectoComponent implements OnInit {

  proyecto:Proyecto = {
    proyTitle: '',
    proyDesc: '',
    proyDate: new Date(),
    proyUrl: '',
    proyEtiq: '',
    fkTUserUserId: JSON.parse(localStorage.getItem('UserId'))
  }

  imagen:Image = {
    imageName: '',
    imageUrl: '',
    fkTBlogPublId: null,
    fkTProductoProdId: null,
    fkTProyProyId: ''
  }
  ProyectoRegistrado:string = '';
  ImagenRegistrado:string = '';
  constructor(private _data:ActualizarDataService,
              private _router:Router) { }

  ngOnInit() {
  }

  RegistrarProyecto(){
    this._data.RegistrarProyecto(this.proyecto, this.imagen).then((respuesta)=>{
      this.ProyectoRegistrado = respuesta.ProyectoRegistrado;
      this.ImagenRegistrado = respuesta.ImagenRegistrada;
      this._router.navigateByUrl("/perfil/proyectos");
    });
  }

}
