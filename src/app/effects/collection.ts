
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceCallActionTypes, LoadSuccess, Load } from '../actions/serviceCall';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class CollectionEffects {
  constructor(
    private actions$: Actions
  ) { }

  @Effect() login$ = this.actions$
    .ofType(ServiceCallActionTypes.Load)
    .delay(1000)
    .switchMap((it: Load) => {
      // delay here
      return of(
        new LoadSuccess({ id: it.payload, title: 'mocked sc title with id->' + it.payload })
      )
    })
}
