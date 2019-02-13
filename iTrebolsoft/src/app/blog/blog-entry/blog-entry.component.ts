import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ActualizarDataService, Publish, ImagePubl } from 'src/app/admin/publicaciones/actualizar-data.service';
import { Usuario } from 'src/app/modelos/Usuario';

@Component({
  selector: 'its-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {
  publicacion:Publish = {
    publName: '',
    publDesc: '',
    publBody: '',
    publDate: new Date,
    fkTUserUserId: JSON.parse(localStorage.getItem('UserId'))
  }

  id:string = '';

  image:ImagePubl = {
    imageName: '',
    imageUrl: '',
    fkTBlogPublId: ''
  }

  Autor:Usuario = {
    userId: '',
    userFirstName: '',
    userLastname: '',
    userGit: '',
    userEmail: '',
    userRole: '',
    userPhone: '',
    userAddress: '',
    userWeb: '',
    token: ''
  }

  constructor(private _route:ActivatedRoute, private _router:Router, private _data:ActualizarDataService) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      this._data.ObtenerPublicacionPorID(this.id).subscribe((publ)=>{
        this.publicacion = publ;
        this._data.ObtenerImagenPorPubl(this.id).subscribe((imagen:ImagePubl[])=>{
          console.log('edit-publishComponent|ngInit|imagen');
          console.log(imagen);
          if(imagen.length != 0){
            this.image = imagen[0];
          }
        })
      });

      this._data.ObtenerDetallesUsuario(this.publicacion.fkTUserUserId).subscribe((autor)=>{
        if(autor){
          this.Autor = autor;
        }
        else{
          this.Autor = null;
        }
      });
    });
  }

}
