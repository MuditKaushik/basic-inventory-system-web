import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountRouteModule } from './account-routes';
import { UserLoginComponent } from './login/user-login-component';
import { UserLogoutComponent } from './logout/user-logout-component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AccountRouteModule
    ],
    declarations: [
        UserLoginComponent,
        UserLogoutComponent
    ],
    exports: [UserLogoutComponent]
})
export class AccountModule { }
