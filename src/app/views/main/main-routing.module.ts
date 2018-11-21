import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
    path: '',
    children: [{
        path: '',
        loadChildren: './material/material.module#MaterialModule'
    }]
}, {
    path: 'ionic',
    children: [{
        path: '',
        loadChildren: './ionic/ionic.module#MyIonicModule'
    }]
}]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}