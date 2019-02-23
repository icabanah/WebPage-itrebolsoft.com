import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuario } from 'src/app/modelos/Usuario';
import { Image } from 'src/app/modelos/Image';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';
import { Publish } from 'src/app/modelos/Publish';

@Component({
  selector: 'its-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {
  Publicacion:Publish;
  Imagen:Image[] = [];
  id:string = '';
  Usuario:Usuario;
  tags:string[] = [];
  constructor(private _route:ActivatedRoute, private _router:Router, private _data:ActualizarDataService) { }

  async ngOnInit() {
    await this._route.params.subscribe(async (params:Params)=>{
      this.id = params['id'];
      let { Publicacion, Imagen, Usuario } = await this._data.ObtenerPublicacionPorID(this.id);
      this.Publicacion = Publicacion;
      this.Imagen = Imagen;
      this.Usuario = Usuario;
      this.tags = await this.Publicacion.publEtiq.split(',');
      console.log(this.tags);
    });
  }

}
