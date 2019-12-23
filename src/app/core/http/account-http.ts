import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILogin } from '../model';

@Injectable()
export class AccountHttp {
    constructor(private http: HttpClient) { }
    getToken(user: ILogin): Observable<{ token: string }> {
        return this.http.post<{ token: string }>('api/account/user/token', user, { observe: 'response' }).pipe(map((response) => {
            return (response.status === 200 && response.body != null) ? <{ token: string }>response.body : { token: '' };
        }));
    }
}