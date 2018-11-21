import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicRoutingModule } from "./ionic-routing.module";

import { IonicModule, IonicApp } from 'ionic-angular'

import { PoService, HeaderComponent, ItemComponent, ItemDetailComponent } from "./po";
import { MyIonicComponent } from "./ionic.component";

@NgModule({
    imports: [
        CommonModule,
        IonicRoutingModule,
        IonicModule.forRoot(MyIonicComponent)
    ],
    declarations:[
        MyIonicComponent,
        HeaderComponent,
        ItemComponent,
        ItemDetailComponent,
    ],
    // bootstrap: [IonicApp],
    providers: [
        PoService
    ]
})
export class MyIonicModule { }