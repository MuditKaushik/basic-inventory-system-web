import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { UserLoginComponent } from './login/user-login-component';
import { UserLogoutComponent } from './logout/user-logout-component';

let lazyAccountRoutes: Routes = new Array<Route>(
    {
        path: '',
        component: UserLoginComponent
    },
    {
        path: 'logout',
        component: UserLogoutComponent
    }
);

@NgModule({
    imports: [RouterModule.forChild(lazyAccountRoutes)],
    exports: [RouterModule]
})
export class AccountRouteModule { }