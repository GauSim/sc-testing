import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { Load } from '../actions/serviceCall';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EnsureItemGuard implements CanActivate {

  constructor(private store: Store<State>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(new Load(route.params['id']))
    return true;
  }
}