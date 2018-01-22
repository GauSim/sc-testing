import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { Load } from '../state/serviceCall/serviceCall.actions';

@Injectable()
export class EnsureItemGuard implements CanActivate {

  constructor(private store: Store<State>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id: string = route.params['id'];
    this.store.dispatch(new Load(id));
    return true;
  }
}
