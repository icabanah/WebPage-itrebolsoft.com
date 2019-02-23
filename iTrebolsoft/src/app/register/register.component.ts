import { Component, OnInit } from '@angular/core';
import { CredencialRegistro, AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'its-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
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
