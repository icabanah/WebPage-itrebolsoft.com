import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/modelos/Proyecto';

@Component({
  selector: 'its-datos-negocio',
  templateUrl: './datos-negocio.component.html',
  styleUrls: ['./datos-negocio.component.scss']
})
export class DatosNegocioComponent implements OnInit {
  @Input() Proyectos:Proyecto[];
  constructor() { }

  ngOnInit() {
  }

}
