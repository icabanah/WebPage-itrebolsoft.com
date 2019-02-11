import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

export interface Publish{
  publ_id?:string;
  publ_name:string;
  publ_desc:string;
  publ_body:string;
  publ_date:Date;
  user_id:string;
}

export class ActualizarDataService {

  constructor(private _http:HttpClient) { }

  RegistrarPublicacion(publicacion:Publish){
    // return this._http.post()
    console.log('ActualizarData|RegistrarPublicacion|publicacion');
    console.log(publicacion);
  }
}
