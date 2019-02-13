import { Component, OnInit } from '@angular/core';
import { ActualizarDataService, Publish } from '../actualizar-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Image } from 'src/app/modelos/Image';

@Component({
  selector: 'its-edit-publish',
  templateUrl: './edit-publish.component.html',
  styles: []
})
export class EditPublishComponent implements OnInit {
  publicacion:Publish = {
    publName: '',
    publDesc: '',
    publBody: '',
    publDate: new Date,
    fkTUserUserId: JSON.parse(localStorage.getItem('UserId'))
  }

  id:string;

  image:Image = {
    imageName: '',
    imageUrl: '',
    fkTBlogPublId: ''
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  constructor(private _data:ActualizarDataService, private _router:Router ,private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id'];
      this._data.ObtenerPublicacionPorID(this.id).subscribe((publ)=>{
        this.publicacion = publ;
        this._data.ObtenerImagenPorPubl(this.id).subscribe((imagen:Image[])=>{
          console.log('edit-publishComponent|ngInit|imagen');
          console.log(imagen);
          if(imagen.length != 0){
            this.image = imagen[0];
          }
        })
      });
    });
  }

  ActualizarPublicacion(){
    this._data.ActualizarPublicacion(this.id,this.publicacion).subscribe((response)=>{
      console.log('edit-publishComponent|ActualizarPublicacion|response');
      console.log(response);
      if(response){
        this.image.fkTBlogPublId = response;
        this._data.RegistrarImagen(this.image).subscribe((response)=>{
          console.log('edit-publishComponent|ActualizarPublicacion|RegistrarImagen|response');
          console.log(response);
          this._router.navigateByUrl("/admin");
        })
      }
    })
  }
  
  EliminarPublicacion(){
    this._data.EliminarImagenesPorPublId(this.id).subscribe((response)=>{
      this._data.EliminarPublicacion(this.id).subscribe((response)=>{
        if(response){
          console.log(response);
          this._router.navigateByUrl("/admin");
        }
      });
    });
  }
}
