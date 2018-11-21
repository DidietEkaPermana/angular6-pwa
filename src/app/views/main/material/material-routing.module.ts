import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent, ItemComponent, ItemDetailComponent } from "./po";

const routes: Routes = [{
    path: '',
    component: HeaderComponent
},{
    path: 'poitem',
    component: ItemComponent
},{
    path: 'poitemdetail',
    component: ItemDetailComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]  
})
export class MaterialRoutingModule {}