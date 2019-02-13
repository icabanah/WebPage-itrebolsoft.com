import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActualizarDataService, Publish, ImagePubl } from 'src/app/admin/publicaciones/actualizar-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Usuario } from 'src/app/modelos/Usuario';

@Component({
  selector: 'its-blog-main',
  templateUrl: './blog-main.component.html',
  styles: []
})
export class BlogMainComponent implements OnInit {
  Publicaciones:Publish[] = [];
  Imagenes = [];
  Nombres = [];
  constructor(private _router:Router, private _data:ActualizarDataService, private _auth:AuthenticationService) { }

  ngOnInit() {
    this._data.ObtenerPublicaciones().subscribe((publicaciones)=>{
      this.Publicaciones = publicaciones;
      this.Publicaciones.forEach((publicacion, index)=>{
        this._data.ObtenerImagenPorPubl(publicacion.publId).subscribe((imagenes:ImagePubl[])=>{
          if(imagenes.length != 0)
            this.Imagenes[index] = imagenes[0].imageUrl;
          else this.Imagenes[index] = null;
        });

        this._data.ObtenerDetallesUsuario(publicacion.fkTUserUserId).subscribe((autor:Usuario)=>{
          if(autor){
            this.Nombres[index] = autor.userFirstName;
          }
          else{
            this.Nombres[index] = null;
          }
        });
      });
    });
  }

  IrAEntrada(IdEntrada:string){
    
  }

}
