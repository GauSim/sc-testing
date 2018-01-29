import { Action } from '@ngrx/store';
import { IServiceCall } from './IServiceCall';

export enum ServiceCallActionTypes {
  LoadServiceCall = '[ServiceCall] LoadServiceCall',
  LoadServiceCallSuccess = '[ServiceCall] LoadServiceCallSuccess'
}

export type ServiceCallActions = LoadServiceCall  |  LoadServiceCallSuccess;

export class LoadServiceCall implements Action {
  readonly type = ServiceCallActionTypes.LoadServiceCall;

  constructor(public payload: string) { }
}

export class LoadServiceCallSuccess implements Action {
  readonly type = ServiceCallActionTypes.LoadServiceCallSuccess;

  constructor(public payload: IServiceCall) { }
}

