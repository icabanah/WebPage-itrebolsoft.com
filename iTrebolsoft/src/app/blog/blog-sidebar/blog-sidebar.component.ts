import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActualizarDataService, Publish, ImagePubl } from 'src/app/admin/publicaciones/actualizar-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'its-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss']
})
export class BlogSidebarComponent implements OnInit {
  Publicaciones:Publish[] = [];
  Imagenes = [];
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
      });
    });
  }

}
