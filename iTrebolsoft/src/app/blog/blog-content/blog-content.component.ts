import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'its-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  IrAEntrada(IdEntrada:string){
    
  }

}
