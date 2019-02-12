import { Component, OnInit } from '@angular/core';
import { CredencialIngreso, AuthenticationService, TokenResponse } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ActualizarDataService } from 'src/app/admin/publicaciones/actualizar-data.service';

@Component({
  selector: 'its-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  name:string;
  constructor(private _router:Router, private _data:ActualizarDataService, public auth:AuthenticationService) { }

  ngOnInit() {
      if(localStorage.getItem('UserId')){
        this._data.ObtenerDetallesUsuario(JSON.parse(localStorage.getItem('UserId'))).subscribe((response)=>{
          this.name = response.userFirstName;
        });
    }
  }
}
