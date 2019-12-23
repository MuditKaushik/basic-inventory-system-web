import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';
// import { env } from '../server/server.config.json';
import { InventoryModule } from './inventory/inventory-module';
import { AccountModule } from './account/account-module';
let routeTracing = false;
let lazyRoutes: Routes = new Array<Route>(
    {
        path: 'inventory',
        loadChildren: () => InventoryModule
    },
    {
        path: 'account',
        loadChildren: () => AccountModule
    },
    {
        path: '',
        redirectTo: '/account',
        pathMatch: 'full'
    }
);

@NgModule({
    imports: [RouterModule.forRoot(lazyRoutes, { enableTracing: routeTracing })],
    exports: [RouterModule]
})
export class AppRouteModule { }
