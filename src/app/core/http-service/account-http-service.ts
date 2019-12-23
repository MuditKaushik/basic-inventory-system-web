import { AccountHttp } from '../http/account-http';
import { Observable } from 'rxjs';
import { ILogin } from '../model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountService {
    constructor(private accountHttp: AccountHttp) { }
    getToken(user: ILogin): Observable<string | null> {
        return this.accountHttp.getToken(user).pipe(map((result) => {
            return (result.token) ? result.token : null;
        }));
    }
}