import { Component, OnInit } from '@angular/core';
import { ActualizarDataService, Publish } from '../actualizar-data.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'its-new-publish',
  templateUrl: './new-publish.component.html',
  styles: []
})
export class NewPublishComponent implements OnInit {
  publicacion = {
    publ_name: '',
    publ_desc: '',
    publ_body: '',
    publ_date: new Date,
    user_id: ''
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
