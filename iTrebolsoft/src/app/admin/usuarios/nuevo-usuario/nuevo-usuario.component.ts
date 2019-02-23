import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredencialRegistro, AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'its-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styles: []
})
export class NuevoUsuarioComponent implements OnInit {
  credenciales: CredencialRegistro = {
    UserName: '',
    UserFirstName: '',
    UserLastName: '',
    UserGit: '',
    UserEmail: '',
    UserRole: '',
    UserPhone: '',
    UserPhoto: '',
    UserAddress: '',
    UserWeb: '',
    Password: '',
    ConfirmPassword: '',
  }
  constructor(private _auth:AuthenticationService, private _router:Router) { }

  ngOnInit() {
  }

  Registrar(){
    this._auth.Registrar(this.credenciales).subscribe((response)=>{
      console.log(response);
      if(response){
        this._router.navigateByUrl("/login");
      }
    });
  }

}
