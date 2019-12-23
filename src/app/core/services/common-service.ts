import { Injectable } from '@angular/core';
import { IToastMessage } from '../model';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../model/user';

@Injectable()
export class AppCommonService {
    private readonly defaultToastMessage: IToastMessage = {} as IToastMessage;
    private defaultUser: IUser = {} as IUser;
    private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    addToastMessageObservable: BehaviorSubject<IToastMessage> = new BehaviorSubject<IToastMessage>(this.defaultToastMessage);
    showLoaderObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    refreshComments: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    userToken: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
    constructor() {
        this.userToken.subscribe((token) => {
            if (token === null) {
                this.isLoggedIn.next(false);
                window.localStorage.removeItem('token');
            } else {
                this.isLoggedIn.next(true);
                window.localStorage.setItem('token', token);
            }
        });
    }
    get isUserLoggedIn(): BehaviorSubject<boolean> {
        return this.isLoggedIn;
    }
    get getSelectedUser(): IUser {
        return this.defaultUser;
    }
    set setSelectedUser(user: IUser) {
        this.defaultUser = user;
    }
}
