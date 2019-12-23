import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory-component';
import { AddInventoryProductComponent } from './add/add-inventory-product-component';
import { ViewInventoryProductComponent } from './view/view-inventory-product-component';
let inventoryComponentChildRoutes: Array<Route> = new Array<Route>(
    {
        path: 'addproduct',
        component: AddInventoryProductComponent
    },
    {
        path: 'products',
        component: ViewInventoryProductComponent
    },
    {
        path: '**',
        redirectTo: 'products',
        pathMatch: 'full'
    }
);

let inventoryLazyRoutes: Routes = new Array<Route>(
    {
        path: '',
        component: InventoryComponent,
        children: inventoryComponentChildRoutes,
        canActivate: []
    }
);

@NgModule({
    imports: [RouterModule.forChild(inventoryLazyRoutes)],
    exports: [RouterModule]
})
export class InventoryRoutes { }