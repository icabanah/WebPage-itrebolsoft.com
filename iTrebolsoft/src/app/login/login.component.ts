import { Component, OnInit } from '@angular/core';
import { AuthenticationService, CredencialIngreso } from '../services/authentication.service';
import { Usuario } from '../modelos/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'its-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public credenciales:CredencialIngreso={
    UserName:'',
    password:''
  }

  UserID:string;
  constructor(private _auth:AuthenticationService,
              private _router:Router) { }

  ngOnInit() {
  }

  Ingresar(){
    this._auth.Ingresar(this.credenciales).subscribe((response)=>{
      if(response.token){
        this.UserID = response.userId;
        localStorage.setItem('UserId',JSON.stringify(this.UserID));
        this._router.navigateByUrl("/");
      }
    });
  }
}
