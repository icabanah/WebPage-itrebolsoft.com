import { Component, OnInit } from '@angular/core';
import { ProyectosDataService } from 'src/app/portafolio/proyectos-data.service';
import { Image } from 'src/app/modelos/Image';
import { ActualizarDataService } from 'src/app/admin/publicaciones/actualizar-data.service';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelos/Proyecto';

@Component({
  selector: 'its-registrar-proyecto',
  templateUrl: './registrar-proyecto.component.html',
  styles: []
})
export class RegistrarProyectoComponent implements OnInit {

  proyecto:Proyecto = {
    proyTitle: '',
    proyDesc: '',
    proyDate: new Date,
    fkTUserUserId: JSON.parse(localStorage.getItem('UserId'))
  }

  imagen:Image = {
    imageName: '',
    imageUrl: '',
    fkTBlogPublId: null,
    fkTProductoProdId: null,
    fkTProyProyId: ''
  }
  constructor(private _data:ProyectosDataService, 
              private _dataImage:ActualizarDataService,
              private _router:Router) { }

  ngOnInit() {
  }

  RegistrarProyecto(){
    this._data.RegistrarProyecto(this.proyecto).subscribe((ProyectoId)=>{
      if(ProyectoId){
        this.imagen.fkTProyProyId = ProyectoId;
        this._dataImage.RegistrarImagen(this.imagen).subscribe((ImageId)=>{
          this._router.navigateByUrl("/perfil/proyectos");
        })
      }
    })
  }

}
