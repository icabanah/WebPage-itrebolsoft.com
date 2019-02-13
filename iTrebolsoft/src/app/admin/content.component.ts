import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'its-content',
    template: `
    <div class="row">
        <div class="col col-12 ml-3">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    styleUrls: []
})
export class ContentComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }
}

