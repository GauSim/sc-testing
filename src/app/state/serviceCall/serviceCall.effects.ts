
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { ServiceCallActionTypes, LoadSuccess, Load } from './serviceCall.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/index';

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
        let isDone = false;

        this.store$.select(x => x.authContext)
          .takeWhile(() => !isDone)
          .filter(ctx => !!ctx.authToken).take(1).toPromise()
          .then(t => {

            console.log(`used token [${t.authToken}] serviceCall loaded ...`, action.payload)
            // http here
            op.next(new LoadSuccess({ id: action.payload, title: 'mocked sc title with id->' + action.payload }));

          })
          .catch(e => op.error(e))
          .then(() => isDone = true);


      });


      return waitForAuth$;
    })
}
