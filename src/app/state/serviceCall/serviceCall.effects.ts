
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceCallActionTypes, LoadSuccess, Load } from './serviceCall.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/index';
import { of } from 'rxjs/observable/of';
import { serviceCallState } from './serviceCall.state';


@Injectable()
export class ServiceCallEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<State>
  ) {


  }




  @Effect() loadServiceCall$ = this.actions$
    .ofType(ServiceCallActionTypes.Load)


    .switchMap((action: Load) => {


      const waitForAuth$ = new Observable((op) => {


        const isLoaded$ = this.store$.select(x => x.authContext)
          .filter(ctx => !!ctx.authToken).take(1).toPromise()
          .then(t => {

            console.log(`used token [${t.authToken}] serviceCall loaded ...`, action.payload)
            // http here
            setTimeout(() => {
              op.next(new LoadSuccess({ id: action.payload, title: 'mocked sc title with id->' + action.payload }));
            }, 1000)

          })
          .catch(e => op.error(e));


      });


      return waitForAuth$;
    })
}
