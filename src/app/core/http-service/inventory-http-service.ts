import { Injectable } from '@angular/core';
import { InventoryHttp } from '../http/inventory-http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct, IUserProduct } from '../model';

@Injectable()
export class InventoryService {
    constructor(private inventoryHttp: InventoryHttp) { }
    getUserProduct(userId: string): Observable<Array<IUserProduct>> {
        return this.inventoryHttp.getUserProducts(userId);
    }
    saveProduct(product: IProduct): Observable<boolean> {
        return this.inventoryHttp.saveProduct(product).pipe(map((response) => {
            return response
        }));
    }
    deleteProduct(productIds: Array<string>): Observable<boolean> {
        return this.inventoryHttp.deleteProduct(productIds).pipe(map((response) => {
            return response;
        }));
    }
}