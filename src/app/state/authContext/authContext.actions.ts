import { Action } from '@ngrx/store';
import { ActivatedRouteSnapshot } from '@angular/router';
import { IAuthContext } from '../../model/IAuthContext';

export enum authContextActionTypes {
  AwaitingContextLoaded = '[authContext] AwaitingContextLoaded',
  ContextLoaded = '[authContext] ContextLoaded',
  RequireExternalAuthentication = '[authContext] RequireExternalAuthentication',
  RequireInternAuthentication = '[authContext] RequireInternAuthentication'
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

  constructor(public payload: IAuthContext) {
    console.log('ContextLoaded')
  }
}

export class RequireInternAuthentication implements Action {
  readonly type = authContextActionTypes.RequireInternAuthentication

  constructor(public payload: ActivatedRouteSnapshot) {
    console.log('RequireInternAuthentication')
  }
}

export class RequireExternalAuthentication implements Action {
  readonly type = authContextActionTypes.RequireExternalAuthentication

  constructor(public payload: ActivatedRouteSnapshot) {
    console.log('RequireExternalAuthentication')
  }
}
