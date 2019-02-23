import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Image } from 'src/app/modelos/Image';
import { Proyecto } from 'src/app/modelos/Proyecto';
import { Usuario } from 'src/app/modelos/Usuario';
import { Publish } from '../modelos/Publish';

@Injectable()

export class ActualizarDataService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  // IMAGENES
  RegistrarImagen(imagen: Image):Promise<any> {
    return this._http.post(this.baseUrl + '/api/CreateImage', imagen).toPromise();
  }

  ActualizarImagen(Image:Image){
    return this._http.put(this.baseUrl + '/api/UploadImageById/'+Image.imageId, Image).toPromise();
  }

  EliminarImagen(ImageId: string) {
    return this._http.delete(this.baseUrl + '/api/DeleteImageById/' + ImageId);
  }

  EliminarImagenesPorPublId(PublId: string):Promise<any> {
    return this._http.delete(this.baseUrl + '/api/DeleteImageByPublId/' + PublId).toPromise();
  }

  EliminarImagenesPorProyId(ProyId: string):Promise<any> {
    return this._http.delete(this.baseUrl + '/api/DeleteImageByProyId/' + ProyId).toPromise();
  }

  EliminarImagenesPorProdId(ProdId: string):Promise<any> {
    return this._http.delete(this.baseUrl + '/api/DeleteImageByProdId' + ProdId).toPromise();
  }
  
  ObtenerImagenes(): Observable<any> {
    return this._http.get(this.baseUrl + '/api/GetImages');
  }
  
  ObtenerImagenPorPublId(PublId: string): Promise<any> {
    return this._http.get(this.baseUrl + '/api/GetImagesByPublId/' + PublId).toPromise();
  }

  ObtenerImagenPorProyId(ProyId: string): Promise<any> {
    return this._http.get(this.baseUrl + '/api/GetImagesByProyId/' + ProyId).toPromise();
  }

  ObtenerImagenPorProdId(ProdId: string):Promise<any> {
    return this._http.get(this.baseUrl + '/api/GetImagesByProdId/' + ProdId).toPromise();
  }

  // PROYECTOS
  async ObtenerProyectos() {
    var Imagenes:Image[] = [];
    var Proyectos:Proyecto[] = [];
    await this._http.get(this.baseUrl + '/api/Proyect').toPromise().then( async (proyectos:Proyecto[])=>{
      var i = 0;
      Proyectos = proyectos;
      for ( var proyecto of Proyectos ){
        var imagenes = await this.ObtenerImagenPorProyId(proyecto.proyId);
        Imagenes[i] = imagenes[0];
        i++;
      }
    });
    return { Proyectos, Imagenes };
  }

  async ObtenerProyectoPorID(ProyId:string):Promise<any>{
    var Proyecto:Proyecto = <Proyecto> await this._http.get(this.baseUrl + '/api/Proyect/'+ProyId).toPromise();
    var Imagen:Image = <Image> await this.ObtenerImagenPorProyId(Proyecto.proyId);
    return { Proyecto, Imagen };
  }
  
  async RegistrarProyecto(proyecto:Proyecto, imagen:Image):Promise<any> {
    var ProyectoRegistrado:string = <string> await this._http.post(this.baseUrl + '/api/Proyect', proyecto).toPromise();
    imagen.fkTProyProyId = ProyectoRegistrado;
    var ImagenRegistrada:string = <string> await this.RegistrarImagen(imagen);
    return { ProyectoRegistrado, ImagenRegistrada }
  }

  async ActualizarProyecto(proyecto:Proyecto, imagen:Image):Promise<any>{
    var ProyectoActualizado:string = <string> await this._http.put(this.baseUrl + '/api/Proyect/' + proyecto.proyId, proyecto).toPromise();
    imagen.fkTProyProyId = proyecto.proyId;
    if(ProyectoActualizado){
      var ImageId = await this.RegistrarImagen(imagen);
    }
    return { ProyectoActualizado, ImageId };
  }

  async EliminarProyecto(ProyId:string):Promise<any>{
    var ImagenEliminado = <Boolean> await this.EliminarImagenesPorProyId(ProyId);
    var ProyectoEliminado = <Boolean> await this._http.delete(this.baseUrl + '/api/Proyect/' + ProyId).toPromise();
    return { ImagenEliminado, ProyectoEliminado };
  }

  // PUBLICACIONES
  async ObtenerPublicaciones() {
    var Imagenes:Image[] = [];
    var Publicaciones:Publish[] = [];
    var Usuarios:Usuario[] = [];
    
    await this._http.get(this.baseUrl + '/api/Blog').toPromise().then( async (publicaciones:Publish[])=>{
      var i = 0;
      Publicaciones = publicaciones;
      for ( var publicacion of Publicaciones ){
        var imagenes = <Image[]> await this.ObtenerImagenPorPublId(publicacion.publId);
        if(imagenes.length != 0){
          Imagenes[i] = imagenes[0];
        }else{
          Imagenes = [];
        }

        var usuario:Usuario = await this.ObtenerDetallesUsuario(publicacion.fkTUserUserId);
        Usuarios[i] = usuario;
        i++;
      }
    });
    return { Publicaciones, Imagenes, Usuarios };
  }

  async ObtenerPublicacionPorID(PublId: string): Promise<any> {
    var Publicacion:Publish = <Publish> await this._http.get(this.baseUrl + '/api/Blog/' + PublId).toPromise();
    var Imagen:Image[] = await this.ObtenerImagenPorPublId(PublId);
    var Usuario:Usuario = await this.ObtenerDetallesUsuario(Publicacion.fkTUserUserId);
    return await { Publicacion, Imagen, Usuario };
  }

  async ObtenerPublicacionesPorUsuarioID(UserId:string):Promise<any>{
    var Imagenes:Image[];
    var i = 0;
    var Publicaciones:Publish[] = <Publish[]> await this._http.get(this.baseUrl + '/api/GetPublFromUser/' + UserId).toPromise();
    for ( var publicacion of Publicaciones){
      Imagenes[i] = await this.ObtenerImagenPorPublId(publicacion.publId);
      i++;
    }
    return { Publicaciones, Imagenes };
  }

  RegistrarPublicacion(publicacion: Publish): Observable<any> {
    return this._http.post(this.baseUrl + '/api/Blog', publicacion);
  }

  ActualizarPublicacion(PublId: string, Publ: Publish): Observable<any> {
    return this._http.put(this.baseUrl + '/api/Blog/' + PublId, Publ);
  }

  EliminarPublicacion(PublId: string): Observable<any> {
    return this._http.delete(this.baseUrl + '/api/Blog/' + PublId);
  }

  ObtenerDetallesUsuario(UserId: string): Promise<any> {
    return this._http.get(this.baseUrl + '/api/User/' + UserId).toPromise();
  }

  // USUARIOS
  async ObtenerUsuarios(){
    var Usuarios:Usuario[] = <Usuario[]> await this._http.get(this.baseUrl + '/api/User').toPromise();
    return Usuarios;
  }
}
