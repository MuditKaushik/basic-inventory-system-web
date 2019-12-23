import { Component } from '@angular/core';
import { IUserProduct } from '../../core/model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppCommonService } from '../../core/services/common-service';
import { InventoryService } from '../../core/http-service/inventory-http-service';
@Component({
    selector: 'add-inventory-product',
    templateUrl: 'app/inventory/add/add-inventory-product-template.html'
})
export class AddInventoryProductComponent {
    private product: IUserProduct = {} as IUserProduct;
    productForm: FormGroup = {} as FormGroup;
    constructor(private appservice: AppCommonService, private inventory: InventoryService) {
        this.productForm = this.createProductForm();
    }
    addProduct(): void {
        if (this.productForm.valid) {
            this.product = this.productForm.value;
            this.product.userid = '1F83DDBE-0CB1-4044-B074-DF66D9525728';
            this.saveProduct(this.product);
        } else {
            this.appservice.addToastMessageObservable.next({
                isAutoDispose: false,
                message: 'All fields are required.',
                type: 'error'
            });
        }
    }
    saveProduct(product: IUserProduct): void {
        this.inventory.saveProduct(product).subscribe((isSaved) => {
            this.appservice.addToastMessageObservable.next({
                isAutoDispose: true,
                message: `Product saved successfully.`,
                type: 'success'
            });
        }, (err) => {
            this.appservice.addToastMessageObservable.next({
                isAutoDispose: true,
                message: `Unable to save Product, because it may already exists.`,
                type: 'info'
            });
        });
    }
    private createProductForm(): FormGroup {
        return new FormGroup({
            name: new FormControl(this.product.name, [Validators.required]),
            description: new FormControl(this.product.description, [Validators.required]),
            price: new FormControl(this.product.price, [Validators.required])
        });
    }
}
