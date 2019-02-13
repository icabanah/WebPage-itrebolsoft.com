import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/modelos/Usuario';

@Component({
  selector: 'its-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {
  @Input() Usuario:Usuario;
  
  constructor() { }

  ngOnInit() {
  }

}
