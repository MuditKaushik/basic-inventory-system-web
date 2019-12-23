import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InventoryRoutes } from './inventory-routes';
import { InventoryComponent } from './inventory-component';
import { AddInventoryProductComponent } from './add/add-inventory-product-component';
import { ViewInventoryProductComponent } from './view/view-inventory-product-component';
import { ViewProductComponent } from './view/view-product-component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InventoryRoutes
    ],
    declarations: [
        InventoryComponent,
        AddInventoryProductComponent,
        ViewInventoryProductComponent,
        ViewProductComponent
    ]
})
export class InventoryModule { }
