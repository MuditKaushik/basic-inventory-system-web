import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUserProduct } from '../../core/model';
import { InventoryService } from '../../core/http-service/inventory-http-service';
import { AppCommonService } from '../../core/services/common-service';
@Component({
    selector: 'view-product',
    templateUrl: 'app/inventory/view/view-product-template.html'
})
export class ViewProductComponent {
    @Input('product') product: IUserProduct;
    @Output('remove') remove: EventEmitter<string> = new EventEmitter<string>(true);
    constructor(private inventoryService: InventoryService, private appService: AppCommonService) { }
    deleteProduct(productId: string): void {
        if (productId) {
            this.removeProduct(productId);
        }
    }
    private removeProduct(productId: string): void {
        let ids: Array<string> = [productId];
        this.inventoryService.deleteProduct(ids).subscribe((isDeleted) => {
            if (isDeleted) {
                this.remove.emit(productId);
            }
        }, (err) => {
            this.appService.addToastMessageObservable.next({
                isAutoDispose: false,
                message: 'Unable to delete product',
                type: 'error'
            });
        });
    }
}
