import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { AwaitingContextLoaded } from '../state/authContext/authContext.actions';

@Injectable()
export class EnsureAuthContextGuard implements CanActivate {

  constructor(private store: Store<State>) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const isLoaded$ = this.store.select(x => x.authContext)
      .map(ctx => !!ctx.authToken);

    // request the ctx if no token
    isLoaded$
      .take(1)
      .filter(loaded => !loaded)
      .map(() => new AwaitingContextLoaded(next))
      .subscribe(this.store);

    // will yield until sees authToken
    return isLoaded$.filter(hasToken => hasToken);
  }
}
