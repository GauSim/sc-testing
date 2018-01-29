
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as authContext from './authContext.actions';
import { of } from 'rxjs/observable/of';
import { AuthContextIframeService } from './AuthContextIframeService';

@Injectable()
export class AuthContextEffects {
  constructor(
    private actions$: Actions,
    private authContextIframeService: AuthContextIframeService
  ) { }

  @Effect() determainAuthFlow$ = this.actions$
    .ofType(authContext.authContextActionTypes.AwaitingContextLoaded)
    .switchMap((it: authContext.AwaitingContextLoaded) => {
      // if top fragment contains [fragment] use ExternalAuthentication flow
      const action = it.payload.url.some(segment => segment.path === 'fragment')
        ? new authContext.RequireExternalAuthentication(it.payload)
        : new authContext.RequireInternAuthentication(it.payload);
      return of(action);
    });

  @Effect() internalAuthFlow$ = this.actions$
    .ofType(authContext.authContextActionTypes.RequireInternAuthentication)
    .switchMap(() => {
      // => login-dialog
      return of(new authContext.ContextLoaded({ authToken: 'internal-token' }));
    });

  @Effect() externalAuthFlow$ = this.actions$
    .ofType(authContext.authContextActionTypes.RequireExternalAuthentication)
    .switchMap(() => {
      // in dev diffrent, on prod same doamin
      return this.authContextIframeService.getAuthContextFromIframe('http://127.0.0.1:8080')
        .map(it => new authContext.ContextLoaded(it));
    });


}
