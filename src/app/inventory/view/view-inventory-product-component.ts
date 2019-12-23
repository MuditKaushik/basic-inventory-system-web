import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../core/http-service/inventory-http-service';
import { IUserProduct } from '../../core/model';

@Component({
    selector: 'view-inventory-product',
    templateUrl: 'app/inventory/view/view-inventory-product-template.html'
})
export class ViewInventoryProductComponent implements OnInit {
    inventoryProducts: Array<IUserProduct> = [];
    constructor(private inventory: InventoryService) { }
    ngOnInit(): void {
        let userId = window.localStorage.getItem('token');
        if (userId) {
            this.inventory.getUserProduct(userId).subscribe((products) => {
                this.inventoryProducts = products;
            });
        }
    }
    removeProduct(productId: string): void {
        this.inventoryProducts.map((product, index) => {
            if (product.id === productId) {
                this.inventoryProducts.splice(index, 1);
            }
        });
    }
}
