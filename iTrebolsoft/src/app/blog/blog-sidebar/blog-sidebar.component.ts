import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Image } from 'src/app/modelos/Image';
import { Usuario } from 'src/app/modelos/Usuario';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';
import { Publish } from 'src/app/modelos/Publish';

@Component({
  selector: 'its-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss']
})
export class BlogSidebarComponent implements OnInit {
  Publicaciones:Publish[] = [];
  Imagenes:Image[] = [];
  Usuarios:Usuario[] = [];
  constructor(private _router:Router, private _data:ActualizarDataService, private _auth:AuthenticationService) { }

  ngOnInit() {
    this._data.ObtenerPublicaciones().then((response)=>{
      if(response) {
        this.Publicaciones = response.Publicaciones;
        this.Imagenes = response.Imagenes;
        this.Usuarios = response.Usuarios;
      }
    });
  }

}
