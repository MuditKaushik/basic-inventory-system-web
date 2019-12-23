import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppCommonService } from '../../core/services/common-service';
import { Observable, of } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
@Component({
    template: ''
})
export class UserLogoutComponent implements OnInit {
    constructor(private router: Router, private appService: AppCommonService) { }
    ngOnInit(): void {
        this.clearUserStorage().pipe(
            flatMap(isCleared => this.clearUserServerSession()),
            map(isSessionDestroyed => isSessionDestroyed)
        ).subscribe((canLogout) => {
            if (canLogout) {
                this.router.navigate(['/account']);
            }
        });
    }
    clearUserStorage(): Observable<boolean> {
        this.appService.userToken.next(null);
        return of(true);
    }
    // Not implemented
    clearUserServerSession(): Observable<boolean> {
        return of(true);
    }
}
