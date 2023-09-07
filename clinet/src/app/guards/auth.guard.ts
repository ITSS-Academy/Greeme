import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, NavigationEnd, Route, Router, RouterStateSnapshot, RoutesRecognized, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../ngrx/states/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,public router: Router,
    private store: Store<{
      auth: AuthState
    }>,) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (state.url == "/login" || state.url == "/register") {
      return this.authService.isAuthPage = true;
    }else{
      this.store.select((state) => state.auth.isLogin).subscribe((isLogin) => {
        if (!isLogin) {
          console.log(isLogin);
          this.router.navigate(['/login']);
        }else{
          this.authService.isAuthPage = false;
        }
      });
    }

    return true;
  }
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
}
