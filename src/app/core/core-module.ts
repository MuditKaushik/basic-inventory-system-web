import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountHttp } from './http/account-http';
import { InventoryHttp } from './http/inventory-http';
import { AccountService } from './http-service/account-http-service';
import { InventoryService } from './http-service/inventory-http-service';
import { AppCommonService } from './services/common-service';
import { HttpInterceptorService } from './services/http-interceptor-service';
import { AppBannerMessageComponent, AppLoaderComponent, AppToastMessageComponent } from './common';
@NgModule({
    imports: [
        HttpClientModule,
        CommonModule
    ],
    declarations: [
        AppBannerMessageComponent,
        AppToastMessageComponent,
        AppLoaderComponent
    ],
    exports: [
        AppBannerMessageComponent,
        AppToastMessageComponent,
        AppLoaderComponent
    ],
    providers: [
        AccountHttp,
        AccountService,
        InventoryHttp,
        InventoryService,
        AppCommonService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
    ]
})
export class AppCoreModule { }
