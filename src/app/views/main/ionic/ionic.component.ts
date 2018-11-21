import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { HeaderComponent } from './po';

@Component({
    templateUrl: 'ionic.component.html',
    styleUrls: ['ionic.css']
})
export class MyIonicComponent {
    rootPage: any = HeaderComponent;

    constructor(
        platform: Platform,
    ) {
        platform.ready().then(() => {
        });
    }
}

