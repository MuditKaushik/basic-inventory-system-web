import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../../core/model';
import { AppCommonService } from '../../core/services/common-service';
import { AccountService } from '../../core/http-service/account-http-service';

@Component({
    selector: 'app-user-login',
    templateUrl: 'app/account/login/user-login-template.html'
})
export class UserLoginComponent {
    user: ILogin = {} as ILogin;
    constructor(
        private router: Router,
        private appCommonService: AppCommonService,
        private accountService: AccountService
    ) { }
    login(): void {
        if (this.validateCredentials()) {
            this.accountService.getToken(this.user).subscribe((token) => {
                this.appCommonService.userToken.next(token);
                this.router.navigate(['/inventory']);
            }, () => {
                this.appCommonService.addToastMessageObservable.next({
                    isAutoDispose: true,
                    message: 'User does not exists',
                    type: 'error'
                });
            });
        }
    }

    private validateCredentials(): boolean {
        let isValid: boolean = true;
        if (!this.user.password || !this.user.username) {
            isValid = false;
            this.appCommonService.addToastMessageObservable.next({ isAutoDispose: false, message: 'Username or Password not provided.', type: 'error' });
        }
        return isValid;
    }
}