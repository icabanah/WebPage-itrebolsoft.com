import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Image } from 'src/app/modelos/Image';

export interface Publish {
  publId?: string;
  publName: string;
  publDesc: string;
  publBody: string;
  publDate: Date;
  fkTUserUserId?: string;
}

@Injectable()

export class ActualizarDataService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  // IMAGENES
  RegistrarImagen(imagen: Image) {
    return this._http.post(this.baseUrl + '/api/CreateImage', imagen);
  }

  EliminarImagen(ImageId:string){
    return this._http.delete(this.baseUrl + '/api/DeleteImageById/' + ImageId);
  }

  EliminarImagenesPorPublId(PublId:string){
    return this._http.delete(this.baseUrl + '/api/DeleteImageByPublId/' + PublId);
  }

  ObtenerImagenPorPubl(PublId:string):Observable<any>{
    return this._http.get(this.baseUrl+'/api/GetImagesByPublId/'+PublId);
  }

  ObtenerImagenes():Observable<any>{
    return this._http.get(this.baseUrl + '/api/GetImages');
  }

  // PUBLICACIONES
  RegistrarPublicacion(publicacion: Publish): Observable<any> {
    return this._http.post(this.baseUrl + '/api/Blog', publicacion);
  }

  ObtenerPublicaciones(): Observable<any> {
    return this._http.get(this.baseUrl + '/api/Blog');
  }

  ObtenerPublicacionPorID(PublId: string): Observable<any> {
    return this._http.get(this.baseUrl + '/api/Blog/' + PublId);
  }

  ActualizarPublicacion(PublId: string, Publ: Publish): Observable<any> {
    return this._http.put(this.baseUrl + '/api/Blog/' + PublId, Publ);
  }

  EliminarPublicacion(PublId: string): Observable<any> {
    return this._http.delete(this.baseUrl + '/api/Blog/' + PublId);
  }

  ObtenerDetallesUsuario(UserId: string): Observable<any> {
    return this._http.get(this.baseUrl + '/api/User/' + UserId);
  }
}
