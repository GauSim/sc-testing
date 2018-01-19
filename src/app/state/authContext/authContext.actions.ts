import { Action } from '@ngrx/store';
import { ActivatedRouteSnapshot } from '@angular/router';
import { authContextState } from './authContext.state';
import { IAuthContext } from '../../model/IAuthContext';

export enum authContextActionTypes {
  AwaitingContextLoaded = '[authContext] AwaitingContextLoaded',
  ContextLoaded = '[authContext] ContextLoaded'
}

export type authContextActions = AwaitingContextLoaded | ContextLoaded;

export class AwaitingContextLoaded implements Action {
  readonly type = authContextActionTypes.AwaitingContextLoaded;

  constructor(public payload: ActivatedRouteSnapshot) {
    // payload => who is awaiting
  }
}

export class ContextLoaded implements Action {
  readonly type = authContextActionTypes.ContextLoaded

  constructor(public payload: IAuthContext) { }
}


