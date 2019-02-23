import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient } from '@angular/common/http';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/modelos/Image';
import { Publish } from 'src/app/modelos/Publish';
import { ActualizarDataService } from 'src/app/services/actualizar-data.service';

@Component({
  selector: 'its-new-publish',
  templateUrl: './new-publish.component.html',
  styles: []
})
export class NewPublishComponent implements OnInit {
  publicacion:Publish = {
    publName: '',
    publDesc: '',
    publBody: '',
    publEtiq: '',
    publCalif: 0,
    publDate: new Date,
    fkTUserUserId: JSON.parse(localStorage.getItem('UserId'))
  }

  id:string;

  image:Image = {
    imageName: '',
    imageUrl: '',
    fkTBlogPublId: ''
  }

  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: '15rem',
  //   minHeight: '5rem',
  //   placeholder: 'Ingrese texto aquí',
  //   translate: 'no',
  //   customClasses: [
  //     {
  //       name: "quote",
  //       class: "quote",
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: "titleText",
  //       class: "titleText",
  //       tag: "h1",
  //     },
  //   ]
  // }

  constructor(private _data:ActualizarDataService, private _router:Router) { }

  ngOnInit() {
  }

  CrearPublicacion(){
    console.log('CrearPublicacion|publicacion');
    console.log(this.publicacion);
    this._data.RegistrarPublicacion(this.publicacion).subscribe((response)=>{
      if(response){
        console.log('new-publishComponent|CrearPublicacion|RegistrarPublicacion|response');
        console.log(response);
        this.image.fkTBlogPublId = response;
        console.log('new-publishComponent|CrearPublicacion|image');
        console.log(this.image);
        this._data.RegistrarImagen(this.image).then((response)=>{
          console.log('new-publishComponent|CrearPublicacion|RegistrarImagen|response');
          console.log(response);
          this._router.navigateByUrl("/perfil/publicaciones");
        })
      }
    });
  }
}
