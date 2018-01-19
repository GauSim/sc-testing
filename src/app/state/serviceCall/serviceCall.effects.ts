
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceCallActionTypes, LoadSuccess, Load } from './serviceCall.actions';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ServiceCallEffects {
  constructor(
    private actions$: Actions
  ) { }

  @Effect() loadServiceCall$ = this.actions$
    .ofType(ServiceCallActionTypes.Load)
    .delay(1000)
    .switchMap((it: Load) => {
      console.log('serviceCall loaded ...')
      return of(
        new LoadSuccess({ id: it.payload, title: 'mocked sc title with id->' + it.payload })
      )
    })
}
