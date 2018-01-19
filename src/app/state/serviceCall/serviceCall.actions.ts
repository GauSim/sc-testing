import { Action } from '@ngrx/store';
import { IServiceCall } from '../../model/IServiceCall';

export enum ServiceCallActionTypes {
  Load = '[ServiceCall] Load',
  LoadSuccess = '[ServiceCall] LoadSuccess',
  Select = '[ServiceCall] Select'
}

export type ServiceCallActions = Load | LoadSuccess | Select;

export class Load implements Action {
  readonly type = ServiceCallActionTypes.Load;

  constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
  readonly type = ServiceCallActionTypes.LoadSuccess

  constructor(public payload: IServiceCall) { }
}

export class Select implements Action {
  readonly type = ServiceCallActionTypes.Select;

  constructor(public payload: string) { }
}

