
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { authContextActionTypes, ContextLoaded, AwaitingContextLoaded } from './authContext.actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthContextEffects {
  constructor(
    private actions$: Actions
  ) { }

  @Effect() awaitingContext$ = this.actions$
    .ofType(authContextActionTypes.AwaitingContextLoaded)
    .map(x => {
      console.log('...loading contextLoaded')
      return x;
    })
    .delay(1000)
    .switchMap((it: AwaitingContextLoaded) => {
      // delay here
      console.log('contextLoaded loaded ...');
      return of(
        new ContextLoaded({ authToken: 'yeaaah!' })
      )
    })

}
