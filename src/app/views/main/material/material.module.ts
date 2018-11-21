import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialRoutingModule } from "./material-routing.module";

import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatCardModule } from  '@angular/material/card';
import { MatButtonModule } from  '@angular/material/button';

import { PoService, HeaderComponent, ItemComponent, ItemDetailComponent } from "./po";

@NgModule({
    imports: [
        CommonModule,
        MaterialRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
    ],
    declarations:[
        HeaderComponent,
        ItemComponent,
        ItemDetailComponent,
    ],
    providers: [
        PoService
    ]
})
export class MaterialModule { }