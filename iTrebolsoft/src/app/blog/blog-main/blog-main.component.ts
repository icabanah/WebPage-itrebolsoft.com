import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Usuario } from 'src/app/modelos/Usuario';
import { Image } from 'src/app/modelos/Image';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';
import { Publish } from 'src/app/modelos/Publish';

@Component({
  selector: 'its-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.scss']
})
export class BlogMainComponent implements OnInit {
  Publicaciones:Publish[] = [];
  Imagenes:Image[];
  Usuarios:Usuario[] = [];
  constructor(private _router:Router, private _data:ActualizarDataService, private _auth:AuthenticationService) { }

  ngOnInit() {
    this._data.ObtenerPublicaciones().then((response)=>{
      this.Publicaciones = response.Publicaciones;
      this.Imagenes = response.Imagenes;
      this.Usuarios = response.Usuarios;
    });
  }

  IrAEntrada(IdEntrada:string){
    
  }

}
