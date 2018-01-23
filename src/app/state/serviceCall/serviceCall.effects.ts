
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { ServiceCallActionTypes, LoadServiceCallSuccess, LoadServiceCall } from './serviceCall.actions';
import { Store } from '@ngrx/store';
import { State } from '../../state/index';

@Injectable()
export class ServiceCallEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<State>
  ) {
  }


  @Effect() loadServiceCall$ = this.actions$
    .ofType(ServiceCallActionTypes.LoadServiceCall)
    .switchMap((action: LoadServiceCall) => {

      const waitForAuth$ = new Observable((op) => {
        let isDone = false;

        this.store$.select(x => x.authContext)
          .takeWhile(() => !isDone)
          .filter(ctx => !!ctx.authToken).take(1).toPromise()
          .then(t => {

            console.log(`used token [${t.authToken}] serviceCall loaded ...`, action.payload)
            // http here

            setTimeout(() => {
              op.next(new LoadServiceCallSuccess({ id: action.payload, subject: 'mocked sc subject with id->' + action.payload }));
            }, 3000)

          })
          .catch(e => op.error(e))
          .then(() => isDone = true);


      });


      return waitForAuth$;
    })
}
