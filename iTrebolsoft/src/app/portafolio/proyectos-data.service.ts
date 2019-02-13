import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Proyecto } from '../modelos/Proyecto';

@Injectable()
export class ProyectosDataService {
  baseUrl = environment.baseUrl;
  constructor(private _http:HttpClient) { }

  ObtenerProyectos():Observable<any>{
    return this._http.get(this.baseUrl + '/api/Proyect');
  }

  RegistrarProyecto(proyecto:Proyecto):Observable<any>{
    return this._http.post(this.baseUrl + '/api/Proyect',proyecto);
  }
}
