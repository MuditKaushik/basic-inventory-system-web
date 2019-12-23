import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct, IUserProduct } from '../model';

@Injectable()
export class InventoryHttp {
    constructor(private http: HttpClient) { }
    getUserProducts(userId: string): Observable<Array<IUserProduct>> {
        return this.http.get(`api/inventory/product/${userId}`, { observe: 'response' }).pipe(map((response) => {
            return (response.status === 200) ? <[]>response.body : [];
        }))
    }
    saveProduct(product: IProduct): Observable<boolean> {
        return this.http.post<boolean>('api/inventory/product/create', product, { observe: 'response' }).pipe(map((response) => {
            return (response.status === 201) ? true : false;
        }));
    }
    deleteProduct(productIds: Array<string>): Observable<boolean> {
        return this.http.put('api/inventory/product/delete', { ids: productIds }, { observe: 'response' }).pipe(map((response) => {
            return (response.status === 200) ? true : false;
        }));
    }
}