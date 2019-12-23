import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AppCommonService } from './core/services/common-service';
import { Router, NavigationEnd } from '@angular/router';
import { IUser } from './core/model/user';
@Component({
    selector: 'app-comment',
    templateUrl: 'app/app-template.html'
})
export class AppComponent implements AfterViewChecked {
    users: Array<IUser> = [];
    isLogedIn: boolean;
    constructor(private router: Router,
        private appCommonservice: AppCommonService,
        private changeDetection: ChangeDetectorRef) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // this.commonService.resetCommonBehaviorVariables();
            }
        });
    }
    ngAfterViewChecked(): void {
        this.appCommonservice.isUserLoggedIn.subscribe((loggedIn) => {
            this.isLogedIn = loggedIn;
            this.changeDetection.detectChanges();
        });
    }
}
